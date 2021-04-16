import Block from "../Block/Block";
import "./sidebar.scss";

export default function SidebarActions() {
	return <aside>
		<span>Actions</span>
		<Block type={1} isDraggable sidebar/>
		<Block type={2} isDraggable sidebar/>
		<Block type={3} isDraggable sidebar/>
		<span>Conditions</span>
		<Block type={4} isDraggable />
	</aside>

}