import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config';
import { Theme } from 'shared/contexts';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    open: true,
    children: 'Test modal',
};

export const Dark = Template.bind({});
Dark.args = {
    open: true,
    children: 'Test modal',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
