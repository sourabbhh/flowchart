import './App.css';
import Block from './Block/Block'
import Adder from './Adder/Adder'
import { useEffect, useState } from 'react';
import SidebarActions from './SidebarActions/SidebarActions';
import Conditional from './Conditional/Conditional';

function App() {

	function retrieveFromStorage() {
		return JSON.parse(localStorage.getItem("data"));
	}

	const [data, changeData] = useState([]);
	const [firstRender, changefirstRender] = useState(true);

	useEffect(()=>{
		if(firstRender){
			changeData(retrieveFromStorage() || []);
			changefirstRender(false);
		}
		else{
			saveToStorage();
		}
	})

	function changeDataHandler(conditionPos, index, type) {
		changeData(data => updateData(data, conditionPos, index, type));
	}

	function saveToStorage() {
		localStorage.setItem("data", JSON.stringify(data));
	}

	function updateData(data, conditionPos, index, type) {
		if (conditionPos.length) {
			const [conditionType, conditionIndex] = conditionPos[0];
			return [
				...data.slice(0, conditionIndex),
				{
					...data[conditionIndex],
					[conditionType]: updateData(data[conditionIndex][conditionType], conditionPos.slice(1), index, type)
				},
				...data.slice(conditionIndex + 1)
			];
		}
		else {
			if (type == 4) {
				return [...data.slice(0, index), { if: data.slice(index), else: [] }];
			}
			else return [...data.slice(0, index), Number(type), ...data.slice(index)];
		}
	}

	function renderComp(data, conditionPos = []) {
		return (<>
			<Adder index={0} changeDataHandler={changeDataHandler} conditionPos={conditionPos} />
			{
				data.map((ele, i) => {
					if (typeof ele === "number") {
						return <>

							<Block type={ele} />
							<Adder index={i + 1} changeDataHandler={changeDataHandler} conditionPos={conditionPos} />

						</>
					}
					else {
						return (
							<Conditional element={ele} conditionPos={conditionPos} index={i} renderComp={renderComp} />
						)
					}
				})
			}
		</>
		)
	}
	
	return (
		<div className="container">
			<section>
					{renderComp(data)}
			</section>
			<SidebarActions />
		</div>
	)
}

export default App;
