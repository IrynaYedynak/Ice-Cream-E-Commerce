import { render, screen, fireEvent } from '@testing-library/react';
import SubscribeSection from './SubscribeSection';
import { vi } from 'vitest';

const mockOpenModal = vi.fn();

// Перед тестами замінюємо хук
vi.mock('../useModal', () => ({
    __esModule: true,
    default: () => ({
        openModal: mockOpenModal,
    }),
}));

test('відправляє емейл при правильному введенні і погодженні з умовами', () => {
    render(<SubscribeSection/>);

    const emailInput = screen.getByPlaceholderText(/Enter Your Email/i);
    const checkbox = screen.getByRole('checkbox');
    const button = screen.getByText(/Subscribe/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(checkbox);
    fireEvent.click(button);

    expect(mockOpenModal).toHaveBeenCalledWith('Email успішно відправлено!');
    expect(mockOpenModal).toHaveBeenCalledTimes(1);
});
