import { forwardRef, SelectHTMLAttributes } from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ label, error, options, id, ...props }, ref) => (
  <div className="mb-4">
    <label className={`block text-sm font-medium  dark:text-gray-300 ${error ? "text-red-600 dark:text-red-600 ": "text-gray-700"}`} htmlFor={id}>
      {label}
    </label>
    <select
      ref={ref}
      id={id}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
      {...props}
      className="w-full border rounded p-2"
    >
      <option value="">Selecione</option>
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
    {error && <p id={`${id}-error`} className="text-sm text-red-600">{error}</p>}
  </div>
));
