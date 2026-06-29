import { useCallback, useRef, useState } from "react";

/** Cooldown after a submit attempt before another request is allowed. */
export const FORM_SUBMIT_COOLDOWN_MS = 3000;

/**
 * Guards async form submits against double-clicks and rapid re-submits.
 * Uses a synchronous ref lock (state alone can miss fast double-clicks).
 */
export function useDebouncedSubmit(submitFn, options = {}) {
  const { cooldownMs = FORM_SUBMIT_COOLDOWN_MS } = options;
  const inFlightRef = useRef(false);
  const cooldownUntilRef = useRef(0);
  const cooldownTimerRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldownActive, setCooldownActive] = useState(false);

  const clearCooldownTimer = useCallback(() => {
    if (cooldownTimerRef.current) {
      clearTimeout(cooldownTimerRef.current);
      cooldownTimerRef.current = null;
    }
  }, []);

  const startCooldown = useCallback(() => {
    clearCooldownTimer();
    const endsAt = Date.now() + cooldownMs;
    cooldownUntilRef.current = endsAt;
    setCooldownActive(true);
    cooldownTimerRef.current = setTimeout(() => {
      cooldownUntilRef.current = 0;
      setCooldownActive(false);
      cooldownTimerRef.current = null;
    }, cooldownMs);
  }, [clearCooldownTimer, cooldownMs]);

  const submit = useCallback(
    async (...args) => {
      if (inFlightRef.current) return undefined;
      if (Date.now() < cooldownUntilRef.current) return undefined;

      inFlightRef.current = true;
      setIsSubmitting(true);

      try {
        return await submitFn(...args);
      } finally {
        inFlightRef.current = false;
        setIsSubmitting(false);
        startCooldown();
      }
    },
    [submitFn, startCooldown],
  );

  const isDisabled = isSubmitting || cooldownActive;

  return {
    submit,
    isSubmitting,
    cooldownActive,
    isDisabled,
  };
}
