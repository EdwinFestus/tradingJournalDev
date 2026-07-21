/**
 * ============================================================================
 * Hook: useFormField
 * Path:
 * src/shared/ui/form/hooks/useFormField.ts
 *
 * Description:
 * Shared React Hook Form hook used by all reusable form controls.
 *
 * Responsibilities:
 * - Connect to FormProvider
 * - Provide control
 * - Provide field error
 * - Provide helper text
 * - Development logging
 *
 * ============================================================================
 */

import {
    useFormContext,
    get,
} from "react-hook-form";

import type {
    FieldPath,
    FieldValues,
} from "react-hook-form";

import { debugLog } from "../utils";

export default function useFormField<
    TFieldValues extends FieldValues = FieldValues,
>(
    name: FieldPath<TFieldValues>,
) {
    const {
        control,
        formState: { errors },
    } = useFormContext<TFieldValues>();

    const error = get(errors, name);

    debugLog(
        "[FORM-HOOK-001]",
        `Binding field: ${String(name)}`
    );

    return {
        control,
        error,
        helperText: error?.message ?? "",
    };
}