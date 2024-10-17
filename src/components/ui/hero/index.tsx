import { FC } from 'react'

import { Button } from '@components/ui/button'

import style from './style.module.scss'

export const Hero: FC = () => (
	<section className={style.hero}>
		<div className={style.info}>
			<p className={style.heading}>
				<span className={style.headingBold}>
					Корпоративный
					<br />
					сайт
				</span>
				<span className={style.headingLight}>от</span>
				<span className={style.headingPrice}>50 000</span>
				<span className={style.headingLight}>рублей</span>
			</p>
			<Button text='Заказать сайт' variant='fill' />
		</div>
		<img className={style.mac} src='/src/assets/mac.png' alt='mac' />
		<div className={style.background} />
	</section>
)
