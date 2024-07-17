import { addDecorator } from '@storybook/react';
import { RouteDecorator, StyleDecorator, ThemeDecorator } from 'shared/config';
import { Theme } from 'shared/contexts';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouteDecorator);
