import { Bell, Search } from "lucide-react";

const Navbar = () => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
      <div className="flex items-center gap-2">
        <Search size={18} />
        <input
          placeholder="Search..."
          className="outline-none"
        />
      </div>

      <div className="flex items-center gap-4">
        <Bell size={18} />

        <div className="w-9 h-9 rounded-full bg-[#5BC0BE] flex items-center justify-center text-white font-bold">
          F
        </div>
      </div>
    </header>
  );
};

export default Navbar;