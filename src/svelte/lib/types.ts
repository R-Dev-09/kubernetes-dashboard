import type { TransitionConfig } from 'svelte/transition';

export type TTransitionFunction<P> = (node: Element, params: P) => TransitionConfig;