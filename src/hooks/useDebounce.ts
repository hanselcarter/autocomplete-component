import { useEffect, useState } from "react";

export const standardDebounceDelayInMilliseconds = 500;

export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(
      () => setDebouncedValue(value),
      delay || standardDebounceDelayInMilliseconds
    );

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
