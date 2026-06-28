import {
  Search,
  NotificationsNone,
  AccountCircle,
  KeyboardCommandKey,
} from "@mui/icons-material";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200/80 bg-white/80 px-8 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        <span className="text-sm font-semibold text-slate-700">
          Live workspace
        </span>
      </div>

      <div className="flex items-center gap-3">
        <button className="hidden h-9 min-w-72 items-center justify-between rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-500 shadow-sm transition hover:border-slate-300 lg:flex">
          <span className="flex items-center gap-2">
            <Search sx={{ fontSize: 18 }} />
            Search trades, reports, setups
          </span>

          <span className="flex items-center gap-1 rounded-md border border-slate-200 px-1.5 py-0.5 text-xs text-slate-400">
            <KeyboardCommandKey sx={{ fontSize: 13 }} /> K
          </span>
        </button>

        <button className="icon-button" aria-label="Notifications">
          <NotificationsNone sx={{ fontSize: 20 }} />
        </button>

        <button className="icon-button" aria-label="Account">
          <AccountCircle sx={{ fontSize: 22 }} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
