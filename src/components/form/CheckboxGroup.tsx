interface Option {
  label: string;
  value: string;
}

interface Props {
  name: string;
  label: string;
  options: Option[];
  error?: string;
  register: ReturnType<typeof import("react-hook-form").useForm>["register"];
}

export function CheckboxGroup({
  name,
  label,
  options,
  error,
  register,
}: Props) {
  return (
    <div className="mb-4">
      <p className={`text-sm font-medium mb-1 dark:text-gray-300 `}>{label}</p>
      {options.map((opt) => (
        <li key={opt.value} className="block text-sm dark:text-gray-300">
          <input
            type="checkbox"
            value={opt.value}
            {...register(name)}
            className="mr-2"
          />
          <label
            className={` text-sm font-medium  dark:text-gray-300 ${
              error ? "text-red-600 dark:text-red-600 " : "text-gray-700"
            }`}
            htmlFor={opt.value}
          >
            {opt.label}
          </label>
        </li>
      ))}
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}
