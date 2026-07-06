import {

    Grid,

} from "@mui/material";

import EquityChart from "../charts/EquityChart";

import MonthlyPnLChart from "../charts/MonthlyPnLChart";

import type {

    DashboardCharts as Charts,

} from "../../types/dashboard.types";

interface Props {

    charts: Charts;

}

export default function DashboardCharts({

    charts,

}: Props) {

    return (

       <Grid
            container
            spacing={3}
            sx={{
                mb: 4,
            }}
        >

           <Grid
                size={{
                    xs:12,
                    lg:8,
                }}
            >

                <EquityChart
                    data={charts.equityCurve}
                />

            </Grid>

            <Grid
                size={{
                    xs:12,
                    lg:4,
                }}
            >

                <MonthlyPnLChart
                    data={charts.monthlyPnL}
                />

            </Grid>

        </Grid>

    );

}