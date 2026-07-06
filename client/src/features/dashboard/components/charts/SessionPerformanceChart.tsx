import { Paper, Typography } from "@mui/material";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

interface SessionAnalytics {
    session: string;
    trades: number;
    wins: number;
    losses: number;
    breakEvens: number;
    pnl: number;
    winRate: number;
}

interface Props {
    data: SessionAnalytics[];
}

export default function SessionPerformanceChart({
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
                Session Performance
            </Typography>

            <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 2 }}
            >
                Performance by trading session
            </Typography>

            <ResponsiveContainer width="100%" height="85%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="session" />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey="winRate"
                        fill="#14b8a6"
                        radius={[6, 6, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </Paper>
    );
}