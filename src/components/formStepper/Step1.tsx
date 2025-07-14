import { useFormContext } from 'react-hook-form';
import { FormStepperWrapper } from './FormStepperWrapper';
import { Input } from '../form';


export function Step1() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <FormStepperWrapper>
      <Input
        label="Nome completo"
        id="name"
        {...register('name')}
        error={errors.name?.message as string}
      />
      <Input
        label="Email"
        type="email"
        id="email"
        {...register('email')}
        error={errors.email?.message as string}
      />
      <Input
        label="Data de nascimento"
        type="date"
        id="birthDate"
        {...register('birthDate')}
        error={errors.birthDate?.message as string}
      />
    </FormStepperWrapper>
  );
}
