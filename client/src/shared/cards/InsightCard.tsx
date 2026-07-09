import {
    Stack,
    Typography,
} from "@mui/material";

import BaseCard from "./BaseCard";

interface InsightCardProps {
    title: string;
    description: string;
}

export default function InsightCard({
    title,
    description,
}: InsightCardProps) {
    return (
        <BaseCard>
            <Stack spacing={1}>
                <Typography
                    variant="subtitle1"
                    fontWeight={700}
                >
                    {title}
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    {description}
                </Typography>
            </Stack>
        </BaseCard>
    );
}