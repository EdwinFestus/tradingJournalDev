import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// import { CssBaseline, ThemeProvider } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// import { theme } from "./theme";

import { theme } from "./app/theme/index";

import "./index.css";

import App from "./app/App";
import ScrollToTop from "./shared/ui/common/ScrollToTop";

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