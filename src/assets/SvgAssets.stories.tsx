import './SvgAssets.css';

import React from 'react';

import Calendar from './Calendar';
import CaretHorizontal from './CaretHorizontal';
import CaretVertical from './CaretVertical';
import Check from './Check';
import ChevronHorizontal from './ChevronHorizontal';
import ChevronVertical from './ChevronVertical';
import Cross from './Cross';
import Eye from './Eye';
import EyeClosed from './EyeClosed';
import Female from './Female';
import Letter from './Letter';
import Lock from './Lock';
import Male from './Male';
import Minus from './Minus';
import Plus from './Plus';
import Refresh from './Refresh';
import ReportProblem from './ReportProblem';
import Sync from './Sync';
import SyncRounded from './SyncRounded';

export default {
	title: 'SvgAssets',
	component: <div />,
};

function Template() {
	return (
		<div>
			<h2>Памятка</h2>
			<ul>
				<li>
					Цвет работает через <code>currentColor</code>
				</li>
				<li>Элементы с несколькими составляющими, которые меняются по-разному, имеют дата-атрибуты для доступа</li>
				<li>
					Для увеличения жирности, использовать свойство <code>stroke-width: 1.4</code>
				</li>
				<li>
					Для создания стрелок с острыми концами использовать <code>stroke-linecap</code>, <code>stroke-linejoin</code>{' '}
					со значением <code>butt</code> на конкретном элементе (path, polygon и прочее)
				</li>
			</ul>

			<div className="svg-wrapper">
				<div className="svg-item">
					<ChevronVertical />
					Arrow Vertical
				</div>

				<div className="svg-item">
					<ChevronHorizontal />
					Arrow Horizontal
				</div>

				<div className="svg-item">
					<CaretVertical />
					Caret Vertical
				</div>

				<div className="svg-item">
					<CaretHorizontal />
					Caret Horizontal
				</div>

				<div className="svg-item">
					<Sync />
					Sync
				</div>

				<div className="svg-item">
					<SyncRounded />
					Sync Rounded
				</div>

				<div className="svg-item">
					<Refresh />
					Refresh
				</div>

				<div className="svg-item">
					<Plus />
					Plus
				</div>

				<div className="svg-item">
					<Minus />
					Minus
				</div>

				<div className="svg-item">
					<Cross />
					Cross
				</div>

				<div className="svg-item">
					<Check />
					Check
				</div>

				<div className="svg-item">
					<Male />
					Male
				</div>

				<div className="svg-item">
					<Female />
					Female
				</div>

				<div className="svg-item">
					<Calendar />
					Calendar
				</div>

				<div className="svg-item">
					<Letter />
					Letter
				</div>

				<div className="svg-item">
					<Lock />
					Lock
				</div>

				<div className="svg-item">
					<Eye />
					Eye
				</div>

				<div className="svg-item">
					<EyeClosed />
					Eye Closed
				</div>

				<div className="svg-item">
					<ReportProblem />
					Report Problem
				</div>
			</div>
		</div>
	);
}

export const Sandbox = Template.bind({});
