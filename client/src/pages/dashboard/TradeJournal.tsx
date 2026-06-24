import { useEffect, useMemo, useState } from "react";
import { useTradeStore } from "../../store/tradeStore";

const TradeJournal = () => {
  const { trades, fetchTrades, createTrade } = useTradeStore();

  const [formData, setFormData] = useState({
    pair: "",
    orderType: "BUY",
    entry: "",
    stopLoss: "",
    takeProfit: "",
    lotSize: "",
    strategy: "SMC",
    timeframe: "15M",
    mood: "",
    notes: "",
  });

  useEffect(() => {
    fetchTrades();
  }, [fetchTrades]);

  const metrics = useMemo(() => {
    const entry = Number(formData.entry);
    const stopLoss = Number(formData.stopLoss);
    const takeProfit = Number(formData.takeProfit);

    if (!entry || !stopLoss || !takeProfit) {
      return {
        risk: 0,
        reward: 0,
        rr: 0,
        rating: "STANDARD",
      };
    }

    const risk = Number(Math.abs(entry - stopLoss).toFixed(2));
    const reward = Number(Math.abs(takeProfit - entry).toFixed(2));
    
    const rr =
      risk === 0
        ? 0
        : Number((reward / risk).toFixed(2));
        
        let rating = "STANDARD";
        
        if (rr >= 6) {
          rating = "ELITE";
        } else if (rr >= 5) {
          rating = "A++";
        } else if (rr >= 3) {
          rating = "A+";
        }
      
        const rrDisplay = `1:${Math.round(rr)}`;

    return {
      risk,
      reward,
      rrDisplay,
      rating,
    };
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      try {
        await createTrade({
          ...formData,

          entry: Number(formData.entry),
          stopLoss: Number(formData.stopLoss),
          takeProfit: Number(formData.takeProfit),
          lotSize: Number(formData.lotSize),
        });

        setFormData({
          pair: "",
          orderType: "BUY",
          entry: "",
          stopLoss: "",
          takeProfit: "",
          lotSize: "",
          strategy: "SMC",
          timeframe: "15M",
          mood: "",
          notes: "",
        });

      } catch (error) {
        console.error(error);
      }
    };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Trade Journal
        </h1>

        <p className="text-gray-500">
          Manage your trades
        </p>
      </div>

      {/* Trade Form */}

      <div className="bg-white border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">
          New Trade
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <input
              name="pair"
              placeholder="Pair"
              value={formData.pair}
              onChange={handleChange}
              className="border p-3 rounded"
            />

            <select
              name="orderType"
              value={formData.orderType}
              onChange={handleChange}
              className="border p-3 rounded"
            >
              <option value="BUY">
                BUY
              </option>

              <option value="SELL">
                SELL
              </option>
            </select>

            <input
              name="entry"
              type="number"
              placeholder="Entry"
              value={formData.entry}
              onChange={handleChange}
              className="border p-3 rounded"
            />

            <input
              name="stopLoss"
              type="number"
              placeholder="Stop Loss"
              value={formData.stopLoss}
              onChange={handleChange}
              className="border p-3 rounded"
            />

            <input
              name="takeProfit"
              type="number"
              placeholder="Take Profit"
              value={formData.takeProfit}
              onChange={handleChange}
              className="border p-3 rounded"
            />

            <input
              name="lotSize"
              type="number"
              placeholder="Lot Size"
              value={formData.lotSize}
              onChange={handleChange}
              className="border p-3 rounded"
            />

            <select
              name="strategy"
              value={formData.strategy}
              onChange={handleChange}
              className="border p-3 rounded"
            >
              <option>SMC</option>
              <option>Liquidity Grab</option>
              <option>Trendline Break</option>
              <option>Double Top</option>
              <option>Double Bottom</option>
              <option>Head & Shoulders</option>
              <option>Expansion</option>
            </select>

            <select
              name="timeframe"
              value={formData.timeframe}
              onChange={handleChange}
              className="border p-3 rounded"
            >
              <option>15M</option>
              <option>30M</option>
              <option>1H</option>
              <option>4H</option>
            </select>
          </div>

          <textarea
            name="notes"
            rows={4}
            placeholder="Trade Notes"
            value={formData.notes}
            onChange={handleChange}
            className="border p-3 rounded w-full"
          />

          <div className="grid grid-cols-4 gap-4">
            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-500">
                Risk
              </p>

              <p className="font-bold">
                {metrics.risk}
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-500">
                Reward
              </p>

              <p className="font-bold ">
                {metrics.reward}
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-500">
                RR
              </p>

              <p className="font-bold">
                {metrics.rrDisplay}
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-500">
                Rating
              </p>

              <p className="font-bold">
                {metrics.rating}
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="bg-slate-900 text-white px-6 py-3 rounded-lg"
          >
            Save Trade
          </button>
        </form>
      </div>

      {/* Recent Trades */}

      <div className="bg-white border rounded-xl p-6">
        <h2 className="font-semibold mb-4">
          Recent Trades
        </h2>

        <table className="w-full">
          <thead>
            <tr>
              <th>Pair</th>
              <th>Type</th>
              <th>RR</th>
              <th>Rating</th>
            </tr>
          </thead>

          <tbody>
            {trades.map((trade) => (
              <tr key={trade._id}>
                <td>{trade.pair}</td>

                <td>{trade.orderType}</td>

                <td>
                  {Number(
                    trade.rrRatio
                  ).toFixed(2)}
                </td>

                <td>
                  {trade.setupRating}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradeJournal;