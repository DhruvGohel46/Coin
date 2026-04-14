/**
 * Centralized API utility for CoinLayer dashboard.
 * Each function simulates real-world async overhead.
 */

// Simulates flipping a coin on the server
export const flipCoin = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = Math.random() > 0.5 ? 'heads' : 'tails';
            resolve({ result, timestamp: new Date().toISOString() });
        }, 800);
    });
};

// Fetches recent flip history
export const fetchHistory = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: '1', result: 'heads', timestamp: '2026-04-14T10:00:00Z' },
                { id: '2', result: 'tails', timestamp: '2026-04-14T09:45:00Z' },
                { id: '3', result: 'heads', timestamp: '2026-04-14T09:30:00Z' },
            ]);
        }, 500);
    });
};

// Fetches general statistics for heads/tails
export const fetchStats = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                headsCount: 154,
                tailsCount: 142,
                totalFlips: 296,
                winRate: '52%'
            });
        }, 600);
    });
};
