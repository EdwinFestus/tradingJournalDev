import type { Components, Theme } from "@mui/material/styles";

import { radius } from "./tokens/radius";

const components: Components<Theme> = {
    MuiCssBaseline: {
        styleOverrides: {
            body: {
                backgroundColor: "#F8FAFC",
                color: "#0F172A",
                fontFeatureSettings: '"cv11", "ss01"',
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
            },

            "*": {
                boxSizing: "border-box",
            },

            "::-webkit-scrollbar": {
                width: 8,
                height: 8,
            },

            "::-webkit-scrollbar-thumb": {
                backgroundColor: "#CBD5E1",
                borderRadius: 999,
            },

            "::-webkit-scrollbar-track": {
                backgroundColor: "#F8FAFC",
            },
        },
    },

    MuiPaper: {
        styleOverrides: {
            root: {
                borderRadius: radius.lg,
                border: "1px solid #E2E8F0",
                boxShadow: "0 10px 35px rgba(15,23,42,.06)",
                backgroundImage: "none",
            },
        },
    },

    MuiCard: {
        styleOverrides: {
            root: {
                borderRadius: radius.lg,
                border: "1px solid #E2E8F0",
                boxShadow: "0 10px 35px rgba(15,23,42,.06)",
                backgroundImage: "none",
                overflow: "hidden",
            },
        },
    },

    MuiButton: {
        defaultProps: {
            disableElevation: true,
        },

        styleOverrides: {
            root: {
                borderRadius: radius.sm,
                textTransform: "none",
                fontWeight: 600,
                padding: "10px 20px",
                transition: "all .25s ease",

                "&:hover": {
                    transform: "translateY(-2px)",
                },
            },
        },
    },

    MuiTextField: {
        defaultProps: {
            variant: "outlined",
            fullWidth: true,
        },
    },

    MuiOutlinedInput: {
        styleOverrides: {
            root: {
                borderRadius: radius.sm,

                "& fieldset": {
                    borderColor: "#CBD5E1",
                },

                "&:hover fieldset": {
                    borderColor: "#14B8A6",
                },

                "&.Mui-focused fieldset": {
                    borderWidth: 2,
                    borderColor: "#14B8A6",
                },
            },
        },
    },

    MuiChip: {
        styleOverrides: {
            root: {
                borderRadius: radius.full,
                fontWeight: 600,
            },
        },
    },

    MuiTableContainer: {
        styleOverrides: {
            root: {
                borderRadius: radius.lg,
            },
        },
    },

    MuiTableHead: {
        styleOverrides: {
            root: ({ theme }) => ({
                backgroundColor: theme.palette.grey[100],
            }),
        },
    },

    MuiTableCell: {
        styleOverrides: {
            head: {
                fontWeight: 700,
                fontSize: 13,
                color: "#64748B",
            },

            body: {
                fontSize: 14,
            },
        },
    },

    MuiTooltip: {
        styleOverrides: {
            tooltip: {
                borderRadius: radius.sm,
                fontSize: 12,
                padding: "8px 12px",
            },
        },
    },

    MuiDivider: {
        styleOverrides: {
            root: {
                borderColor: "#E2E8F0",
            },
        },
    },

    MuiAvatar: {
        styleOverrides: {
            root: {
                fontWeight: 600,
            },
        },
    },

    MuiIconButton: {
        styleOverrides: {
            root: {
                borderRadius: radius.sm,

                "&:hover": {
                    backgroundColor: "#F1F5F9",
                },
            },
        },
    },
};

export default components;