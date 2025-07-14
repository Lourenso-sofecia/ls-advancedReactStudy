import { forwardRef, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, Props>(({ label, id, error, ...props }, ref) => (
  <div className="flex items-center mb-4">
    <input
      ref={ref}
      id={id}
      type="checkbox"
      {...props}
      className="mr-2"
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
    />
    <label htmlFor={id} className={`text-sm font-medium  dark:text-gray-300 ${error ? "text-red-600 dark:text-red-600 ": "text-gray-700"}`} >
      {label}
    </label>
    {error && <p id={`${id}-error`} className="text-sm text-red-600 ml-2">{error}</p>}
  </div>
));
