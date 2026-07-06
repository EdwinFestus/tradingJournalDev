import {
    Paper,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from "@mui/material";

interface Props {
    data: Record<
        string,
        {
            trades: number;
            wins: number;
            losses: number;
            profit: number;
            winRate: number;
        }
    >;
}

export default function TopStrategyTable({
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
                mb={2}
            >
                Strategy Performance
            </Typography>

            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Strategy</TableCell>
                        <TableCell>Trades</TableCell>
                        <TableCell>Win Rate</TableCell>
                        <TableCell>Profit</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {Object.entries(data).map(
                        ([name, value]) => (
                            <TableRow key={name}>
                                <TableCell>{name}</TableCell>

                                <TableCell>
                                    {value.trades}
                                </TableCell>

                                <TableCell>
                                    {value.winRate.toFixed(0)}%
                                </TableCell>

                                <TableCell
                                    sx={{
                                        color:
                                            value.profit >= 0
                                                ? "success.main"
                                                : "error.main",
                                    }}
                                >
                                    ${value.profit.toFixed(2)}
                                </TableCell>
                            </TableRow>
                        )
                    )}
                </TableBody>
            </Table>
        </Paper>
    );
}