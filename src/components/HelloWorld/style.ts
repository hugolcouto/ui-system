import styled from 'styled-components'

interface IHeading {
	textColor?: string
}

export const Heading = styled.h1<IHeading>`
	font-family: sans-serif;
	color: ${({ textColor }) => textColor};
	text-align: center;
	font-size: 3em;
`