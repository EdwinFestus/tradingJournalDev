import type { ReactNode } from "react";

import {
    Box,
    Chip,
    Stack,
    Typography,
} from "@mui/material";

import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

import BaseCard from "../../../../shared/cards/BaseCard";

export interface StatCardProps {
    title: string;
    value: string | number;

    subtitle?: string;

    icon?: ReactNode;

    trend?: number;

    color?:
        | "primary"
        | "success"
        | "warning"
        | "error";

    loading?: boolean;
}

export default function StatCard({
    title,
    value,
    subtitle,
    icon,
    trend,
    color = "primary",
}: StatCardProps) {

    const trendColor =
        trend === undefined
            ? "default"
            : trend > 0
            ? "success"
            : trend < 0
            ? "error"
            : "default";

    const TrendIcon =
        trend === undefined
            ? RemoveRoundedIcon
            : trend > 0
            ? TrendingUpRoundedIcon
            : trend < 0
            ? TrendingDownRoundedIcon
            : RemoveRoundedIcon;

    return (
        <BaseCard
            sx={{
                height: 170,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography
                    variant="body2"
                    color="text.secondary"
                    fontWeight={600}
                >
                    {title}
                </Typography>

                {icon && (
                    <Box
                        sx={{
                            width: 42,
                            height: 42,
                            borderRadius: 2,
                            bgcolor: `${color}.main`,
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {icon}
                    </Box>
                )}
            </Stack>

            <Typography
                variant="h4"
                fontWeight={700}
            >
                {value}
            </Typography>

            <Stack
                direction="row"
                spacing={1}
                alignItems="center"
            >
                {trend !== undefined && (
                    <Chip
                        icon={<TrendIcon />}
                        label={`${trend > 0 ? "+" : ""}${trend}%`}
                        color={trendColor}
                        size="small"
                    />
                )}

                {subtitle && (
                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >
                        {subtitle}
                    </Typography>
                )}
            </Stack>
        </BaseCard>
    );
}