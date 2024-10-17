import { FC } from 'react'

import classNames from 'classnames'

import style from './style.module.scss'

export const Footer: FC = () => (
	<footer className={style.footer}>
		<div className={style.footerList}>
			<div className={style.listItem}>
				<span className={style.bold}>Адрес:</span>
				<ul className={style.itemList}>
					<li>г. Москва,</li>
					<li>ул. Дербеневская, дом 1, строение 6, подъезд 4, этаж 2.</li>
				</ul>
			</div>
			<div className={classNames(style.listItem, style.phons)}>
				<span className={style.bold}>Телефоны:</span>
				<ul className={style.itemList}>
					<li>+7 (495) 926-01-26</li>
					<li>+7 (495) 926-01-26</li>
				</ul>
			</div>
			<div className={classNames(style.messages)}>
				<p>
					<span className={style.bold}>E-mail: </span>
					<a className={style.mail} href='mailto:nfo@nologostudio.ru'>
						nfo@nologostudio.ru
					</a>
				</p>
				<p>
					<span className={style.bold}>Skype: </span> alex-trainer
				</p>
			</div>
			<div className={style.copyright}>
				<span>© 1997-2014 WebStore</span>
			</div>
		</div>
		<img className={style.marker} src='/src/assets/marker.png' alt='marker' />
	</footer>
)
