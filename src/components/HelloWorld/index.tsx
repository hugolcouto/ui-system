import React from 'react'
import * as Style from './style';

export interface IHelloWorld {
	text?: string,
	textColor?: string
}

export default function HelloWorld({ text = 'Hello World', textColor = '#00b892' }: IHelloWorld) {
	return (
		<Style.Heading textColor={textColor}>{text}</Style.Heading>
	)
}
