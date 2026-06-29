import { useState, useEffect, useRef } from "react";

interface PlacePrediction {
  description: string;
  place_id: string;
}

export function useGooglePlaces(input: string, debounceMs = 400) {
  const [predictions, setPredictions] = useState<PlacePrediction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (!input.trim()) {
      setPredictions([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    timeoutRef.current = setTimeout(async () => {
      // Cancel previous request
      if (abortRef.current) {
        abortRef.current.abort();
      }
      abortRef.current = new AbortController();

      try {
        const res = await fetch(
          `/api/places?input=${encodeURIComponent(input)}`,
          { signal: abortRef.current.signal }
        );
        const data = await res.json();
        setPredictions(data.predictions || []);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setPredictions([]);
        }
      } finally {
        setIsLoading(false);
      }
    }, debounceMs);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [input, debounceMs]);

  return { predictions, isLoading };
}
