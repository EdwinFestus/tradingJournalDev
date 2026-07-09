import type { ReactNode } from "react";

import BaseCard from "./BaseCard";

interface ChartCardProps {
    children: ReactNode;
}

export default function ChartCard({
    children,
}: ChartCardProps) {
    return (
        <BaseCard
            sx={{
                height: 420,
            }}
        >
            {children}
        </BaseCard>
    );
}