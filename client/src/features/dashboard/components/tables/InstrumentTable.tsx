import {
    Paper,
    Typography,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from "@mui/material";

import type { PairAnalytics } from "../../types/dashboard.types";

interface Props {
    data: PairAnalytics[];
}

export default function InstrumentTable({
    data,
}: Props) {
    return (
        <Paper
            sx={{
                p: 3,
                borderRadius: 6,
            }}
        >
            <Typography
                variant="h6"
                sx={{ mb: 2 }}
            >
                Instrument Statistics
            </Typography>

            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Instrument</TableCell>
                        <TableCell>Trades</TableCell>
                        <TableCell>Win Rate</TableCell>
                        <TableCell>P&amp;L</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.pair}>
                            <TableCell>{item.pair}</TableCell>

                            <TableCell>
                                {item.closedTrades}
                            </TableCell>

                            <TableCell>
                                {item.winRate.toFixed(0)}%
                            </TableCell>

                            <TableCell
                                sx={{
                                    color:
                                        item.pnl >= 0
                                            ? "success.main"
                                            : "error.main",
                                    fontWeight: 700,
                                }}
                            >
                                ${item.pnl.toFixed(2)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}