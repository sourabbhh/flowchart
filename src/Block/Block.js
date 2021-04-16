import './block.scss';

export default function Block(props) {
	const { isDraggable, type } = props;
	const typeMap = {
		1: ['--yellow', 'Action 1'],
		2: ['--green', 'Action 2'],
		3: ['--red', 'Action 3'],
		4: ['--gray-dark', 'If/Else']
	}
	function drag(ev) {
		ev.dataTransfer.setData('typeData', type);
	}

	return (
		<div className={`workflow_card ${typeMap[type][0]}`} draggable={isDraggable} onDragStart={drag}>
			<div className={`bubble ${props.sidebar ? 'sidebar' : ''}`}>
				<p>{typeMap[type][1]}</p>
			</div>
		</div>
	)
}