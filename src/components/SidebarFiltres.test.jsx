import { render, screen, fireEvent } from '@testing-library/react'
import SidebarFilters from './SidebarFiltres'
import { vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'

test('викликає onCategoryChange при виборі категорії', () => {
    const onCategoryChange = vi.fn()

    render(
        <MemoryRouter>
        <SidebarFilters onPriceChange={() => {}} onCategoryChange={onCategoryChange} />
        </MemoryRouter>
    )

    const checkbox = screen.getByRole('checkbox', { name: /milkshakes/i })
    fireEvent.click(checkbox)

    expect(onCategoryChange).toHaveBeenCalledWith(['Milkshakes'])
})

