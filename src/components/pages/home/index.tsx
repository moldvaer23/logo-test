import { FC } from 'react'

import { Hero } from '@components/ui/hero'
import { About } from '@components/ui/about'
import { Header } from '@components/ui/header'
import { Footer } from '@components/ui/footer'

import style from './style.module.scss'

export const HomePage: FC = () => (
	<div className={style.page}>
		<Header />
		<main className={style.main}>
			<Hero />
			<About />
		</main>
		<Footer />
	</div>
)
