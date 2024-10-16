import { FC } from 'react'

import style from './style.module.scss'
import { Header } from '@components/ui/header'
import { Hero } from '@components/ui/hero'
import { About } from '@components/ui/about'

export const HomePage: FC = () => (
	<div className={style.page}>
		<Header />
		<main className={style.main}>
			<Hero />
			<About />
		</main>
	</div>
)
