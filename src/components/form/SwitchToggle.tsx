import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function SwitchToggle({ label, id, error, ...props }: Props) {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <input type="checkbox" id={id} {...props} className="toggle-checkbox" />
      <label htmlFor={id} className="text-sm">{label}</label>
      {error && <p className="text-sm text-red-600 ml-2">{error}</p>}
    </div>
  );
}
