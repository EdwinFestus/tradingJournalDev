import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

import type { ReactNode } from "react";

import AppCard from "../AppCard";

interface MetricCardProps {
    title: string;
    value: string | number;

    subtitle?: string;

    icon?: ReactNode;

    color?: string;

    trend?: string;

    trendColor?: "success.main" | "error.main" | "warning.main" | "info.main";
}

export default function MetricCard({
    title,
    value,
    subtitle,
    icon,
    color = "primary.main",
    trend,
    trendColor = "success.main",
}: MetricCardProps) {
    return (
        <AppCard hover fullHeight>
            <Stack spacing={2}>

                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box
                        sx={{
                            width: 48,
                            height: 48,
                            borderRadius: 2,
                            bgcolor: `${color}15`,
                            color,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {icon}
                    </Box>

                    {trend && (
                        <Chip
                            label={trend}
                            size="small"
                            sx={{
                                bgcolor: `${trendColor}15`,
                                color: trendColor,
                                fontWeight: 700,
                            }}
                        />
                    )}
                </Stack>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    fontWeight={600}
                >
                    {title}
                </Typography>

                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        letterSpacing: -0.5,
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

            </Stack>
        </AppCard>
    );
}