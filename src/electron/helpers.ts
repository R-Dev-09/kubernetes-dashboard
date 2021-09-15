import { homedir } from 'os';

export const isSafe = (url: string) => url.startsWith(`file:///${homedir()}`) || url.startsWith('https://');