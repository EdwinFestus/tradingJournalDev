import Trade from "../models/Trade.js";

/**
 * Create a new trade
 */
export async function create(data) {
    return Trade.create(data);
}

/**
 * Find trade by ID
 */
export async function findById(id) {
    return Trade.findById(id);
}

/**
 * Find trade by ID and owner
 */
export async function findByIdAndUser(id, userId) {
    return Trade.findOne({
        _id: id,
        user: userId,
    });
}

/**
 * Get all trades belonging to a user
 */
export async function findByUser(
    userId,
    options = {}
) {
    const {
        page = 1,
        limit = 25,
        sort = "-tradeDate",
        filters = {},
    } = options;

    const query = {
        user: userId,
        ...filters,
    };

    const skip = (page - 1) * limit;

    const [trades, total] = await Promise.all([
        Trade.find(query)
            .sort(sort)
            .skip(skip)
            .limit(limit),

        Trade.countDocuments(query),
    ]);

    return {
        trades,
        pagination: {
            page,
            limit,
            total,
            pages: Math.ceil(total / limit),
        },
    };
}


/**
 * Return all trades for analytics
 */
export async function findAllByUser(userId) {
    return Trade.find({
        user: userId,
        isDeleted: false,
    }).sort({
        tradeDate: -1,
    });
}

// export async function findAllByUser(userId) {

//     const trades = await Trade.find({
//         user: userId,
//         isDeleted: false,
//     });

//     console.log("Dashboard Trades:", trades.length);

//     return trades;
// }


/**
 * Update trade
 */
export async function update(
    id,
    updates
) {
    return Trade.findByIdAndUpdate(
        id,
        updates,
        {
            new: true,
            runValidators: true,
        }
    );
}

/**
 * Save existing mongoose document
 */
export async function save(trade) {
    return trade.save();
}

/**
 * Delete trade permanently
 */
export async function remove(id) {
    return Trade.findByIdAndDelete(id);
}

/**
 * Count user trades
 */
export async function count(userId) {
    return Trade.countDocuments({
        user: userId,
    });
}

/**
 * Get latest trades
 */
export async function latest(
    userId,
    limit = 10
) {
    return Trade.find({
        user: userId,
    })
        .sort({
            tradeDate: -1,
        })
        .limit(limit);
}

/**
 * Get closed trades
 */
export async function closedTrades(userId) {
    return Trade.find({
        user: userId,
        status: "CLOSED",
        isDeleted: false,
    });
}

/**
 * Get open trades
 */
export async function openTrades(userId) {
    return Trade.find({
        user: userId,
        status: "OPEN",
        isDeleted: false,
    });
}

/**
 * Check trade ownership
 */
export async function belongsToUser(
    tradeId,
    userId
) {
    const trade = await Trade.exists({
        _id: tradeId,
        user: userId,
    });

    return !!trade;
}