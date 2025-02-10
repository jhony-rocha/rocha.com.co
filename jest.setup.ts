import '@testing-library/jest-dom';

global.ResizeObserver = class {
    observe(_target: Element, _options?: ResizeObserverOptions) {}
    unobserve(_target: Element) {}
    disconnect() {}
} as unknown as typeof ResizeObserver;