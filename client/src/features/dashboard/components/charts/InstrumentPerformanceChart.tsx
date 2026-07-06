import { Paper, Typography } from "@mui/material";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

import type { PairAnalytics } from "../../types/dashboard.types";

interface Props {
    data: PairAnalytics[];
}

export default function InstrumentPerformanceChart({
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
                Instrument Performance
            </Typography>

            <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 2 }}
            >
                Profit by trading instrument
            </Typography>

            <ResponsiveContainer width="100%" height="85%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="pair" />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey="pnl"
                        fill="#14b8a6"
                        radius={[8, 8, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </Paper>
    );
}