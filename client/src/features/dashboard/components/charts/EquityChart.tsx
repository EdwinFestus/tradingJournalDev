import {

    Area,

    AreaChart,

    CartesianGrid,

    ResponsiveContainer,

    Tooltip,

    XAxis,

    YAxis,

} from "recharts";

import DashboardCard from "../cards/DashboardCard";

import type {

    EquityPoint,

} from "../../types/dashboard.types";

interface Props {

    data: EquityPoint[];

}

export default function EquityChart({

    data,

}: Props) {

    return (

        <DashboardCard

            title="Equity Curve"

            subtitle="Portfolio growth over time"

        >

            <ResponsiveContainer
                width="100%"
                height="100%"
            >

                <AreaChart data={data}>

                    <defs>

                        <linearGradient
                            id="equity"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >

                            <stop
                                offset="5%"
                                stopColor="#3B82F6"
                                stopOpacity={0.35}
                            />

                            <stop
                                offset="95%"
                                stopColor="#3B82F6"
                                stopOpacity={0}
                            />

                        </linearGradient>

                    </defs>

                    <CartesianGrid
                        stroke="#1F2937"
                    />

                    <XAxis
                        dataKey="date"
                    />

                    <YAxis />

                    <Tooltip />

                    <Area

                        type="monotone"

                        dataKey="equity"

                        stroke="#3B82F6"

                        fill="url(#equity)"

                        strokeWidth={3}

                    />

                </AreaChart>

            </ResponsiveContainer>

        </DashboardCard>

    );

}