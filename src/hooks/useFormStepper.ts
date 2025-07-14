import { useState } from 'react';

export function useFormStepper(total: number) {
  const [step, setStep] = useState(0);

  function next() {
    if (step < total - 1) setStep(s => s + 1);
  }
  function back() {
    if (step > 0) setStep(s => s - 1);
  }
  return { step, next, back };
}