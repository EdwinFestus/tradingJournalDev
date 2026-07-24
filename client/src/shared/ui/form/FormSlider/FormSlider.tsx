import {
    Controller,
    useFormContext,
} from "react-hook-form";

import type { FieldValues } from "react-hook-form";

import {
    Box,
    FormHelperText,
    Slider,
    Typography,
} from "@mui/material";

import {
    FORM_DEBUG_PREFIX,
    FORM_SLIDER_MARKS,
    FORM_SLIDER_MAX,
    FORM_SLIDER_MIN,
    FORM_SLIDER_STEP,
} from "../constants";

import { sliderSx } from "../styles";
import type { FormSliderProps } from "../types";
import { debugLog, mergeSx } from "../utils";

export default function FormSlider<
    TFieldValues extends FieldValues = FieldValues,
>({
    name,
    label,
    min = FORM_SLIDER_MIN,
    max = FORM_SLIDER_MAX,
    step = FORM_SLIDER_STEP,
    marks = FORM_SLIDER_MARKS,
    disabled,
    sx,
}: FormSliderProps<TFieldValues>) {
    const { control } = useFormContext<TFieldValues>();

    debugLog(
        `${FORM_DEBUG_PREFIX}[SLIDER]`,
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