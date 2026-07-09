import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import type { ReactNode } from "react";

interface AppCardProps {
    children: ReactNode;
    title?: ReactNode;
    actions?: ReactNode;
    padding?: number;
}

export default function AppCard({
    children,
    title,
    actions,
    padding = 3,
}: AppCardProps) {
    return (
        <Card
            elevation={0}
            sx={{
                height: "100%",
                borderRadius: 4,
                transition: "all .25s ease",
                "&:hover": {
                    transform: "translateY(-2px)",
                },
            }}
        >
            {(title || actions) && (
                <CardContent
                    sx={{
                        pb: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <div>{title}</div>

                    <div>{actions}</div>
                </CardContent>
            )}

            <CardContent
                sx={{
                    p: padding,
                }}
            >
                {children}
            </CardContent>
        </Card>
    );
}