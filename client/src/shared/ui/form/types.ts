/**
 * ============================================================================
 * File: types.ts
 * Path: src/shared/ui/form/types.ts
 *
 * Description:
 * Shared TypeScript interfaces for reusable form components.
 *
 * Author:
 * ELLA Frontend v2
 * ============================================================================
 */

import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";
import type {
    Control,
    FieldPath,
    FieldValues,
    RegisterOptions,
} from "react-hook-form";

/**
 * ============================================================================
 * Base Field Props
 * ============================================================================
 */

export interface BaseFormFieldProps<
    TFieldValues extends FieldValues = FieldValues,
> {
    /**
     * React Hook Form field name.
     */
    name: FieldPath<TFieldValues>;

    /**
     * Optional label displayed above the field.
     */
    label?: string;

    /**
     * Optional placeholder.
     */
    placeholder?: string;

    /**
     * Disable the field.
     */
    disabled?: boolean;

    /**
     * Full width.
     *
     * Default: true
     */
    fullWidth?: boolean;

    /**
     * React Hook Form validation rules.
     */
    rules?: RegisterOptions<TFieldValues>;

    /**
     * Custom Material UI styles.
     */
    sx?: SxProps<Theme>;

    /**
     * Helper text shown below field.
     */
    helperText?: ReactNode;
}

/**
 * ============================================================================
 * Text Field
 * ============================================================================
 */

export interface FormTextFieldProps<
    TFieldValues extends FieldValues = FieldValues,
> extends BaseFormFieldProps<TFieldValues> {
    type?: React.InputHTMLAttributes<HTMLInputElement>["type"];

    autoFocus?: boolean;

    autoComplete?: string;

    startAdornment?: React.ReactNode;

    endAdornment?: React.ReactNode;
}

/**
 * ============================================================================
 * Number Field
 * ============================================================================
 */

export interface FormNumberFieldProps<
    TFieldValues extends FieldValues = FieldValues,
> extends BaseFormFieldProps<TFieldValues> {
    min?: number;
    max?: number;
    step?: number | "any";
}

/**
 * ============================================================================
 * Select
 * ============================================================================
 */

export interface SelectOption {
    label: string;
    value: string | number;
}

export interface FormSelectProps<
    TFieldValues extends FieldValues = FieldValues,
> extends BaseFormFieldProps<TFieldValues> {
    options: SelectOption[];
}

/**
 * ============================================================================
 * Text Area
 * ============================================================================
 */

export interface FormTextareaProps<
    TFieldValues extends FieldValues = FieldValues,
> extends BaseFormFieldProps<TFieldValues> {
    rows?: number;
}

/**
 * ============================================================================
 * Slider
 * ============================================================================
 */

export interface FormSliderProps<
    TFieldValues extends FieldValues = FieldValues,
> extends BaseFormFieldProps<TFieldValues> {
    control: Control<TFieldValues>;

    min?: number;

    max?: number;

    step?: number;

    marks?: boolean;
}

/**
 * ============================================================================
 * Section
 * ============================================================================
 */

export interface FormSectionProps {
    title: string;

    subtitle?: string;

    children: ReactNode;

    sx?: SxProps<Theme>;
}