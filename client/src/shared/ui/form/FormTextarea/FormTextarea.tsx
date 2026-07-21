/**
 * ============================================================================
 * Component: FormTextarea
 * Path:
 * src/shared/ui/form/FormTextarea/FormTextarea.tsx
 *
 * Description:
 * Reusable multiline text input built on top of FormTextField.
 *
 * Features:
 * - React Hook Form
 * - Material UI
 * - Shared styling
 * - Auto helper text
 * ============================================================================
 */

import type { FieldValues } from "react-hook-form";

import FormTextField from "../FormTextField";

import type { FormTextareaProps } from "../types";

import { debugLog } from "../utils";

export default function FormTextarea<
    TFieldValues extends FieldValues = FieldValues,
>({
    rows = 4,
    ...props
}: FormTextareaProps<TFieldValues>) {

    debugLog(
        "[FORM-TEXTAREA-001]",
        `Rendering textarea: ${String(props.name)}`
    );

    return (
        <FormTextField<TFieldValues>
            {...props}
            multiline
            rows={rows}
        />
    );
}