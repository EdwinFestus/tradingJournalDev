/**
 * ============================================================================
 * File: utils.ts
 * Path: src/shared/ui/form/utils.ts
 *
 * Description:
 * Utility functions shared across reusable form components.
 *
 * Author:
 * ELLA Frontend v2
 * ============================================================================
 */

import type{ FieldError, FieldErrors, FieldValues } from "react-hook-form";
import type { SxProps, Theme } from "@mui/material";

/**
 * ============================================================================
 * Get Nested Error
 * ============================================================================
 */

/**
 * Safely retrieves nested React Hook Form errors.
 *
 * Example:
 *
 * getFieldError(errors, "pair")
 * getFieldError(errors, "psychology.confidence")
 */


/**
 * Safely retrieves nested React Hook Form errors.
 */
export function getFieldError<
    TFieldValues extends FieldValues = FieldValues,
>(
    errors: FieldErrors<TFieldValues>,
    name: string,
): FieldError | undefined {
    const keys = name.split(".");

    let current: unknown = errors;

    for (const key of keys) {
        if (
            current === null ||
            current === undefined ||
            typeof current !== "object"
        ) {
            return undefined;
        }

        current = (current as Record<string, unknown>)[key];
    }

    if (
        current &&
        typeof current === "object" &&
        "message" in current
    ) {
        return current as FieldError;
    }

    return undefined;
}
/**
 * ============================================================================
 * Merge sx Props
 * ============================================================================
 */

/**
 * Safely merges MUI sx props.
 *
 * Supports:
 * - object
 * - array
 * - undefined
 */
export function mergeSx(
    ...styles: (SxProps<Theme> | undefined)[]
): SxProps<Theme> {
    return styles.flatMap((style) => {
        if (!style) return [];
        return Array.isArray(style) ? style : [style];
    });
}

/**
 * ============================================================================
 * Development Logger
 * ============================================================================
 */

export function debugLog(
    namespace: string,
    message: string,
    payload?: unknown,
) {
    if (!import.meta.env.DEV) return;

    console.debug(namespace, message, payload ?? "");
}