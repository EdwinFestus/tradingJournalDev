import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import {
  cancelButtonSx,
  formActionsSx,
  submitButtonSx,
} from "@/shared/ui/form/styles";

interface SubmitSectionProps {
  loading?: boolean;
  onCancel?: () => void;
}

export default function SubmitSection({
  loading = false,
  onCancel,
}: SubmitSectionProps) {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="flex-end"
      sx={formActionsSx}
    >
      {onCancel && (
        <Button
          variant="outlined"
          onClick={onCancel}
          sx={cancelButtonSx}
        >
          Cancel
        </Button>
      )}

      <Button
        type="submit"
        variant="contained"
        disabled={loading}
        sx={submitButtonSx}
        startIcon={
          loading ? (
            <CircularProgress
              size={18}
              color="inherit"
            />
          ) : undefined
        }
      >
        {loading ? "Saving..." : "Save Trade"}
      </Button>
    </Stack>
  );
}