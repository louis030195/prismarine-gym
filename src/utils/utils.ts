
export const randomString = (length: number) => Math.random().toString(36).substring(length);
export const clip = (value: number, min: number, max: number): number => Math.max(min, Math.min(value, max));