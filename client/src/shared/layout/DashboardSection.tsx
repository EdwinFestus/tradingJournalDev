import {
    Box,
    Stack,
    Typography,
} from "@mui/material";

import type { ReactNode } from "react";

interface DashboardSectionProps {
    title: string;
    subtitle?: string;
    action?: ReactNode;
    children: ReactNode;
}

export default function DashboardSection({
    title,
    subtitle,
    action,
    children,
}: DashboardSectionProps) {
    return (
        <Box sx={{ mb: 5 }}>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mb: 3 }}
            >
                <Box>
                    <Typography
                        variant="h5"
                        fontWeight={700}
                    >
                        {title}
                    </Typography>

                    {subtitle && (
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            {subtitle}
                        </Typography>
                    )}
                </Box>

                {action}
            </Stack>

            {children}
        </Box>
    );
}