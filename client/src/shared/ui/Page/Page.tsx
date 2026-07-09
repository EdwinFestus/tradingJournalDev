import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import type { ReactNode } from "react";

interface PageProps {
    children: ReactNode;
}

export default function Page({
    children,
}: PageProps) {
    return (
        <Container
            maxWidth={false}
            sx={{
                maxWidth: 1600,
                py: 4,
            }}
        >
            <Box>{children}</Box>
        </Container>
    );
}