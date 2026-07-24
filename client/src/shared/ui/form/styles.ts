/**
 * ============================================================================
 * File: styles.ts
 * Path: src/shared/ui/form/styles.ts
 *
 * Description:
 * Shared Material UI sx style objects for reusable form components.
 *
 * Author:
 * ELLA Frontend v2
 * ============================================================================
 */

import type { SxProps, Theme } from "@mui/material";

import {
    FORM_BORDER_RADIUS,
    FORM_FIELD_HEIGHT,
    FORM_SECTION_MARGIN_BOTTOM,
    FORM_SECTION_PADDING,
} from "./constants";

/**
 * ============================================================================
 * Input
 * ============================================================================
 */

export const formInputSx: SxProps<Theme> = {
    "& .MuiOutlinedInput-root": {
        minHeight: FORM_FIELD_HEIGHT,
        borderRadius: FORM_BORDER_RADIUS,
    },
};

/**
 * ============================================================================
 * Section Card
 * ============================================================================
 */

export const formSectionSx: SxProps<Theme> = {
    mb: FORM_SECTION_MARGIN_BOTTOM,
    p: FORM_SECTION_PADDING,
    borderRadius: FORM_BORDER_RADIUS,
};



/**
 * ============================================================================
 * Submit Button
 * ============================================================================
 */

export const submitButtonSx: SxProps<Theme> = {
    borderRadius: FORM_BORDER_RADIUS,
    minHeight: 48,
    textTransform: "none",
    fontWeight: 600,
};

/**
 * ============================================================================
 * Cancel Button
 * ============================================================================
 */

export const cancelButtonSx: SxProps<Theme> = {
    borderRadius: FORM_BORDER_RADIUS,
    minHeight: 48,
};

/**
 * ============================================================================
 * Form Actions
 * ============================================================================
 */

export const formActionsSx: SxProps<Theme> = {
    display: "flex",
    justifyContent: "flex-end",
    gap: 2,
    mt: 3,
};

/**
 * ============================================================================
 * Slider
 * ============================================================================
 */

export const sliderSx: SxProps<Theme> = {
    mt: 1,
};

/**
 * ============================================================================
 * Helper Text
 * ============================================================================
 */

export const helperTextSx: SxProps<Theme> = {
    ml: 0,
};

/**
 * ============================================================================
 * Debug
 * ============================================================================
 */

if (import.meta.env.DEV) {
    console.debug("[FORM-STYLES-001] Shared form styles loaded.");
}