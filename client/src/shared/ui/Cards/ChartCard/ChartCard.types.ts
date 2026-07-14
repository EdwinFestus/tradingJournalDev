import type { ReactNode } from "react";
import type { AppCardProps } from "../AppCard/AppCard.types";

export interface ChartCardProps
  extends Omit<AppCardProps, "children"> {
  title: string;
  subtitle?: string;

  children: ReactNode;

  actions?: ReactNode;

  loading?: boolean;

  empty?: boolean;

  emptyTitle?: string;

  emptyDescription?: string;

  height?: number | string;
}