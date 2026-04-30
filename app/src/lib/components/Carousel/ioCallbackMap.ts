import type { GlobalIntersectionObserver } from "./observer";

export const CALLBACK_MAP = {
	images: (
		thisArg: GlobalIntersectionObserver,
		entry: IntersectionObserverEntry,
	) => {
		const target = entry.target as HTMLImageElement;
		if (!entry.isIntersecting) return;
		if (target.dataset.src) {
			target.src = target.dataset.src;
		}
		thisArg.unobserve(target);
	},
} as const;
