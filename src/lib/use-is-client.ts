"use client";

import { useSyncExternalStore } from "react";

/** Client-only flag without setState-in-effect (hydration-safe). */
export function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}
