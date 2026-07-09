import type { ReactNode } from "react";

import BaseCard from "./BaseCard";

interface TableCardProps {
    children: ReactNode;
}

export default function TableCard({
    children,
}: TableCardProps) {
    return (
        <BaseCard
            sx={{
                overflow: "hidden",
            }}
        >
            {children}
        </BaseCard>
    );
}