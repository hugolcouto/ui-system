import { User } from '../../icons/User'
import * as Style from './style'

export interface ILoginButton {
	label?: string,
	backgroundColor?: string,
	textColor?: string
}

export default function LoginButton({
	label,
	backgroundColor = "#f0f",
	textColor = "#eee"
}: ILoginButton) {
	return (
		<Style.Login backgroundColor={backgroundColor} textColor={textColor}>
			{label} <User width={400} />
		</Style.Login>
	)
}