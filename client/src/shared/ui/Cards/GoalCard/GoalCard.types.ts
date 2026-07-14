import type { ReactNode } from "react";
import type { AppCardProps } from "../AppCard/AppCard.types";

export interface GoalCardProps
    extends Omit<AppCardProps, "children"> {

    title: string;

    current: number;

    target: number;

    unit?: string;

    description?: string;

    icon?: ReactNode;

    color?:
        | "primary"
        | "success"
        | "warning"
        | "error";

    footer?: ReactNode;

    loading?: boolean;
}