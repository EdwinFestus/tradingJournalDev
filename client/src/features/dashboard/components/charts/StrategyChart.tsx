import {
    Paper,
    Typography,
} from "@mui/material";

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
    data: Record<string, Omit<StrategyData, "strategy">>;
}

const COLORS = [
    "#14b8a6",
    "#3b82f6",
    "#8b5cf6",
    "#f59e0b",
    "#ef4444",
    "#22c55e",
];

export default function StrategyChart({
    data,
}: Props) {
    const chartData = Object.entries(data).map(
        ([strategy, value]) => ({
            strategy,
            ...value,
        })
    );

    return (
        <Paper
            sx={{
                p: 3,
                height: 420,
                borderRadius: 6,
            }}
        >
            <Typography
                variant="h6"
                fontWeight={700}
            >
                Strategy Distribution
            </Typography>

            <Typography
                variant="body2"
                color="text.secondary"
                mb={2}
            >
                Performance by strategy
            </Typography>

            <ResponsiveContainer
                width="100%"
                height="85%"
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
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>

                    <Tooltip />

                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </Paper>
    );
}