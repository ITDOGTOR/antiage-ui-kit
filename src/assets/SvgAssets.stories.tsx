import './SvgAssets.css';

import React from 'react';

import ArrowHorizontal from './ArrowHorizontal';
import ArrowSquareHorizontal from './ArrowSquareHorizontal';
import ArrowSquareVertical from './ArrowSquareVertical';
import ArrowVertical from './ArrowVertical';
import Bag from './Bag';
import Bell from './Bell';
import Buy from './Buy';
import Calendar from './Calendar';
import Call from './Call';
import Camera from './Camera';
import CaretHorizontal from './CaretHorizontal';
import CaretVertical from './CaretVertical';
import Chat from './Chat';
import Check from './Check';
import ChevronHorizontal from './ChevronHorizontal';
import ChevronVertical from './ChevronVertical';
import Copy from './Copy';
import Cross from './Cross';
import Delete from './Delete';
import Document from './Document';
import Download from './Download';
import Edit from './Edit';
import Email from './Email';
import Eye from './Eye';
import EyeClosed from './EyeClosed';
import Female from './Female';
import Heart from './Heart';
import LayeredStar from './LayeredStar';
import Letter from './Letter';
import LinkAttachment from './LinkAttachment';
import Lock from './Lock';
import Male from './Male';
import Minus from './Minus';
import Phone from './Phone';
import Plus from './Plus';
import PointMinus from './PointMinus';
import PointPlus from './PointPlus';
import Refresh from './Refresh';
import ReportProblem from './ReportProblem';
import ReportProblemCircle from './ReportProblemCircle';
import Scan from './Scan';
import Search from './Search';
import Send from './Send';
import Star from './Star';
import Sync from './Sync';
import SyncRounded from './SyncRounded';
import Upload from './Upload';
import Wait from './Wait';
import Wallet from './Wallet';
import WhatsApp from './WhatsApp';

export default {
	title: 'SvgAssets',
	component: <div />,
};

function Template() {
	return (
		<div className="svg-template">
			<h2>Памятка</h2>
			<ul>
				<li>
					Название под svg это название компонента: <code>ArrowHorizontal</code>
				</li>
				<li>
					Цвет работает через <code>currentColor</code>
				</li>
				<li>
					Элементы с несколькими составляющими, которые меняются по-разному, имеют <code>data-svg</code> с разным
					значением для доступа
				</li>
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
					<ArrowVertical />
					Arrow Vertical
				</div>

				<div className="svg-item">
					<ArrowHorizontal />
					Arrow Horizontal
				</div>

				<div className="svg-item">
					<ArrowSquareVertical />
					Arrow Square Vertical
				</div>

				<div className="svg-item">
					<ArrowSquareHorizontal />
					Arrow Square Horizontal
				</div>

				<div className="svg-item">
					<ChevronVertical />
					Chevron Vertical
				</div>

				<div className="svg-item">
					<ChevronHorizontal />
					Chevron Horizontal
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
					<Wait />
					Wait
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

				<div className="svg-item">
					<ReportProblemCircle />
					Report Problem Circle
				</div>

				<div className="svg-item">
					<Edit />
					Edit
				</div>

				<div className="svg-item">
					<Copy />
					Copy
				</div>

				<div className="svg-item">
					<Delete />
					Delete
				</div>

				<div className="svg-item">
					<Search />
					Search
				</div>

				<div className="svg-item">
					<Send />
					Send
				</div>

				<div className="svg-item">
					<Buy />
					Buy
				</div>

				<div className="svg-item">
					<Call />
					Call
				</div>

				<div className="svg-item">
					<WhatsApp />
					Whats App
				</div>

				<div className="svg-item">
					<Chat />
					Chat
				</div>

				<div className="svg-item">
					<Document />
					Document
				</div>

				<div className="svg-item">
					<Email />
					Email
				</div>

				<div className="svg-item">
					<Phone />
					Phone
				</div>

				<div className="svg-item">
					<Wallet />
					Wallet
				</div>

				<div className="svg-item">
					<Heart />
					Heart
				</div>

				<div className="svg-item">
					<LinkAttachment />
					Link Attachment
				</div>

				<div className="svg-item">
					<LayeredStar />
					Layered Star
				</div>

				<div className="svg-item">
					<Star />
					Star
				</div>

				<div className="svg-item">
					<Upload />
					Upload
				</div>

				<div className="svg-item">
					<Download />
					Download
				</div>

				<div className="svg-item">
					<Camera />
					Camera
				</div>

				<div className="svg-item">
					<Scan />
					Scan
				</div>

				<div className="svg-item">
					<Bag />
					Bag
				</div>

				<div className="svg-item">
					<Bell />
					Bell
				</div>

				<div className="svg-item">
					<PointPlus />
					Point Plus
				</div>

				<div className="svg-item">
					<PointMinus />
					Point Minus
				</div>
			</div>
		</div>
	);
}

export const Sandbox = Template.bind({});
