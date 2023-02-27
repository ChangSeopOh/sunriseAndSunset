import { EffectCallback, DependencyList, useEffect, useRef } from "react";

export const useEffectSkipFirst = (
  effect: EffectCallback,
  deps: DependencyList
) => {
  const firstRun = useRef<boolean>(true);
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
