import { FC } from 'react'

import style from './style.module.scss'
import { Header } from '@components/ui/header'

export const HomePage: FC = () => (
	<div className={style.page}>
		<Header />
	</div>
)
