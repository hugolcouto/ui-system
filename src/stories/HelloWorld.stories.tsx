import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';

import HelloWorld, { IHelloWorld } from '../components/HelloWorld'

export default {
	title: 'Hello World',
	component: HelloWorld,
} as Meta;

const Template: Story<IHelloWorld> = args => <HelloWorld {...args} />

export const Heading = Template.bind({});
Heading.args = {
	text: 'Olá mundo'
}