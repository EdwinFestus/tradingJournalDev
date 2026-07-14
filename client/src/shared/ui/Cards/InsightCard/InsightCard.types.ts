import type { ReactNode } from "react";
import type { AppCardProps } from "../AppCard/AppCard.types";

export type InsightSeverity =
  | "info"
  | "success"
  | "warning"
  | "error";

export interface InsightCardProps
  extends Omit<AppCardProps, "children"> {

  title: string;

  message: string;

  severity?: InsightSeverity;

  icon?: ReactNode;

  recommendation?: string;

  footer?: ReactNode;

  loading?: boolean;

  onAction?: () => void;

  actionLabel?: string;
}