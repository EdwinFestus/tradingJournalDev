import type { PaletteOptions } from "@mui/material/styles";
import { colors } from "./tokens/colors";

const palette: PaletteOptions = {
    mode: "light",

    primary: {
        main: colors.primary,
    },

    success: {
        main: colors.success,
    },

    warning: {
        main: colors.warning,
    },

    error: {
        main: colors.danger,
    },

    info: {
        main: colors.info,
    },

    background: {
        default: colors.background,
        paper: colors.surface,
    },

    text: {
        primary: colors.text,
        secondary: colors.textSecondary,
    },

    divider: colors.divider,
};

export default palette;