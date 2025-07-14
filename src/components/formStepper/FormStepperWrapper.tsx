export function FormStepperWrapper({ children }: { children: React.ReactNode }) {
  return <div className="animate-fadeIn transition-all duration-300">{children}</div>;
}