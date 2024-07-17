import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config';
import { Theme } from 'shared/contexts';
import { Button, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Ghost = Template.bind({});
Ghost.args = {
    children: 'Text',
    theme: ButtonTheme.GHOST,
};

export const GhostDark = Template.bind({});
GhostDark.args = {
    children: 'Text',
    theme: ButtonTheme.GHOST,
};

export const Filled = Template.bind({});
Filled.args = {
    children: 'Text',
    theme: ButtonTheme.FILLED,
};

export const FilledDark = Template.bind({});
FilledDark.args = {
    children: 'Text',
    theme: ButtonTheme.FILLED,
};

export const Bordered = Template.bind({});
Bordered.args = {
    children: 'Text',
    theme: ButtonTheme.BORDERED,
};

export const BorderedDark = Template.bind({});
BorderedDark.args = {
    children: 'Text',
    theme: ButtonTheme.BORDERED,
};

GhostDark.decorators = [ThemeDecorator(Theme.DARK)];
FilledDark.decorators = [ThemeDecorator(Theme.DARK)];
BorderedDark.decorators = [ThemeDecorator(Theme.DARK)];
