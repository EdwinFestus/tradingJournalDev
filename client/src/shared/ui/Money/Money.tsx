import Typography from "@mui/material/Typography";

interface MoneyProps {
    value: number;
}

export default function Money({ value }: MoneyProps) {
    return (
        <Typography
            variant="h5"
            sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
            }}
        >
            ${value.toFixed(2)}
        </Typography>
    );
}