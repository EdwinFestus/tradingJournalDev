import type { GridColDef } from "@mui/x-data-grid";

import TradeActions from "../TradeActions";
import StatusChip from "./StatusChip";

import {
  formatCurrency,
  formatRR,
} from "@/shared/utils/formatters";

/**
 * =============================================================================
 * Trade Journal Columns
 * =============================================================================
 *
 * Central definition for every column rendered by the Trade Journal table.
 *
 * Responsibilities:
 * - Configure column layout
 * - Delegate formatting to shared utilities
 * - Render custom components where required
 * =============================================================================
 */

export const tradeColumns: GridColDef[] = [
  /**
   * ---------------------------------------------------------------------------
   * Instrument
   * ---------------------------------------------------------------------------
   */
  {
    field: "pair",
    headerName: "Pair",
    flex: 1,
    minWidth: 180,
  },

  /**
   * ---------------------------------------------------------------------------
   * Trade Direction
   * ---------------------------------------------------------------------------
   */
  {
    field: "orderType",
    headerName: "Direction",
    width: 120,
  },

  /**
   * ---------------------------------------------------------------------------
   * Trading Strategy
   * ---------------------------------------------------------------------------
   */
  {
    field: "strategy",
    headerName: "Strategy",
    flex: 1,
    minWidth: 170,
  },

  /**
   * ---------------------------------------------------------------------------
   * Risk : Reward
   * ---------------------------------------------------------------------------
   */
  {
    field: "rrRatio",
    headerName: "R:R",
    width: 100,

    valueFormatter: (value) =>
      formatRR(Number(value)),
  },

  /**
   * ---------------------------------------------------------------------------
   * Expected Reward
   * ---------------------------------------------------------------------------
   */
  {
    field: "rewardAmount",
    headerName: "Reward",
    width: 130,

    valueFormatter: (value) =>
      formatCurrency(Number(value)),
  },

  /**
   * ---------------------------------------------------------------------------
   * Trade Result
   * ---------------------------------------------------------------------------
   */
  {
    field: "outcome",
    headerName: "Status",

    width: 140,

    align: "center",

    headerAlign: "center",

    renderCell: (params) => (
      <StatusChip
        status={params.row.outcome}
      />
    ),
  },

  /**
   * ---------------------------------------------------------------------------
   * Row Actions
   * ---------------------------------------------------------------------------
   */
  {
    field: "actions",

    headerName: "Actions",

    width: 140,

    sortable: false,

    filterable: false,

    renderCell: (params) => (
      <TradeActions trade={params.row} />
    ),
  },
];