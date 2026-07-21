/**
 * ============================================================================
 * Component: FormTextField
 * Path:
 * src/shared/ui/form/FormTextField/FormTextField.tsx
 *
 * Description:
 * Reusable Material UI TextField integrated with React Hook Form.
 *
 * ============================================================================
 */

import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

import type { FieldValues } from "react-hook-form";

import { formInputSx } from "../styles";
import type { FormTextFieldProps } from "../types";
import { debugLog, mergeSx } from "../utils";

export default function FormTextField<
    TFieldValues extends FieldValues = FieldValues,
>({
    name,
    sx,
    fullWidth = true,
    helperText,
    ...textFieldProps
}: FormTextFieldProps<TFieldValues>) {
    /**
     * ============================================================================
     * React Hook Form
     * ============================================================================
     */

    const { control } = useFormContext<TFieldValues>();

    /**
     * ============================================================================
     * Debug
     * ============================================================================
     */

    debugLog(
        "[FORM-TEXT-001]",
        `Rendering field: ${String(name)}`
    );

    /**
     * ============================================================================
     * Render
     * ============================================================================
     */

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <TextField
                    {...field}
                    {...textFieldProps}
                    fullWidth={fullWidth}
                    error={!!fieldState.error}
                    helperText={
                        fieldState.error?.message ??
                        helperText
                    }
                    sx={mergeSx(formInputSx, sx)}
                />
            )}
        />
    );
}