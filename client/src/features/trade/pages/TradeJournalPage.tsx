import { useState } from "react";

import { Stack } from "@mui/material";

import type { Trade } from "../types/trade";

import TradeStats from "../components/TradeStats";
import CreateTradeDialog from "../components/TradeDialogs/CreateTradeDialogs";
import TradeTable from "../components/TradeTable";
import TradeToolbar from "../components/TradeToolbar";

export default function TradeJournalPage() {
  const [search, setSearch] = useState("");

  const [createOpen, setCreateOpen] = useState(false);

  const handleView = (trade: Trade) => {
    console.log("View", trade);
  };

  const handleEdit = (trade: Trade) => {
    console.log("Edit", trade);
  };

  const handleDelete = (trade: Trade) => {
    console.log("Delete", trade);
  };

  return (
    <>
      <Stack spacing={3}>
        <TradeStats />

        <TradeToolbar
          search={search}
          onSearchChange={setSearch}
          onCreateTrade={() => setCreateOpen(true)}
        />

        <TradeTable
          search={search}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Stack>

      <CreateTradeDialog
        open={createOpen}
        onClose={() => setCreateOpen(false)}
      />
    </>
  );
}