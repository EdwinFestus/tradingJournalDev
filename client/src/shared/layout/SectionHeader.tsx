import {
    Stack,
    Typography,
} from "@mui/material";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
}

export default function SectionHeader({
    title,
    subtitle,
}: SectionHeaderProps) {
    return (
        <Stack
            spacing={0.5}
            sx={{ mb: 2 }}
        >
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
        </Stack>
    );
}