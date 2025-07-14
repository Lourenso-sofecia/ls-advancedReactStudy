import { useFormContext } from "react-hook-form";
import { FormStepperWrapper } from "./FormStepperWrapper";
import { Checkbox, Input, RadioGroup, CheckboxGroup } from "../form";

export function Step3() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormStepperWrapper>
      <Input
        className="w-20 h-20 border-none p-4"
        label="Cor favorita"
        type="color"
        id="color"
        {...register("color")}
        error={errors.color?.message as string}
      />
      <RadioGroup
        name="framework"
        label="Escolha o framework"
        options={[
          { label: "React", value: "react" },
          { label: "Vue", value: "vue" },
          { label: "Svelte", value: "svelte" },
        ]}
        register={register}
        error={errors.framework?.message as string}
      />

      <CheckboxGroup
        name="features"
        label="Funcionalidades desejadas"
        options={[
          { label: "Dashboard", value: "dashboard" },
          { label: "Relatórios", value: "relatorios" },
          { label: "Notificações", value: "notificacoes" },
        ]}
        register={register}
        error={errors.features?.message as string}
      />

      <Checkbox
        label="Aceita receber notificações"
        id="notifications"
        {...register("notifications")}
      />
    </FormStepperWrapper>
  );
}
