import Chip from "@mui/material/Chip";

interface Props {
  status: "Win" | "Loss" | "Breakeven";
}

export default function StatusChip({ status }: Props) {
  const color =
    status === "Win"
      ? "success"
      : status === "Loss"
      ? "error"
      : "warning";

  return (
    <Chip
      label={status}
      color={color}
      size="small"
      variant="filled"
    />
  );
}