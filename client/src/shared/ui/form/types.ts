/**
 * ============================================================================
 * File: types.ts
 * Path:
 * src/shared/ui/form/types.ts
 *
 * Shared types for reusable form components.
 * ============================================================================
 */

import type { ReactNode } from "react";

import type { SxProps, Theme } from "@mui/material";
import type { TextFieldProps } from "@mui/material/TextField";

import type {
    FieldPath,
    FieldValues,
} from "react-hook-form";

/* ============================================================================
 * Common
 * ========================================================================== */

export interface FormSectionProps {
    title: string;
    subtitle?: string;
    children: ReactNode;
    sx?: SxProps<Theme>;
}

export interface SelectOption {
    label: string;
    value: string | number;
}

/* ============================================================================
 * Text Field
 * ========================================================================== */

export interface FormTextFieldProps<
    TFieldValues extends FieldValues = FieldValues,
> extends Omit<
        TextFieldProps,
        | "name"
        | "value"
        | "defaultValue"
        | "onChange"
        | "error"
    > {
    name: FieldPath<TFieldValues>;
}

/* ============================================================================
 * Number Field
 * ========================================================================== */

export interface FormNumberFieldProps<
    TFieldValues extends FieldValues = FieldValues,
> extends FormTextFieldProps<TFieldValues> {
    min?: number;
    max?: number;
    step?: number | "any";
}

/* ============================================================================
 * Select
 * ========================================================================== */

export interface FormSelectProps<
    TFieldValues extends FieldValues = FieldValues,
> {
    name: FieldPath<TFieldValues>;
    label?: string;
    options: SelectOption[];
    disabled?: boolean;
    fullWidth?: boolean;
    sx?: SxProps<Theme>;
}

/* ============================================================================
 * Textarea
 * ========================================================================== */

export interface FormTextareaProps<
    TFieldValues extends FieldValues = FieldValues,
> extends FormTextFieldProps<TFieldValues> {
    rows?: number;
}

/* ============================================================================
 * Slider
 * ========================================================================== */

export interface FormSliderProps<
    TFieldValues extends FieldValues = FieldValues,
> {
    name: FieldPath<TFieldValues>;
    label?: string;
    min?: number;
    max?: number;
    step?: number;
    marks?: boolean;
    disabled?: boolean;
    sx?: SxProps<Theme>;
}