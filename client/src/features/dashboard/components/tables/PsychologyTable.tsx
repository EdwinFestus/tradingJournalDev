import {
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography,
    Chip,
} from "@mui/material";

import type {
    PsychologyAnalytics,
} from "../../types/dashboard.types";

interface Props {
    data: PsychologyAnalytics[];
}

export default function PsychologyTable({
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
                Psychology Statistics
            </Typography>

            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Mood</TableCell>
                        <TableCell>Trades</TableCell>
                        <TableCell>Win Rate</TableCell>
                        <TableCell>P&amp;L</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.mood}>
                            <TableCell>
                                <Chip
                                    label={item.mood}
                                    color="primary"
                                    size="small"
                                />
                            </TableCell>

                            <TableCell>
                                {item.trades}
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