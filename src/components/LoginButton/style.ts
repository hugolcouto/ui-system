import styled from 'styled-components'

interface ILoginButton {
	backgroundColor?: string,
	textColor?: string
}

export const Login = styled.button<ILoginButton>`
	background-color: ${({ backgroundColor }) => backgroundColor};
	color: ${({ textColor }) => textColor};
	display: flex;
	flex-direction: row;
	min-width: 100px;
`