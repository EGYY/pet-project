import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button ui', () => {
    test('Test render', () => {
        render(<Button>TEST BUTTON</Button>);
        expect(screen.getByText('TEST BUTTON')).toBeInTheDocument();
    });

    test('Test ghost theme', () => {
        render(<Button theme={ButtonTheme.GHOST}>TEST BUTTON</Button>);
        expect(screen.getByText('TEST BUTTON')).toHaveClass('ghost');
        screen.debug();
    });
});
