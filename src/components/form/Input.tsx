import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error,className, ...props }, ref) => (
  <div className="mb-4">
    <label className={`block text-sm font-medium  dark:text-gray-300 ${error ? "text-red-600 dark:text-red-600 ": "text-gray-700"}`} htmlFor={props.id}>
      {label}
    </label>
    <input
      ref={ref}
      {...props}
      aria-invalid={!!error}
      aria-describedby={error ? `${props.id}-error` : undefined}
      className={` ${className} mt-1 block w-full p-2 border rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-600 dark:text-white`}
    />
    {error && (
      <p id={`${props.id}-error`} className="mt-1 text-sm text-red-600">
        {error}
      </p>
    )}
  </div>
));