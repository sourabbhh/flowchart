import "./conditional.scss";
export default function Conditional(props) {
	const { element, index, renderComp, conditionPos } = props;
	return <div className="condition-container">
		<div className="if-split">
			{element.if && renderComp(element.if, [...conditionPos, ["if", index]])}
		</div>
		<div className="else-split">
			{element.else && renderComp(element.else, [...conditionPos, ["else", index]])}
		</div>
	</div>
}