import {
    DataGrid,
    type GridColDef,
} from "@mui/x-data-grid";

import DashboardCard from "../cards/DashboardCard";

import StatusChip from "../shared/StatusChip";

import OutcomeChip from "../shared/OutcomeChip";

import type {
    Trade,
} from "../../types/dashboard.types";

interface Props {

    trades: Trade[];

}

const columns: GridColDef[] = [

    {
        field: "pair",
        headerName: "Instrument",
        flex: 1.4,
    },

    {
        field: "orderType",
        headerName: "Type",
        flex: .8,
    },

    {
        field: "strategy",
        headerName: "Strategy",
        flex: 1.2,
    },

    {
        field: "timeframe",
        headerName: "TF",
        flex: .6,
    },

    {
        field: "rrRatio",
        headerName: "RR",
        flex: .7,
    },

    {
        field: "profitLoss",
        headerName: "PnL",
        flex: .9,

        renderCell: ({ value }) => (

            <span

                style={{

                    color:
                        value >= 0
                            ? "#22C55E"
                            : "#EF4444",

                    fontWeight: 600,

                }}

            >

                ${Number(value).toFixed(2)}

            </span>

        ),

    },

    {
        field: "status",

        headerName: "Status",

        flex: .8,

        renderCell: ({ value }) => (

            <StatusChip status={value} />

        ),

    },

    {
        field: "outcome",

        headerName: "Result",

        flex: .8,

        renderCell: ({ value }) => (

            <OutcomeChip outcome={value} />

        ),

    },

];

export default function RecentTradeTable({

    trades,

}: Props) {

    return (

        <DashboardCard

            title="Recent Trades"

            subtitle="Latest trading activity"

            height={520}

        >

            <DataGrid

                rows={trades}

                columns={columns}

                getRowId={(row) => row.id ?? row._id}

                disableRowSelectionOnClick

                hideFooter

                sx={{

                    border: 0,

                    "& .MuiDataGrid-columnHeaders": {

                        bgcolor: "background.default",

                    },

                    "& .MuiDataGrid-cell": {

                        borderColor: "divider",

                    },

                }}

            />

        </DashboardCard>

    );

}