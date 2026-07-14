import type { ReactNode } from "react";
import type { PaperProps } from "@mui/material/Paper";

export type AppCardVariant =
    | "default"
    | "interactive"
    | "gradient"
    | "glass"
    | "success"
    | "warning"
    | "danger";

export interface AppCardProps
    extends Omit<
        PaperProps,
        "variant" | "children"
    > {

    children: ReactNode;

    // title?: ReactNode;

    subtitle?: ReactNode;

    header?: ReactNode;

    footer?: ReactNode;

    action?: ReactNode;

    loading?: boolean;

    hover?: boolean;

    fullHeight?: boolean;

    divider?: boolean;

    cardVariant?: AppCardVariant;
}