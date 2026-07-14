import type { ReactNode } from "react";
import type { PaperProps } from "@mui/material";

export type TrendDirection = "up" | "down" | "neutral";

export interface StatCardProps extends Omit<PaperProps, "title"> {
  title: string;
  value: string | number;

  subtitle?: string;

  icon?: ReactNode;

  trend?: TrendDirection;

  trendValue?: string;

  color?: "primary" | "success" | "warning" | "error";

  loading?: boolean;

  footer?: ReactNode;

  onClick?: () => void;
}