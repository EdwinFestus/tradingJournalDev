import {
  Add,
  Download,
  FilterList,
  Refresh,
  Search,
} from "@mui/icons-material";

import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";

interface TradeToolbarProps {
  search?: string;
  onSearchChange?: (value: string) => void;
  onRefresh?: () => void;
  onFilter?: () => void;
  onExport?: () => void;
  onCreateTrade?: () => void;
}

export default function TradeToolbar({
  search = "",
  onSearchChange,
  onRefresh,
  onFilter,
  onExport,
  onCreateTrade,
}: TradeToolbarProps) {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={2}
      justifyContent="space-between"
      alignItems={{ xs: "stretch", md: "center" }}
    >
      <TextField
        fullWidth
        placeholder="Search trades..."
        value={search}
        onChange={(e) => onSearchChange?.(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />

      <Box
        display="flex"
        gap={1}
        justifyContent="flex-end"
        flexWrap="wrap"
      >
        <Tooltip title="Refresh">
          <IconButton onClick={onRefresh}>
            <Refresh />
          </IconButton>
        </Tooltip>

        <Tooltip title="Filters">
          <IconButton onClick={onFilter}>
            <FilterList />
          </IconButton>
        </Tooltip>

        <Button
          variant="outlined"
          startIcon={<Download />}
          onClick={onExport}
        >
          Export
        </Button>

        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={onCreateTrade}
        >
          New Trade
        </Button>
      </Box>
    </Stack>
  );
}