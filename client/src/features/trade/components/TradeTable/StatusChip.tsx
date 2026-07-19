import Chip from "@mui/material/Chip";

import type { Trade } from "../../types/trade";

interface Props {
  status?: Trade["outcome"] | null;
}

const statusStyles = {
  WIN: {
    background: "#ecfdf5",
    color: "#047857",
    label: "Win",
  },

  LOSS: {
    background: "#fff1f2",
    color: "#be123c",
    label: "Loss",
  },

  BE: {
    background: "#fffbeb",
    color: "#b45309",
    label: "Break even",
  },

  OPEN: {
    background: "#eff6ff",
    color: "#1d4ed8",
    label: "Open",
  },

  MANUAL_CLOSE: {
    background: "#f1f5f9",
    color: "#475569",
    label: "Manual close",
  },
} as const;

const DEFAULT_STATUS = {
  background: "#f8fafc",
  color: "#64748b",
  label: "Unknown",
};

export default function StatusChip({ status }: Props) {
  const style =
    status && status in statusStyles
      ? statusStyles[status]
      : DEFAULT_STATUS;

  return (
    <Chip
      label={style.label}
      size="small"
      sx={{
        minWidth: 88,
        borderRadius: 1,
        fontSize: 12,
        fontWeight: 700,
        backgroundColor: style.background,
        color: style.color,
      }}
    />
  );
}