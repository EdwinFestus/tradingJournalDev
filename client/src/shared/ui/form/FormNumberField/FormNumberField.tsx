/**
 * ============================================================================
 * Component: FormNumberField
 * Path:
 * src/shared/ui/form/FormNumberField/FormNumberField.tsx
 *
 * Description:
 * Reusable numeric input built on top of FormTextField.
 *
 * Features:
 * - React Hook Form
 * - Numeric input
 * - Shared styling
 * - Supports min, max and step
 * ============================================================================
 */

import type { FieldValues } from "react-hook-form";

import FormTextField from "../FormTextField/FormTextField";

import type { FormNumberFieldProps } from "../types";

import { debugLog } from "../utils";

export default function FormNumberField<
    TFieldValues extends FieldValues = FieldValues,
>({
    min,
    max,
    step = "any",
    inputProps,
    ...props
}: FormNumberFieldProps<TFieldValues>) {

    debugLog(
        "[FORM-NUMBER-001]",
        `Rendering number field: ${String(props.name)}`
    );

    return (
        <FormTextField<TFieldValues>
            {...props}
            type="number"
            inputProps={{
                min,
                max,
                step,
                ...inputProps,
            }}
        />
    );
}