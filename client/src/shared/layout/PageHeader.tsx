import {
    Box,
    Typography,
} from "@mui/material";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
}

export default function PageHeader({
    title,
    subtitle,
}: PageHeaderProps) {
    return (
        <Box sx={{ mb: 5 }}>
            <Typography
                variant="h4"
                fontWeight={700}
            >
                {title}
            </Typography>

            {subtitle && (
                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                >
                    {subtitle}
                </Typography>
            )}
        </Box>
    );
}