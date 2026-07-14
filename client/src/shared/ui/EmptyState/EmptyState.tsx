import InboxRoundedIcon from "@mui/icons-material/InboxRounded";
import {
  Box,
  Stack,
  Typography,
} from "@mui/material";

import type { EmptyStateProps } from "./EmptyState.types";

export default function EmptyState({
  title,
  description,
  icon,
  action,
}: EmptyStateProps) {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        minHeight: 280,
        width: "100%",
        textAlign: "center",
        p: 4,
      }}
    >
      <Box
        sx={(theme) => ({
          width: 72,
          height: 72,
          borderRadius: "50%",
          bgcolor: theme.palette.action.hover,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: theme.palette.text.secondary,
        })}
      >
        {icon ?? <InboxRoundedIcon fontSize="large" />}
      </Box>

      <Typography variant="h6">
        {title}
      </Typography>

      {description && (
        <Typography
          variant="body2"
          color="text.secondary"
          maxWidth={320}
        >
          {description}
        </Typography>
      )}

      {action}
    </Stack>
  );
}