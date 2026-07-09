import type { ReactNode } from "react";

import BaseCard from "./BaseCard";

interface AnalyticsCardProps {
    children: ReactNode;
}

export default function AnalyticsCard({
    children,
}: AnalyticsCardProps) {
    return (
        <BaseCard
            sx={{
                height: "100%",
            }}
        >
            {children}
        </BaseCard>
    );
}