import { forwardRef, TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(({ label, error, id, ...props }, ref) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium">{label}</label>
    <textarea
      ref={ref}
      id={id}
      {...props}
      className="w-full border rounded p-2"
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
    />
    {error && <p id={`${id}-error`} className="text-sm text-red-600">{error}</p>}
  </div>
));
