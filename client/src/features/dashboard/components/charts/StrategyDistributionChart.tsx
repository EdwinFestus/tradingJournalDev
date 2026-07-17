import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
} from "recharts";

interface StrategyData {
    strategy: string;
    trades: number;
    wins: number;
    losses: number;
    profit: number;
    winRate: number;
}

interface Props {
    data: Record<
        string,
        Omit<StrategyData, "strategy">
    >;
}

const COLORS = [
    "#14b8a6",
    "#3b82f6",
    "#8b5cf6",
    "#f59e0b",
    "#ef4444",
    "#22c55e",
];

export default function StrategyDistributionChart({
    data,
}: Props) {

    const chartData = Object.entries(data).map(
        ([strategy, value]) => ({
            strategy,
            ...value,
        })
    );

    return (
        <ResponsiveContainer
            width="100%"
            height={350}
        >
            <PieChart>
                <Pie
                    data={chartData}
                    dataKey="trades"
                    nameKey="strategy"
                    outerRadius={110}
                    label
                >
                    {chartData.map((_, index) => (
                        <Cell
                            key={index}
                            fill={
                                COLORS[
                                    index % COLORS.length
                                ]
                            }
                        />
                    ))}
                </Pie>

                <Tooltip />

                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
}