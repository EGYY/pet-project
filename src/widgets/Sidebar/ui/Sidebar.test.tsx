import { fireEvent, screen } from '@testing-library/react';
import { globalWrapper } from 'shared/lib/tests/globalWrapper';
import { Sidebar } from './Sidebar';

describe('Test Sidebar widget', () => {
    test('Sidebar render', () => {
        globalWrapper(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Sidebar collapsed', () => {
        globalWrapper(<Sidebar />);
        const sidebar = screen.getByTestId('sidebar');
        const button = screen.getByTestId('sidebar-toggle-button');
        expect(sidebar).toBeInTheDocument();
        fireEvent.click(button);
        expect(sidebar).toHaveClass('collapsed');
        screen.debug();
    });
});
