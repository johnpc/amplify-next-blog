import { Html, Head, Main, NextScript } from "next/document";
import { ThemeProvider, Theme } from "@aws-amplify/ui-react";
const theme: Theme = {
  name: "card-theme",
  tokens: {
    components: {
      card: {
        // You can reference other tokens
        backgroundColor: { value: "{colors.background.success}" },
        borderRadius: { value: "{radii.large}" },
        padding: { value: "{space.xl}" },

        // Variations
        outlined: {
          // Or use explicit values
          borderWidth: { value: "10px" },
          backgroundColor: { value: "{colors.background.warning}" },
        },
        elevated: {
          backgroundColor: { value: "{colors.background.info}" },
          boxShadow: { value: "{shadows.large}" },
        },
      },
    },
  },
};
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ThemeProvider theme={theme} colorMode="light">
          <Main />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  );
}
