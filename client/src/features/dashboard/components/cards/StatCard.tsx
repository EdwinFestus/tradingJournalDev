import {
    Avatar,
    Box,
    Paper,
    Typography,
} from "@mui/material";

import type { ReactNode } from "react";

interface Props {
    title: string;
    value: string | number;
    subtitle?: string;
    icon: ReactNode;
    color?: string;
}

export default function StatCard({
    title,
    value,
    subtitle,
    icon,
    color = "primary.main",
}: Props) {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                height: "100%",
                borderRadius: 3,
                bgcolor: "background.paper",
                border: 1,
                borderColor: "divider",
                transition: ".2s",

                "&:hover": {
                    transform: "translateY(-3px)",
                    borderColor: color,
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                }}
            >
                <Box>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >
                        {title}
                    </Typography>

                    <Typography
                        variant="h4"
                        sx={{
                            mt: 1,
                            fontWeight: 700,
                        }}
                    >
                        {value}
                    </Typography>

                    {subtitle && (

                        <Typography
                            variant="caption"
                            color="text.secondary"
                        >
                            {subtitle}
                        </Typography>

                    )}

                </Box>

                <Avatar
                    sx={{
                        bgcolor: color,
                        width: 52,
                        height: 52,
                    }}
                >
                    {icon}
                </Avatar>

            </Box>

        </Paper>
    );
}