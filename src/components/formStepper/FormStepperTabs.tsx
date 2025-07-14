interface FormStepperTabsProps {
  step: number;
  labels: string[];
}

export const FormStepperTabs = ({ step, labels }: FormStepperTabsProps) => (
  <div className="flex justify-center mb-6 w-full dark:text-white max-[281px]:block">
    {labels.map((label, index) => (
      <div
        key={label}
        className={`px-4 py-2 rounded-full text-sm font-semibold
          ${index === step ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}
      >
        {label}
      </div>
    ))}
  </div>
);