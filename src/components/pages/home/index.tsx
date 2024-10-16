import { FC } from 'react'

import style from './style.module.scss'
import { Header } from '@components/ui/header'
import { Hero } from '@components/ui/hero'

export const HomePage: FC = () => (
	<div className={style.page}>
		<Header />
		<main>
			<Hero />
		</main>
	</div>
)
