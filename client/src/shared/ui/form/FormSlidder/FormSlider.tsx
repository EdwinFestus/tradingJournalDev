/**
 * ============================================================================
 * Component: FormSlider
 * Path:
 * src/shared/ui/form/FormSlider/FormSlider.tsx
 *
 * Description:
 * Reusable Material UI Slider integrated with React Hook Form.
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
    Box,
    Slider,
    Typography,
    FormHelperText,
} from "@mui/material";

import { sliderSx } from "../styles";
import type { FormSliderProps } from "../types";
import { debugLog, mergeSx } from "../utils";

export default function FormSlider<
    TFieldValues extends FieldValues = FieldValues,
>({
    name,
    label,
    min = 0,
    max = 100,
    step = 1,
    marks = false,
    disabled,
    sx,
}: FormSliderProps<TFieldValues>) {
    const { control } = useFormContext<TFieldValues>();

    debugLog(
        "[FORM-SLIDER-001]",
        `Rendering slider: ${String(name)}`
    );

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <Box sx={mergeSx(sliderSx, sx)}>
                    {label && (
                        <Typography
                            variant="body2"
                            gutterBottom
                        >
                            {label}
                        </Typography>
                    )}

                    <Slider
                        value={Number(field.value ?? min)}
                        onChange={(_, value) =>
                            field.onChange(value)
                        }
                        min={min}
                        max={max}
                        step={step}
                        marks={marks}
                        disabled={disabled}
                        valueLabelDisplay="auto"
                    />

                    <FormHelperText error={!!fieldState.error}>
                        {fieldState.error?.message}
                    </FormHelperText>
                </Box>
            )}
        />
    );
}