import {
  Add,
  Download,
  UploadFile,
} from "@mui/icons-material";

const actions = [
  {
    label: "New trade",
    icon: <Add />,
    primary: true,
  },
  {
    label: "Import trades",
    icon: <UploadFile />,
  },
  {
    label: "Export report",
    icon: <Download />,
  },
];

export default function QuickActions() {
  return (
    <section className="surface-card p-5">
      <div className="mb-5">
        <p className="panel-heading">
          Quick actions
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Common journal workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {actions.map((action) => (
          <button
            key={action.label}
            className={`flex h-11 items-center gap-3 rounded-lg px-3 text-sm font-semibold transition ${
              action.primary
                ? "bg-slate-950 text-white hover:bg-slate-800"
                : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
            }`}
          >
            <span className="[&_.MuiSvgIcon-root]:text-[20px]">
              {action.icon}
            </span>
            {action.label}
          </button>
        ))}
      </div>
    </section>
  );
}
