import {
  Search,
  NotificationsNone,
  DarkMode,
  AccountCircle,
} from "@mui/icons-material";

const Navbar = () => {
  return (
    <header className="flex h-16 items-center justify-between bg-white px-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        Dashboard
      </h2>

      <div className="flex items-center gap-5">
        <Search className="cursor-pointer" />

        <NotificationsNone className="cursor-pointer" />

        <DarkMode className="cursor-pointer" />

        <AccountCircle
          sx={{ fontSize: 36 }}
          className="cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Navbar;