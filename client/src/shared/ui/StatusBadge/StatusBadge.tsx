import Chip from "@mui/material/Chip";

interface StatusBadgeProps {
    status:
        | "OPEN"
        | "WIN"
        | "LOSS"
        | "BREAK_EVEN"
        | "PARTIAL";
}

const colors = {
    OPEN: "info",
    WIN: "success",
    LOSS: "error",
    BREAK_EVEN: "default",
    PARTIAL: "warning",
} as const;

export default function StatusBadge({
    status,
}: StatusBadgeProps) {
    return (
        <Chip
            label={status.replace("_", " ")}
            color={colors[status]}
            size="small"
        />
    );
}