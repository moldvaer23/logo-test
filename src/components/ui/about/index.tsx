import { FC } from 'react'

import pencil from '@assets/pencil.png'
import camera from '@assets/camera.png'
import book from '@assets/note-book.png'

import style from './style.module.scss'

export const About: FC = () => (
	<section className={style.about}>
		<div className={style.info}>
			<h2>О компании</h2>
			<div className={style.text}>
				<p>
					<span className={style.bold}>Web</span>
					<span className={style.accent}>Store</span> — многопрофильная студия
					дизайна, основанная в 2006 году. За эти годы мы успели поработать в
					разных направлениях, реализовали множество проектов, достигли
					профессиональных высот и собрали внушительное портфолио. Сегодня мы
					сосредоточились на том, что нам по-настоящему нравится: дизайн и
					разработка веб-сайтов и мобильных приложений.
				</p>
				<p>
					Мы гордимся своей замечательной командой по-настоящему талантливых
					людей: дизайнеров, программистов, менеджеров, тестировщиков,
					проектировщиков. Все сотрудники{' '}
					<span className={style.bold}>Web</span>
					<span className={style.accent}>Store</span> работают в штате, поэтому
					мы гарантируем, что весь комплекс работ по разработке, созданию,
					поддержке и продвижению сайтов выполняется строго профессионально и
					качественно.
				</p>
				<p>
					Мы уверены, что хорошая, чёткая и последовательная разработка имеет
					большое значение для эффективного маркетинга. Поэтому предлагаем
					высококачественный дизайн, удобство и функциональность, адаптированные
					под каждого клиента в зависимости от его потребностей и поставленных
					бизнес-задач.
				</p>
			</div>
		</div>
		<div>
			<img src={camera} alt='camera' />
			<div className={style.bookImage}>
				<img src={book} alt='note-book' />
				<img src={pencil} alt='pencil' />
			</div>
		</div>
	</section>
)
