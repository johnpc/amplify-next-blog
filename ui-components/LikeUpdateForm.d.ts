import * as React from "react";
import {
  GridProps,
  SwitchFieldProps,
  TextFieldProps,
} from "@aws-amplify/ui-react";
import { Like } from "./graphql/types";
export declare type EscapeHatchProps = {
  [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
  [key: string]: string;
};
export declare type Variant = {
  variantValues: VariantValues;
  overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
  hasError: boolean;
  errorMessage?: string;
};
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse,
) => ValidationResponse | Promise<ValidationResponse>;
export declare type LikeUpdateFormInputValues = {
  isLiked?: boolean;
  owner?: string;
};
export declare type LikeUpdateFormValidationValues = {
  isLiked?: ValidationFunction<boolean>;
  owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type LikeUpdateFormOverridesProps = {
  LikeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
  isLiked?: PrimitiveOverrideProps<SwitchFieldProps>;
  owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LikeUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: LikeUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    like?: Like;
    onSubmit?: (fields: LikeUpdateFormInputValues) => LikeUpdateFormInputValues;
    onSuccess?: (fields: LikeUpdateFormInputValues) => void;
    onError?: (fields: LikeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LikeUpdateFormInputValues) => LikeUpdateFormInputValues;
    onValidate?: LikeUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function LikeUpdateForm(
  props: LikeUpdateFormProps,
): React.ReactElement;
