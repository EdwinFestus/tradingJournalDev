import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Chip,
    Box,
} from "@mui/material";

import type { SessionAnalytics } from "../../types/dashboard.types";

interface SessionTableProps {
    data: SessionAnalytics[];
}

export default function SessionTable({
    data,
}: SessionTableProps) {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                borderRadius: 3,
                border: 1,
                borderColor: "divider",
                height: "100%",
            }}
        >
            <Typography
                variant="h6"
                fontWeight={700}
                gutterBottom
            >
                Session Statistics
            </Typography>

            <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 3 }}
            >
                Performance breakdown by trading session
            </Typography>

            <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <strong>Session</strong>
                            </TableCell>

                            <TableCell align="center">
                                <strong>Trades</strong>
                            </TableCell>

                            <TableCell align="center">
                                <strong>Win %</strong>
                            </TableCell>

                            <TableCell align="right">
                                <strong>P&amp;L</strong>
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {data.length === 0 ? (
                            <TableRow>
                                <TableCell
                                    colSpan={4}
                                    align="center"
                                >
                                    <Typography
                                        color="text.secondary"
                                    >
                                        No session data available
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ) : (
                            data.map((session) => (
                                <TableRow
                                    key={session.session}
                                    hover
                                >
                                    <TableCell>
                                        <Chip
                                            label={session.session}
                                            color="primary"
                                            size="small"
                                            variant="outlined"
                                        />
                                    </TableCell>

                                    <TableCell align="center">
                                        {session.trades}
                                    </TableCell>

                                    <TableCell align="center">
                                        {session.winRate.toFixed(0)}%
                                    </TableCell>

                                    <TableCell align="right">
                                        <Box
                                            component="span"
                                            sx={{
                                                color:
                                                    session.pnl >= 0
                                                        ? "success.main"
                                                        : "error.main",
                                                fontWeight: 700,
                                            }}
                                        >
                                            ${session.pnl.toFixed(2)}
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}