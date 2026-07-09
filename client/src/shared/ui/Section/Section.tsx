import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

interface SectionProps {
    title: string;
    subtitle?: string;
    children: ReactNode;
    action?: ReactNode;
}

export default function Section({
    title,
    subtitle,
    children,
    action,
}: SectionProps) {
    return (
        <Box sx={{ mb: 4 }}>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
            >
                <Box>
                    <Typography
                        variant="h6"
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