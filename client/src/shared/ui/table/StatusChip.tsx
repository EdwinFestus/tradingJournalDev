import Chip from "@mui/material/Chip";

import type { Trade } from "../../types/trade";

interface Props {
  status: Trade["outcome"];
}

const statusStyles: Record<
  Trade["outcome"],
  {
    background: string;
    color: string;
    label: string;
  }
> = {
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
};

export default function StatusChip({ status }: Props) {
  const style = statusStyles[status];

  return (
    <Chip
      label={style.label}
      size="small"
      sx={{
        minWidth: 88,
        backgroundColor: style.background,
        borderRadius: 1,
        color: style.color,
        fontSize: 12,
        fontWeight: 700,
      }}
    />
  );
}
