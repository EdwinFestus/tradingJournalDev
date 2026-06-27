interface Props {
  onSuccess: () => void;
}

export default function TradeForm({
  onSuccess,
}: Props) {
    console.log(onSuccess)
    
  return (
    <div className="py-8 text-center">
      <h2 className="text-xl font-semibold">
        Trade Form
      </h2>

      <p className="text-slate-500 mt-2">
        React Hook Form integration begins in Phase 5.2.2.
      </p>
    </div>
  );
}