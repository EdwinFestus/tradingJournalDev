import {
    Grid,
    Paper,
    Typography,
    Stack,
    Chip,
} from "@mui/material";

import {
    Lightbulb,
    LocalFireDepartment,
    EmojiEvents,
} from "@mui/icons-material";

import type {
    Insight,
    Streak,
} from "../../types/dashboard.types";

interface DashboardBottomProps {
    insights: Insight[];
    streak: Streak;
}

export default function DashboardBottom({
    insights,
    streak,
}: DashboardBottomProps) {
    return (
        <Grid
            container
            spacing={3}
            sx={{ mb: 4 }}
        >
            <Grid size={{ xs: 12, lg: 8 }}>
                <Paper
                    sx={{
                        p: 4,
                        borderRadius: 6,
                        backgroundColor: "background.paper",
                    }}
                >
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        mb={3}
                    >
                        <Lightbulb color="warning" />
                        <Typography variant="h6">
                            AI Insights
                        </Typography>
                    </Stack>

                    <Stack spacing={2}>
                        {insights.map((item, index) => (
                            <Paper
                                key={index}
                                variant="outlined"
                                sx={{
                                    p: 2,
                                    borderRadius: 3,
                                }}
                            >
                                <Typography
                                    fontWeight={700}
                                >
                                    {item.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {item.description}
                                </Typography>
                            </Paper>
                        ))}
                    </Stack>
                </Paper>
            </Grid>

            <Grid size={{ xs: 12, lg: 4 }}>
                <Paper
                    sx={{
                        p: 4,
                        borderRadius: 6,
                        backgroundColor: "background.paper",
                        height: "100%",
                    }}
                >
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        mb={3}
                    >
                        <LocalFireDepartment color="error" />

                        <Typography variant="h6">
                            Trading Streak
                        </Typography>
                    </Stack>

                    <Stack spacing={4}>
                        <Paper
                            variant="outlined"
                            sx={{
                                p: 3,
                                borderRadius: 3,
                            }}
                        >
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                            >
                                <Typography>
                                    Current
                                </Typography>

                                <Chip
                                    color="warning"
                                    label={`${streak.current} Trades`}
                                />
                            </Stack>
                        </Paper>

                        <Paper
                            variant="outlined"
                            sx={{
                                p: 3,
                                borderRadius: 3,
                            }}
                        >
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                            >
                                <Typography>
                                    Best
                                </Typography>

                                <Chip
                                    icon={<EmojiEvents />}
                                    color="success"
                                    label={`${streak.best} Trades`}
                                />
                            </Stack>
                        </Paper>
                    </Stack>
                </Paper>
            </Grid>
        </Grid>
    );
}