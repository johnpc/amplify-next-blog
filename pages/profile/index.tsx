import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardOverflow from "@mui/joy/CardOverflow";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { StorageImage, StorageManager } from "@aws-amplify/ui-react-storage";
import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import { CircularProgress } from "@mui/joy";
const client = generateClient<Schema>();

export default function Profile() {
  const [profile, setProfile] = React.useState<Schema["Profile"]>();
  const [isEditingImage, setIsEditingImage] = React.useState<boolean>();
  const [isUpdating, setIsUpdating] = React.useState<boolean>();
  const nameRef = React.useRef<HTMLInputElement>();
  React.useEffect(() => {
    const setup = async () => {
      const response = await fetch("/api/users/me");
      const jsonResponse = await response.json();
      const { profile } = jsonResponse;
      setProfile(profile);
    };
    setup();
  }, []);

  const updateProfile = async (updatedFields: {
    name?: string;
    avatarKey?: string;
  }) => {
    if (!profile) {
      return;
    }

    const updatedProfile = await client.models.Profile.update({
      id: profile.id,
      userId: profile.userId,
      email: profile.email,
      avatarKey: profile.avatarKey,
      name: profile.name,
      ...updatedFields,
    });
    setProfile(updatedProfile.data);
    setIsUpdating(false);
    setIsEditingImage(false);
  };

  const onUpdateProfile = () => {
    setIsUpdating(true);
    updateProfile({ name: nameRef.current!.value });
  };

  const onEditProfileImageClick = async () => {
    setIsEditingImage(true);
  };

  const onUploadSuccess = (event: { key?: string }) => {
    setIsUpdating(true);
    updateProfile({ avatarKey: event.key });
  };

  return (
    <Box sx={{ flex: 1, width: "100%" }}>
      <Stack
        spacing={4}
        sx={{
          display: "flex",
          maxWidth: "800px",
          mx: "auto",
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Personal info</Typography>
            <Typography level="body-sm">
              Customize your profile information.
            </Typography>
          </Box>
          <Divider />
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
          >
            <Stack direction="column" spacing={1}>
              {isEditingImage ? (
                <StorageManager
                  acceptedFileTypes={["image/*"]}
                  accessLevel="guest"
                  maxFileCount={1}
                  onUploadSuccess={onUploadSuccess}
                  isResumable
                />
              ) : (
                <>
                  <AspectRatio
                    ratio="1"
                    maxHeight={200}
                    sx={{ flex: 1, minWidth: 120, borderRadius: "100%" }}
                  >
                    <StorageImage
                      alt={profile?.email}
                      imgKey={profile?.avatarKey!}
                      accessLevel="guest"
                      fallbackSrc="https://fdocizdzprkfeigbnlxy.supabase.co/storage/v1/object/public/arbor-eats-app-files/missing-avatar.png"
                    />
                    ;
                  </AspectRatio>
                  <IconButton
                    aria-label="upload new picture"
                    size="sm"
                    variant="outlined"
                    color="neutral"
                    onClick={onEditProfileImageClick}
                    sx={{
                      bgcolor: "background.body",
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      left: 100,
                      top: 170,
                      boxShadow: "sm",
                    }}
                  >
                    <EditRoundedIcon />
                  </IconButton>
                </>
              )}
            </Stack>

            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                <FormLabel>Name</FormLabel>
                <FormControl
                  sx={{
                    display: { sm: "flex-column", md: "flex-row" },
                    gap: 2,
                  }}
                >
                  <Input
                    key={profile?.name!}
                    slotProps={{
                      input: {
                        ref: nameRef as React.MutableRefObject<HTMLInputElement>,
                      },
                    }}
                    size="sm"
                    placeholder="Name"
                    defaultValue={profile?.name!}
                  />
                </FormControl>
              </Stack>
              <Stack direction="row" spacing={2}>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    size="sm"
                    type="email"
                    startDecorator={<EmailRoundedIcon />}
                    placeholder="email"
                    disabled
                    defaultValue={profile?.email}
                    value={profile?.email}
                    sx={{ flexGrow: 1 }}
                  />
                </FormControl>
              </Stack>
            </Stack>
          </Stack>
          <CardOverflow sx={{ borderTop: "1px solid", borderColor: "divider" }}>
            <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
              <Button size="sm" variant="outlined" color="neutral">
                Cancel
              </Button>
              <Button onClick={onUpdateProfile} size="sm" variant="solid">
                {isUpdating ? <CircularProgress /> : "Save"}
              </Button>
            </CardActions>
          </CardOverflow>
        </Card>
      </Stack>
    </Box>
  );
}
