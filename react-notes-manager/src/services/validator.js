export class ValidatorService {
  // This is a static class, so we don't need to instantiate it.
  // We can just call the methods directly.
  static min(inputValue, min) {
      // `Can't be less than ${min} characters`;
  }

  static max(inputValue, max) {
      // `Can't be more than ${max} characters`;
  }
}
