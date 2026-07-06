import Chip from "@mui/material/Chip";

interface Props {
    status: string;
}

const statusColor = {
    OPEN: "warning",
    CLOSED: "success",
    PARTIAL: "info",
    CANCELLED: "default",
} as const;

export default function StatusChip({ status }: Props) {
    return (
        <Chip
            label={status}
            color={statusColor[status as keyof typeof statusColor] ?? "default"}
            size="small"
            variant="filled"
            sx={{
                fontWeight: 600,
                minWidth: 80,
            }}
        />
    );
}