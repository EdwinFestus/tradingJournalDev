import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper"


export const StyledCard = styled(Paper, {
    shouldForwardProp: (prop : PropertyKey) => 
        !["hover", "fullHeight", "cardVariant"].includes(prop as string ),
})<{
    hover?: boolean;
    fullHeight?: boolean;
}>(({ theme, hover, fullHeight}) => ({
    position: "relative",
    display: "flex", 
    flexDirection: "column",

    height: fullHeight ? "100%" : "auto",
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`,
    background: theme.palette.background.paper,
    transition:    "all .2s ease",

    ...(hover && {
        "&:hover": {
            transform: "translateY(-2px)",
            borderColor: theme.palette.primary.main,
            boxShadow: theme.shadows[8],
        },
    }),
}));