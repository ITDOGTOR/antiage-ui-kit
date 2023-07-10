import './SvgAssets.css';

import React from 'react';

import Activity from './Activity';
import ArrowHorizontal from './ArrowHorizontal';
import ArrowPointerHorizontal from './ArrowPointerHorizontal';
import ArrowPointerVertical from './ArrowPointerVertical';
import ArrowRoundedHorizontal from './ArrowRoundedHorizontal';
import ArrowRoundedVertical from './ArrowRoundedVertical';
import ArrowSquareHorizontal from './ArrowSquareHorizontal';
import ArrowSquareVertical from './ArrowSquareVertical';
import ArrowVertical from './ArrowVertical';
import Bag from './Bag';
import Bag2 from './Bag2';
import Bell from './Bell';
import Bookmark from './Bookmark';
import Buy from './Buy';
import Calendar from './Calendar';
import Call from './Call';
import CallActive from './CallActive';
import CallMissed from './CallMissed';
import CallMute from './CallMute';
import Camera from './Camera';
import CaretHorizontal from './CaretHorizontal';
import CaretVertical from './CaretVertical';
import Category from './Category';
import Chart from './Chart';
import Chat from './Chat';
import Check from './Check';
import CheckShield from './CheckShield';
import CheckSquare from './CheckSquare';
import ChevronHorizontal from './ChevronHorizontal';
import ChevronVertical from './ChevronVertical';
import Copy from './Copy';
import Cross from './Cross';
import CrossShield from './CrossShield';
import CrossSquare from './CrossSquare';
import Danger from './Danger';
import DangerRounded from './DangerRounded';
import Delete from './Delete';
import Discount from './Discount';
import Discovery from './Discovery';
import Document from './Document';
import Download from './Download';
import Edit from './Edit';
import EditSquare from './EditSquare';
import Email from './Email';
import Eye from './Eye';
import EyeClosed from './EyeClosed';
import Female from './Female';
import Filter from './Filter';
import Filter2 from './Filter2';
import Folder from './Folder';
import Game from './Game';
import Graph from './Graph';
import Heart from './Heart';
import Home from './Home';
import Image from './Image';
import Image2 from './Image2';
import InfoSquare from './InfoSquare';
import LayeredStar from './LayeredStar';
import Letter from './Letter';
import LinkAttachment from './LinkAttachment';
import Location from './Location';
import Lock from './Lock';
import Login from './Login';
import Logout from './Logout';
import Male from './Male';
import Minus from './Minus';
import MoreRounded from './MoreRounded';
import MoreSquare from './MoreSquare';
import Paper from './Paper';
import PaperDownload from './PaperDownload';
import PaperFail from './PaperFail';
import PaperMinus from './PaperMinus';
import PaperPlus from './PaperPlus';
import PaperUpload from './PaperUpload';
import Password from './Password';
import Phone from './Phone';
import Play from './Play';
import Plus from './Plus';
import PlusSquare from './PlusSquare';
import PointMinus from './PointMinus';
import PointPlus from './PointPlus';
import Refresh from './Refresh';
import ReportProblem from './ReportProblem';
import ReportProblemCircle from './ReportProblemCircle';
import Scan from './Scan';
import Search from './Search';
import Send from './Send';
import Settings from './Settings';
import Star from './Star';
import StarOutlined from './StarOutlined';
import Swap from './Swap';
import Sync from './Sync';
import SyncRounded from './SyncRounded';
import Ticket from './Ticket';
import TicketStar from './TicketStar';
import Time from './Time';
import TimeSquare from './TimeSquare';
import Unlock from './Unlock';
import Upload from './Upload';
import User from './User';
import UserGroup from './UserGroup';
import UserGroup2 from './UserGroup2';
import UserPlus from './UserPlus';
import Video from './Video';
import Voice from './Voice';
import Voice2 from './Voice2';
import VolumeLow from './VolumeLow';
import VolumeMax from './VolumeMax';
import VolumeMute from './VolumeMute';
import Wait from './Wait';
import Wallet from './Wallet';
import WhatsApp from './WhatsApp';
import Work from './Work';

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

			<div className="svg__container">
				<div className="svg-section__wrapper">
					<div className="svg-item">
						<ArrowVertical />
						ArrowVertical
					</div>

					<div className="svg-item">
						<ArrowHorizontal />
						ArrowHorizontal
					</div>

					<div className="svg-item">
						<ArrowSquareVertical />
						ArrowSquareVertical
					</div>

					<div className="svg-item">
						<ArrowSquareHorizontal />
						ArrowSquareHorizontal
					</div>

					<div className="svg-item">
						<ArrowRoundedVertical />
						ArrowRoundedVertical
					</div>

					<div className="svg-item">
						<ArrowRoundedHorizontal />
						ArrowRoundedHorizontal
					</div>

					<div className="svg-item">
						<ArrowPointerVertical />
						ArrowPointerVertical
					</div>

					<div className="svg-item">
						<ArrowPointerHorizontal />
						ArrowPointerHorizontal
					</div>

					<div className="svg-item">
						<ChevronVertical />
						ChevronVertical
					</div>

					<div className="svg-item">
						<ChevronHorizontal />
						ChevronHorizontal
					</div>

					<div className="svg-item">
						<CaretVertical />
						CaretVertical
					</div>

					<div className="svg-item">
						<CaretHorizontal />
						CaretHorizontal
					</div>
				</div>

				<div className="svg-section__wrapper">
					<div className="svg-item">
						<Plus />
						Plus
					</div>

					<div className="svg-item">
						<PlusSquare />
						PlusSquare
					</div>

					<div className="svg-item">
						<Check />
						Check
					</div>

					<div className="svg-item">
						<CheckSquare />
						CheckSquare
					</div>

					<div className="svg-item">
						<CheckShield />
						CheckShield
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
						<CrossSquare />
						CrossSquare
					</div>

					<div className="svg-item">
						<CrossShield />
						CrossShield
					</div>
				</div>

				<div className="svg-section__wrapper">
					<div className="svg-item">
						<Male />
						Male
					</div>

					<div className="svg-item">
						<Female />
						Female
					</div>

					<div className="svg-item">
						<Lock />
						Lock
					</div>

					<div className="svg-item">
						<Unlock />
						Unlock
					</div>

					<div className="svg-item">
						<Eye />
						Eye
					</div>

					<div className="svg-item">
						<EyeClosed />
						EyeClosed
					</div>

					<div className="svg-item">
						<Sync />
						Sync
					</div>

					<div className="svg-item">
						<SyncRounded />
						SyncRounded
					</div>

					<div className="svg-item">
						<Edit />
						Edit
					</div>

					<div className="svg-item">
						<EditSquare />
						EditSquare
					</div>

					<div className="svg-item">
						<ReportProblem />
						ReportProblem
					</div>

					<div className="svg-item">
						<ReportProblemCircle />
						ReportProblemCircle
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
						<Bag />
						Bag
					</div>

					<div className="svg-item">
						<Bag2 />
						Bag2
					</div>

					<div className="svg-item">
						<PointPlus />
						PointPlus
					</div>

					<div className="svg-item">
						<PointMinus />
						PointMinus
					</div>

					<div className="svg-item">
						<Voice />
						Voice
					</div>

					<div className="svg-item">
						<Voice2 />
						Voice2
					</div>

					<div className="svg-item">
						<Time />
						Time
					</div>

					<div className="svg-item">
						<TimeSquare />
						TimeSquare
					</div>

					<div className="svg-item">
						<Filter />
						Filter
					</div>

					<div className="svg-item">
						<Filter2 />
						Filter2
					</div>

					<div className="svg-item">
						<Ticket />
						Ticket
					</div>

					<div className="svg-item">
						<TicketStar />
						TicketStar
					</div>

					<div className="svg-item">
						<MoreRounded />
						MoreRounded
					</div>

					<div className="svg-item">
						<MoreSquare />
						MoreSquare
					</div>

					<div className="svg-item">
						<Danger />
						Danger
					</div>

					<div className="svg-item">
						<DangerRounded />
						DangerRounded
					</div>

					<div className="svg-item">
						<Login />
						Login
					</div>

					<div className="svg-item">
						<Logout />
						Logout
					</div>
				</div>

				<div className="svg-section__wrapper">
					<div className="svg-item">
						<WhatsApp />
						WhatsApp
					</div>

					<div className="svg-item">
						<Chat />
						Chat
					</div>

					<div className="svg-item">
						<Call />
						Call
					</div>

					<div className="svg-item">
						<CallActive />
						CallActive
					</div>

					<div className="svg-item">
						<CallMissed />
						CallMissed
					</div>

					<div className="svg-item">
						<CallMute />
						CallMute
					</div>

					<div className="svg-item">
						<Play />
						Play
					</div>

					<div className="svg-item">
						<VolumeMute />
						VolumeMute
					</div>

					<div className="svg-item">
						<VolumeLow />
						VolumeLow
					</div>

					<div className="svg-item">
						<VolumeMax />
						VolumeMax
					</div>
				</div>

				<div className="svg-section__wrapper">
					<div className="svg-item">
						<Document />
						Document
					</div>

					<div className="svg-item">
						<Paper />
						Paper
					</div>

					<div className="svg-item">
						<PaperPlus />
						PaperPlus
					</div>

					<div className="svg-item">
						<PaperMinus />
						PaperMinus
					</div>

					<div className="svg-item">
						<PaperDownload />
						PaperDownload
					</div>

					<div className="svg-item">
						<PaperUpload />
						PaperUpload
					</div>

					<div className="svg-item">
						<PaperFail />
						PaperFail
					</div>

					<div className="svg-item">
						<Activity />
						Activity
					</div>

					<div className="svg-item">
						<Folder />
						Folder
					</div>

					<div className="svg-item">
						<Chart />
						Chart
					</div>

					<div className="svg-item">
						<Image />
						Image
					</div>

					<div className="svg-item">
						<Image2 />
						Image2
					</div>
				</div>

				<div className="svg-section__wrapper">
					<div className="svg-item">
						<Refresh />
						Refresh
					</div>

					<div className="svg-item">
						<Wait />
						Wait
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
						LinkAttachment
					</div>

					<div className="svg-item">
						<LayeredStar />
						LayeredStar
					</div>

					<div className="svg-item">
						<Star />
						Star
					</div>

					<div className="svg-item">
						<StarOutlined />
						StarOutlined
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
						<Bell />
						Bell
					</div>

					<div className="svg-item">
						<Discovery />
						Discovery
					</div>

					<div className="svg-item">
						<Location />
						Location
					</div>

					<div className="svg-item">
						<Graph />
						Graph
					</div>

					<div className="svg-item">
						<Settings />
						Settings
					</div>

					<div className="svg-item">
						<Bookmark />
						Bookmark
					</div>

					<div className="svg-item">
						<Video />
						Video
					</div>

					<div className="svg-item">
						<Category />
						Category
					</div>

					<div className="svg-item">
						<Home />
						Home
					</div>

					<div className="svg-item">
						<Game />
						Game
					</div>

					<div className="svg-item">
						<User />
						User
					</div>

					<div className="svg-item">
						<UserPlus />
						UserPlus
					</div>

					<div className="svg-item">
						<UserGroup />
						UserGroup
					</div>

					<div className="svg-item">
						<UserGroup2 />
						UserGroup2
					</div>

					<div className="svg-item">
						<Discount />
						Discount
					</div>

					<div className="svg-item">
						<InfoSquare />
						InfoSquare
					</div>

					<div className="svg-item">
						<Password />
						Password
					</div>

					<div className="svg-item">
						<Swap />
						Swap
					</div>

					<div className="svg-item">
						<Work />
						Work
					</div>
				</div>
			</div>
		</div>
	);
}

export const Sandbox = Template.bind({});
