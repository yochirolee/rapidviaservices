/**
 * In-memory IP-based rate limiter.
 * 15 requests per minute per IP.
 */

const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 15;

const ipCounts = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
	const now = Date.now();
	const entry = ipCounts.get(ip);

	if (!entry) {
		ipCounts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
		return { allowed: true, remaining: MAX_REQUESTS - 1 };
	}

	if (now >= entry.resetAt) {
		ipCounts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
		return { allowed: true, remaining: MAX_REQUESTS - 1 };
	}

	entry.count += 1;
	const remaining = Math.max(0, MAX_REQUESTS - entry.count);
	return {
		allowed: entry.count <= MAX_REQUESTS,
		remaining,
	};
}
