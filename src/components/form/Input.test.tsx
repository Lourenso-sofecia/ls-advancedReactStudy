import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Input } from './Input';

test('Permite digitar o Nome no input', async () =>{
    render(<Input label='Nome completo' id='name' />);

    const input = screen.getByLabelText('Nome completo');
    await userEvent.type(input, 'Lourenço Sofécia');
    expect(input).toHaveValue('Lourenço Sofécia');
})