import type { ReactNode } from "react";
import type { AppCardProps } from "../AppCard/AppCard.types";

export interface TableCardProps
  extends Omit<AppCardProps, "children"> {

  title: string;

  subtitle?: string;

  actions?: ReactNode;

  toolbar?: ReactNode;

  search?: ReactNode;

  filters?: ReactNode;

  loading?: boolean;

  empty?: boolean;

  emptyTitle?: string;

  emptyDescription?: string;

  children: ReactNode;
}