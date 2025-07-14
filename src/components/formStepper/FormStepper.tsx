import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  fullSchema,
  FullFormData,
} from "../../schemas/formStepperSchema";

import { FormStepperTabs } from "./FormStepperTabs";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { useFormStepper } from "../../hooks/useFormStepper";
import { useEffect } from "react";

const steps = ["Pessoal", "Contato", "Preferências"];
const stepFields: (keyof FullFormData)[][] = [
  ['name', 'email', 'birthDate'],
  ['phone', 'country', 'state', 'city'],
  ['color', 'framework', 'features', 'notifications'],
];

export function FormStepper() {
  const { step, next, back } = useFormStepper(steps.length);

  const StepComponent = [Step1, Step2, Step3][step];

  const methods = useForm<FullFormData>({
    mode: "onChange",
    resolver: zodResolver(fullSchema),
    defaultValues: {
      name: "",
      email: "",
      birthDate: "",
      phone: "",
      country: "",
      state: "",
      city: "",
      color: "",
      framework: "",
      features: [],
      notifications: false,
    },
  });

  const handleSubmit = async (data: FullFormData) => {
    console.log("✅ Dados:", data);
    alert("Formulário enviado com sucesso!");
  };

  const validateStep = async () => {
    const fields = stepFields[step];
    return await methods.trigger(fields);
  };

  useEffect(() => {
  const currentFields = stepFields[step];
  const allErrors = methods.formState.errors;

  Object.keys(allErrors).forEach((field) => {
    if (!currentFields.includes(field as keyof FullFormData)) {
      methods.clearErrors(field as keyof FullFormData);
    }
  });
  console.log("Validando campos:", currentFields, "step:", step);
}, [step]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => {
            e.preventDefault(); // impede qualquer submit inesperado
            methods.handleSubmit(handleSubmit)(e);
        }}
        className="max-w-xl mx-auto sm:p-4"
      >
        <FormStepperTabs step={step} labels={steps} />
        <StepComponent />

        <div className="flex items-end justify-between mt-6 dark:text-primary">
          {step > 0 && (
            <button type="button" onClick={back} className="btn">
              Voltar
            </button>
          )}
          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={async () => {
                const isValid = await validateStep();
                if (isValid) next();
              }}
              className="btn-primary"
            >
              Próximo
            </button>
          ) : (
            <button type="submit" className="btn-primary">
              Enviar
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
