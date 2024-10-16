import { FC } from 'react'
import classNames from 'classnames'

import style from './style.module.scss'

type Props = {
	text: string
	variant: 'outlined' | 'fill'
}

export const Button: FC<Props> = ({ text, variant }) => (
	<button
		className={classNames(style.button, {
			[style.fill]: variant === 'fill',
			[style.outlined]: variant === 'outlined',
		})}
	>
		{text}
	</button>
)
