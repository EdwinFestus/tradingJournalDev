import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import type { ReactNode } from "react";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    actions?: ReactNode;
    children?: ReactNode;
}

export default function PageHeader({
    title,
    subtitle,
    actions,
    children,
}: PageHeaderProps) {
    return (
        <Box sx={{ mb: 4 }}>
            <Stack
                direction={{
                    xs: "column",
                    md: "row",
                }}
                justifyContent="space-between"
                alignItems={{
                    xs: "flex-start",
                    md: "center",
                }}
                spacing={2}
            >
                <Box>
                    <Typography
                        variant="h4"
                        fontWeight={700}
                    >
                        {title}
                    </Typography>

                    {subtitle && (
                        <Typography
                            mt={1}
                            color="text.secondary"
                            variant="body1"
                        >
                            {subtitle}
                        </Typography>
                    )}
                </Box>

                {actions}
            </Stack>

            {children && (
                <>
                    <Divider sx={{ my: 3 }} />

                    {children}
                </>
            )}
        </Box>
    );
}