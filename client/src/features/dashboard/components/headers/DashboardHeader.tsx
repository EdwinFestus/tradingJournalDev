import RefreshIcon from "@mui/icons-material/Refresh";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import {
    Avatar,
    Box,
    Button,
    Divider,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

import type { PortfolioSummary } from "../../types/dashboard.types";

interface Props {
    portfolio: PortfolioSummary;
    onRefresh?: () => void;
}

export default function DashboardHeader({
    portfolio,
    onRefresh,
}: Props) {
    const hour = new Date().getHours();

    const greeting =
        hour < 12
            ? "Good Morning"
            : hour < 18
            ? "Good Afternoon"
            : "Good Evening";

    const today = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(new Date());

    return (
        <Paper
            elevation={0}
            sx={{
                p: 4,
                mb: 4,
                borderRadius: 5,
                bgcolor: "#111827",
                border: "1px solid #1F2937",
            }}
        >
            <Stack
                direction={{
                    xs: "column",
                    lg: "row",
                }}
                justifyContent="space-between"
                spacing={4}
            >
                <Stack spacing={1}>
                    <Typography
                        color="grey.500"
                        fontWeight={600}
                    >
                        {greeting}
                    </Typography>

                    <Typography
                        variant="h4"
                        fontWeight={700}
                    >
                        ELLA Trading Dashboard
                    </Typography>

                    <Typography
                        color="grey.500"
                    >
                        {today}
                    </Typography>
                </Stack>

                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                >
                    <Button
                        variant="contained"
                        startIcon={<RefreshIcon />}
                        onClick={onRefresh}
                        sx={{
                            borderRadius: 3,
                            textTransform: "none",
                        }}
                    >
                        Refresh
                    </Button>

                    <Avatar
                        sx={{
                            bgcolor: "#1E293B",
                            cursor: "pointer",
                        }}
                    >
                        <NotificationsNoneIcon />
                    </Avatar>
                </Stack>
            </Stack>

            <Divider sx={{ my: 4 }} />

            <Stack
                direction={{
                    xs: "column",
                    md: "row",
                }}
                spacing={4}
            >
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                >
                    <Avatar
                        sx={{
                            bgcolor: "#2563EB20",
                            color: "#2563EB",
                        }}
                    >
                        <AccountBalanceWalletIcon />
                    </Avatar>

                    <Box>
                        <Typography
                            color="grey.500"
                            variant="body2"
                        >
                            Portfolio Balance
                        </Typography>

                        <Typography
                            fontWeight={700}
                            fontSize={24}
                        >
                            ${portfolio.balance.toFixed(2)}
                        </Typography>
                    </Box>
                </Stack>

                <Stack>
                    <Typography
                        color="grey.500"
                        variant="body2"
                    >
                        Equity
                    </Typography>

                    <Typography
                        fontWeight={700}
                        fontSize={24}
                    >
                        ${portfolio.equity.toFixed(2)}
                    </Typography>
                </Stack>

                <Stack>
                    <Typography
                        color="grey.500"
                        variant="body2"
                    >
                        Net Profit
                    </Typography>

                    <Typography
                        color={
                            portfolio.netProfit >= 0
                                ? "success.main"
                                : "error.main"
                        }
                        fontWeight={700}
                        fontSize={24}
                    >
                        ${portfolio.netProfit.toFixed(2)}
                    </Typography>
                </Stack>
            </Stack>
        </Paper>
    );
}