import {
    Box,
    Stack,
    Typography,
} from "@mui/material";

import type { PageHeaderProps } from "./PageHeader.types";

export default function PageHeader({
    title,
    subtitle,
    actions,
    children,
}: PageHeaderProps) {
    return (
        <Box mb={4}>
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
                    <Typography variant="h3">
                        {title}
                    </Typography>

                    {subtitle && (
                        <Typography
                            mt={1}
                            variant="body1"
                            color="text.secondary"
                        >
                            {subtitle}
                        </Typography>
                    )}
                </Box>

                {actions}
            </Stack>

            {children && (
                <Box mt={3}>
                    {children}
                </Box>
            )}
        </Box>
    );
}