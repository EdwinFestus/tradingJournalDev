import { createTheme } from "@mui/material/styles";

export const theme = createTheme({

    palette: {

        mode: "dark",

        primary: {
            main: "#14B8A6",
        },

        secondary: {
            main: "#3B82F6",
        },

        success: {
            main: "#22C55E",
        },

        warning: {
            main: "#F59E0B",
        },

        error: {
            main: "#EF4444",
        },

        background: {

            default: "#0F172A",

            paper: "#111827",

        },

        text: {

            primary: "#F8FAFC",

            secondary: "#94A3B8",

        },

        divider: "#1E293B",

    },

    shape: {

        borderRadius: 20,

    },

    typography: {

        fontFamily: '"Plus Jakarta Sans", sans-serif',

        h4: {

            fontWeight: 700,

        },

        h5: {

            fontWeight: 700,

        },

        h6: {

            fontWeight: 700,

        },

        button: {

            textTransform: "none",

            fontWeight: 600,

        },

    },

    components: {

        MuiPaper: {

            styleOverrides: {

                root: {

                    border: "1px solid #1E293B",

                    backgroundImage: "none",

                },

            },

        },

        MuiCard: {

            styleOverrides: {

                root: {

                    borderRadius: 20,

                },

            },

        },

        MuiButton: {

            defaultProps: {

                disableElevation: true,

            },

            styleOverrides: {

                root: {

                    borderRadius: 12,

                },

            },

        },

    },

});