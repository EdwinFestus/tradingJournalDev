import { Paper, Typography } from "@mui/material";
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
} from "recharts";

import type {
    PsychologyAnalytics,
} from "../../types/dashboard.types";

interface Props {
    data: PsychologyAnalytics[];
}

const COLORS = [
    "#22c55e",
    "#3b82f6",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
    "#06b6d4",
    "#14b8a6",
];

export default function PsychologyChart({
    data,
}: Props) {
    return (
        <Paper
            sx={{
                p: 3,
                borderRadius: 6,
                height: 420,
            }}
        >
            <Typography variant="h6" fontWeight={700}>
                Trading Psychology
            </Typography>

            <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 2 }}
            >
                Mood distribution
            </Typography>

            <ResponsiveContainer
                width="100%"
                height="85%"
            >
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="trades"
                        nameKey="mood"
                        outerRadius={110}
                        label
                    >
                        {data.map((_, index) => (
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