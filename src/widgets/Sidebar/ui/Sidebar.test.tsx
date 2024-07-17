import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Test Sidebar widget', () => {
    test('Sidebar render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Sidebar collapsed', () => {
        renderWithTranslation(<Sidebar />);
        const sidebar = screen.getByTestId('sidebar');
        const button = screen.getByTestId('sidebar-toggle-button');
        expect(sidebar).toBeInTheDocument();
        fireEvent.click(button);
        expect(sidebar).toHaveClass('collapsed');
        screen.debug();
    });
});
