import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('increments the counter when the increment button is clicked', () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementButton = getByRole('button', { name: 'Increment' });
    fireEvent.click(incrementButton);
    const counterValue = Number(getByTestId('count').textContent);
    expect(counterValue).toEqual(1);
});
test('increments the counter when the increment button is clicked', () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const decrementButton = getByRole('button', { name: 'Decrement' });
    fireEvent.click(decrementButton);
    const counterValue = Number(getByTestId('count').textContent);
    expect(counterValue).toEqual(-1);
});

