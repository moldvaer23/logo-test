import { FC } from 'react'

import { Button } from '@components/ui/button'
import PhoneLogo from '@assets/phone.svg?react'

import style from './style.module.scss'

export const Header: FC = () => (
	<header className={style.header}>
		<div className={style.info}>
			<div className={style.logo}>
				<span className={style.logoBold}>Web</span>
				<span className={style.logoLight}>Store</span>
			</div>
			<div className={style.contacts}>
				<div className={style.phoneWrapper}>
					<PhoneLogo className={style.logoPhone} />
					<span className={style.phone}>+7 (495) 926-01-26</span>
				</div>

				<Button text='Заказать сайт' variant='outlined' />
			</div>
		</div>
		<nav>
			<ul className={style.navList}>
				<li>
					<a href='/'>компания</a>
				</li>
				<li>
					<a href='/'>услуги</a>
				</li>
				<li>
					<a href='/'>работы</a>
				</li>
				<li>
					<a href='/'>контакты</a>
				</li>
			</ul>
		</nav>
	</header>
)
