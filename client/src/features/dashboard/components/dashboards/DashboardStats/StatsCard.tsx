import MetricCard from "../../../../../shared/ui/MetricCard";
import type { ReactNode } from "react";

interface StatsCardProps {
    title: string;
    value: string | number;
    subtitle: string;
    icon: ReactNode;
    color?: string;
}

export default function StatsCard({
    title,
    value,
    subtitle,
    icon,
    color,
}: StatsCardProps) {
    return (
        <MetricCard
            title={title}
            value={value}
            subtitle={subtitle}
            icon={icon}
            color={color}
        />
    );
}