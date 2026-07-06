import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";

import { theme } from "./app/theme/theme";

import "./index.css";

import App from "./app/App";
import ScrollToTop from "./shared/components/common/ScrollToTop";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <BrowserRouter>
                <ScrollToTop />
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>
);