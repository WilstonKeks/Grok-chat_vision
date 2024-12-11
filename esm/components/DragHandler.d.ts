import { EmblaCarouselType } from './EmblaCarousel.js';
import { AnimationsType } from './Animations.js';
import { CounterType } from './Counter.js';
import { DragTrackerType, PointerEventType } from './DragTracker.js';
import { EventHandlerType } from './EventHandler.js';
import { AxisType } from './Axis.js';
import { ScrollBodyType } from './ScrollBody.js';
import { ScrollTargetType } from './ScrollTarget.js';
import { ScrollToType } from './ScrollTo.js';
import { Vector1DType } from './Vector1d.js';
import { PercentOfViewType } from './PercentOfView.js';
import { WindowType } from './utils.js';
type DragHandlerCallbackType = (emblaApi: EmblaCarouselType, evt: PointerEventType) => boolean | void;
export type DragHandlerOptionType = boolean | DragHandlerCallbackType;
export type DragHandlerType = {
    init: (emblaApi: EmblaCarouselType) => void;
    destroy: () => void;
    pointerDown: () => boolean;
};
export declare function DragHandler(axis: AxisType, rootNode: HTMLElement, ownerDocument: Document, ownerWindow: WindowType, target: Vector1DType, dragTracker: DragTrackerType, location: Vector1DType, animation: AnimationsType, scrollTo: ScrollToType, scrollBody: ScrollBodyType, scrollTarget: ScrollTargetType, index: CounterType, eventHandler: EventHandlerType, percentOfView: PercentOfViewType, dragFree: boolean, dragThreshold: number, skipSnaps: boolean, baseFriction: number, watchDrag: DragHandlerOptionType): DragHandlerType;
export {};