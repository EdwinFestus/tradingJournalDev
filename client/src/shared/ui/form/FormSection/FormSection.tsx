/**
 * ============================================================================
 * Component: FormSection
 * Path:
 * src/shared/ui/form/FormSection/FormSection.tsx
 *
 * Description:
 * Shared reusable section wrapper for forms.
 *
 * Used By:
 * TradeForm
 * Login
 * Register
 * Investor Forms
 * Settings
 *
 * ============================================================================
 */

import React from "react";

import {
    Card,
    CardContent,
    CardHeader,
    Divider,
    Typography,
} from "@mui/material";

import type { FormSectionProps } from "../types";
import { formSectionSx } from "../styles";

/**
 * ============================================================================
 * Component
 * ============================================================================
 */

const FormSection: React.FC<FormSectionProps> = ({
    title,
    subtitle,
    children,
    sx,
}) => {
    /**
     * ============================================================================
     * Debug
     * ============================================================================
     */

    if (import.meta.env.DEV) {
        console.debug("[FORM-SECTION-001] Rendering:", title);
    }

    /**
     * ============================================================================
     * JSX
     * ============================================================================
     */

    return (
        <Card
            elevation={0}
            sx={[formSectionSx, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}
        >
            <CardHeader
                title={
                    <Typography variant="h6" fontWeight={600}>
                        {title}
                    </Typography>
                }
                subheader={
                    subtitle ? (
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            {subtitle}
                        </Typography>
                    ) : undefined
                }
            />

            <Divider />

            <CardContent>
                {children}
            </CardContent>
        </Card>
    );
};

export default FormSection;