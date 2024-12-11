import { LimitType } from './Limit.js';
export type ScrollLimitType = {
    limit: LimitType;
};
export declare function ScrollLimit(contentSize: number, scrollSnaps: number[], loop: boolean): ScrollLimitType;