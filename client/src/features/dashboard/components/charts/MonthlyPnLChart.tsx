import {

    Bar,

    BarChart,

    CartesianGrid,

    ResponsiveContainer,

    Tooltip,

    XAxis,

    YAxis,

} from "recharts";

import ChartCard from "@/shared/ui/Cards/ChartCard";

import type {

    MonthlyPnLPoint,

} from "../../types/dashboard.types";

interface Props {

    data: MonthlyPnLPoint[];

}

export default function MonthlyPnLChart({

    data,

}: Props) {

    return (

        <ChartCard

            title="Monthly Profit"

            subtitle="Monthly performance"

        >

            <ResponsiveContainer
                width="100%"
                height="100%"
            >

                <BarChart data={data}>

                    <CartesianGrid
                        stroke="#1F2937"
                    />

                    <XAxis
                        dataKey="month"
                    />

                    <YAxis />

                    <Tooltip />

                    <Bar

                        dataKey="pnl"

                        radius={[8,8,0,0]}

                    />

                </BarChart>

            </ResponsiveContainer>

        </ChartCard>

    );

}