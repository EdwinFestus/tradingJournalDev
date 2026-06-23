const Dashboard = () => {
  const cards = [
    {
      title: "Total Trades",
      value: "128",
    },
    {
      title: "Win Rate",
      value: "67%",
    },
    {
      title: "Profit Factor",
      value: "2.4",
    },
    {
      title: "PnL",
      value: "$4,820",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <p className="text-slate-500 mt-2">
        Welcome back to Ella
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-2xl p-6 shadow-sm border"
          >
            <p className="text-slate-500 text-sm">
              {card.title}
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {card.value}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;