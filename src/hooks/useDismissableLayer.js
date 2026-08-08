import { useEffect } from "react";

export function useDismissableLayer({ enabled, layerRef, onDismiss }) {
  useEffect(() => {
    if (!enabled) return undefined;

    const handleDismiss = (event) => {
      if (event.key === "Escape") {
        onDismiss();
        return;
      }

      if (
        event.type === "pointerdown" &&
        layerRef.current &&
        !layerRef.current.contains(event.target)
      ) {
        onDismiss();
      }
    };

    document.addEventListener("pointerdown", handleDismiss);
    document.addEventListener("keydown", handleDismiss);

    return () => {
      document.removeEventListener("pointerdown", handleDismiss);
      document.removeEventListener("keydown", handleDismiss);
    };
  }, [enabled, layerRef, onDismiss]);
}
