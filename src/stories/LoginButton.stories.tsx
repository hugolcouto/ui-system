import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import LoginButton, { ILoginButton } from '../components/LoginButton';

export default {
	title: 'Login Button',
	Component: LoginButton
} as Meta

const Template: Story<ILoginButton> = args => <LoginButton {...args} />

export const Default = Template.bind({})
Default.args = {
	backgroundColor: '#00b892',
	label: 'Olá mundo!',
	textColor: '#eee'
}