import { useState } from "react";
import { Stack } from "@mui/material";

import TradeStats from "../components/TradeStats";
import TradeToolbar from "../components/TradeToolbar";
import TradeTable from "../components/TradeTable";

export default function TradeJournalPage() {
  const [search, setSearch] = useState("");

  return (
    <Stack spacing={3}>
      <TradeStats />

      <TradeToolbar
        search={search}
        onSearchChange={setSearch}
      />

      <TradeTable search={search} />
    </Stack>
  );
}

