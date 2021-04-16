import './adder.scss';
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function Adder(props) {
	const { conditionPos, index } = props

	function allowDrop(ev) {
		ev.preventDefault();
	}

	function drop(ev) {
		const type = ev.dataTransfer.getData('typeData');
		props.changeDataHandler(conditionPos, index, type);
	}

	return <div className="workflow-adder" onDragOver={allowDrop} onDrop={drop}>
		<div className="adder">
			<AddCircleIcon />
		</div>
	</div>
}
