/**
 * ============================================================================
 * Component: FormSelect
 * Path:
 * src/shared/ui/form/FormSelect/FormSelect.tsx
 *
 * Description:
 * Reusable Material UI Select integrated with React Hook Form.
 *
 * Features:
 * - React Hook Form Controller
 * - Validation support
 * - Shared styling
 * - Generic TypeScript support
 * ============================================================================
 */

import {
    Controller,
    useFormContext,
} from "react-hook-form";

import type { FieldValues } from "react-hook-form";

import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormHelperText,
} from "@mui/material";

import { formInputSx } from "../styles";
import type { FormSelectProps } from "../types";
import { debugLog, mergeSx } from "../utils";

export default function FormSelect<
    TFieldValues extends FieldValues = FieldValues,
>({
    name,
    label,
    options,
    disabled,
    fullWidth = true,
    sx,
}: FormSelectProps<TFieldValues>) {

    const { control } = useFormContext<TFieldValues>();

    debugLog(
        "[FORM-SELECT-001]",
        `Rendering select: ${String(name)}`
    );

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <FormControl
                    fullWidth={fullWidth}
                    error={!!fieldState.error}
                    disabled={disabled}
                    sx={mergeSx(formInputSx, sx)}
                >
                    {label && (
                        <InputLabel>
                            {label}
                        </InputLabel>
                    )}

                    <Select
                        {...field}
                        label={label}
                    >
                        {options.map((option) => (
                            <MenuItem
                                key={String(option.value)}
                                value={option.value}
                            >
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>

                    <FormHelperText>
                        {fieldState.error?.message}
                    </FormHelperText>
                </FormControl>
            )}
        />
    );
}