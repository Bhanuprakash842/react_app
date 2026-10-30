
import '@testing-library/jest-dom';

// Mock IntersectionObserver because JSDOM does not implement it.
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe(element) {
    this.callback(
      [{ isIntersecting: true, target: element }],
      this
    );
  }

  unobserve() {}

  disconnect() {}

  takeRecords() {
    return [];
  }
}

beforeAll(() => {
  global.IntersectionObserver = MockIntersectionObserver;
});
