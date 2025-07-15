import { z } from 'zod';

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
const requiredString = 'Campo obrigatório';

export const personalSchema = z.object({
  name: z.string().nonempty(requiredString).min(2, 'Nome muito curto'),
  email: z.string().nonempty(requiredString).email('Email inválido'),
  birthDate: z.string().nonempty(requiredString).refine(date => new Date(date) <= new Date(), 'Data futura não permitida'),
});

export const addressSchema = z.object({
  phone: z.string().nonempty(requiredString).min(10, 'Telefone inválido'),
  country: z.string().nonempty(requiredString),
  state: z.string().optional(),
  city: z.string().optional(),
});
export const preferencesSchema = z.object({
  notifications: z.boolean().optional(),
  color: z.string().nonempty(requiredString),
  framework: z.string().nonempty(requiredString),
  features: z.array(z.string().nonempty(requiredString)),
});

export const fullSchema = personalSchema
  .merge(addressSchema)
  .merge(preferencesSchema);

export type FullFormData = z.infer<typeof fullSchema>;