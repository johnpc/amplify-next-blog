import * as React from "react";
import {
  GridProps,
  SwitchFieldProps,
  TextFieldProps,
} from "@aws-amplify/ui-react";
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
export declare type LikeCreateFormInputValues = {
  isLiked?: boolean;
  owner?: string;
};
export declare type LikeCreateFormValidationValues = {
  isLiked?: ValidationFunction<boolean>;
  owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type LikeCreateFormOverridesProps = {
  LikeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  isLiked?: PrimitiveOverrideProps<SwitchFieldProps>;
  owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LikeCreateFormProps = React.PropsWithChildren<
  {
    overrides?: LikeCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LikeCreateFormInputValues) => LikeCreateFormInputValues;
    onSuccess?: (fields: LikeCreateFormInputValues) => void;
    onError?: (fields: LikeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LikeCreateFormInputValues) => LikeCreateFormInputValues;
    onValidate?: LikeCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function LikeCreateForm(
  props: LikeCreateFormProps,
): React.ReactElement;
