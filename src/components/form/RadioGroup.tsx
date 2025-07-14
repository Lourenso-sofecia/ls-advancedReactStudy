interface RadioOption {
  label: string;
  value: string;
}

interface Props {
  name: string;
  label: string;
  options: RadioOption[];
  error?: string;
  register: ReturnType<typeof import("react-hook-form").useForm>["register"];
}

export function RadioGroup({ name, label, options, error, register }: Props) {
  return (
    <div className="mb-4">
      <p className={`text-sm font-medium mb-1 dark:text-gray-300 `}>{label}</p>
      <ul>
        {options.map((opt) => (
          <li key={opt.value} className="block text-sm dark:text-gray-300">
            <input
              type="radio"
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
      </ul>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
