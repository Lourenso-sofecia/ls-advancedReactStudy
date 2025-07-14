import { useFormContext, useWatch } from 'react-hook-form';
import { FormStepperWrapper } from './FormStepperWrapper';
import { Input, Select } from '../form';

export function Step2() {
  const { register, control, formState: { errors } } = useFormContext();
  const country = useWatch({ control, name: 'country' });

  const countrysData = [
    { label: "Brasil", value: "BR" },
    { label: "Portugal", value: "PT" },
    { label: "Angola", value: "AO" },
    { label: "Moçambique", value: "MZ" },
    { label: "Cabo Verde", value: "CV" },
    { label: "Guiné-Bissau", value: "GW" },
    { label: "São Tomé e Príncipe", value: "ST" },  
    { label: "Timor-Leste", value: "TL" },
  ];

  return (
    <FormStepperWrapper>
      <Input
        label="Telefone"
        type="tel"
        id="phone"
        {...register('phone')}
        error={errors.phone?.message as string}
      />
      <Input
        label="Prefixo"
        id="country"
        readOnly
        {...register('country')}
        error={errors.country?.message as string}
      />
      <Select
        label="País"
        id="country"
        options={countrysData}
        {...register("country")}
        error={errors.country?.message as string}
      />


      {((country === 'PT') || (country ==='AO') ) && (
        <>
          <Input
            label="Estado"
            id="state"
            {...register('state')}
            error={errors.state?.message as string}
          />
          <Input
            label="Cidade"
            id="city"
            {...register('city')}
            error={errors.city?.message as string}
          />
        </>
      )}
    </FormStepperWrapper>
  );
}
