/**
 * =============================================================================
 * Formatters
 * =============================================================================
 *
 * Shared formatting utilities used throughout the application.
 *
 * These helpers ensure numbers, currencies and percentages are displayed
 * consistently across Dashboard, Trade Journal, Analytics and Reports.
 * =============================================================================
 */

/**
 * -----------------------------------------------------------------------------
 * Format a number with a fixed number of decimal places.
 * -----------------------------------------------------------------------------
 */
export const formatNumber = (
  value: number | null | undefined,
  decimals = 2
): string => {
  if (value == null || Number.isNaN(value)) {
    return "-";
  }

  return value.toFixed(decimals);
};

/**
 * -----------------------------------------------------------------------------
 * Format a monetary value.
 * -----------------------------------------------------------------------------
 */
export const formatCurrency = (
  value: number | null | undefined,
  currency = "USD"
): string => {
  if (value == null || Number.isNaN(value)) {
    return "-";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

/**
 * -----------------------------------------------------------------------------
 * Format percentage values.
 * -----------------------------------------------------------------------------
 */
export const formatPercentage = (
  value: number | null | undefined
): string => {
  if (value == null || Number.isNaN(value)) {
    return "-";
  }

  return `${value.toFixed(2)}%`;
};

/**
 * -----------------------------------------------------------------------------
 * Format Risk : Reward ratio.
 * -----------------------------------------------------------------------------
 */
export const formatRR = (
  value: number | null | undefined
): string => {
  if (value == null || Number.isNaN(value)) {
    return "-";
  }

  return value.toFixed(2);
};