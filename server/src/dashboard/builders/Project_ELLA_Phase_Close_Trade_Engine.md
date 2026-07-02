# Project ELLA -- Phase: Close Trade Engine (Implementation Specification)

## Objective

Complete the backend trade lifecycle so every trade transitions from
**OPEN** to **WIN / LOSS / BE**, automatically rebuilding the dashboard
snapshot.

## Architecture

``` text
Route
  ↓
Controller
  ↓
Trade Service
  ↓
Trade Repository
  ↓
MongoDB

           ↓

Dashboard Builder
      ↓
Analytics Engine
      ↓
Dashboard Snapshot
```

## Repository

Implement: - findById - findByUser - createTrade - updateTrade -
closeTrade - saveTrade

## Trade Service

Implement `closeTrade(id, exitPrice, userId)`.

Validation: - Trade exists - User owns trade - Trade is OPEN - exitPrice
\> 0

Calculations: - Profit/Loss - Outcome - Holding Time - closedAt

Persist: - status - exitPrice - profitLoss - outcome - holdingTime -
closedAt

Return:

``` json
{
  "success": true,
  "trade": {},
  "dashboard": {}
}
```

## Utility Functions

Create: - calculateProfitLoss - calculateRR - calculateHoldingTime -
determineOutcome - calculateExpectancy - calculateProfitFactor -
calculateDrawdown

## Dashboard Builder

Always return: - portfolio - analytics - charts - streak - insights -
recentTrades

## Close Trade Flow

``` text
OPEN
 ↓
Validate
 ↓
Calculate P/L
 ↓
Determine Outcome
 ↓
Persist
 ↓
Build Dashboard
 ↓
Return Snapshot
```

## Acceptance Criteria

-   Close Trade works
-   Duplicate close prevented
-   Analytics refresh
-   Dashboard snapshot returned
-   Charts update
-   Single source of truth maintained
