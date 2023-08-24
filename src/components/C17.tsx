import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import './C17.css';

const C17: React.FC = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [items, setItems] = useState([
		{ id: "item1", content: "Item 1"},
		{ id: "item2", content: "Item 2"},
	]);

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	const handleDragEnd = (result) => {
		if (!result.destination) {
			// The item was dropped outside of any valid droppable area
			return;
		}
	
		const updatedItems = [...items];
		const [movedItem] = updatedItems.splice(result.source.index, 1);
		updatedItems.splice(result.destination.index, 0, movedItem);
	
		setItems(updatedItems);
	}

	return (
		<div className="page-container">
			<div className={`sidebar &{sidebarOpen ? 'open' : ''}`}>
				<DragDropContext onDragEnd={handleDragEnd}>
					<Droppable droppableId="droppable">
						{(provided) => (
							<div
								{...provided.droppableProps}
								ref={provided.innerRef}
							>
								{items.map((item, index) => (
									<Draggable key={item.id} draggableId={item.id} index={index}>
										{(provided) => (
											<div
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
												className="draggable-item"
											>
												{item.content}
											</div>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</DragDropContext>
			</div>
			<div className="context">
				<button className="sidebar-toggle" onClick={toggleSidebar}>
					Medical Equipment
				</button>
				<div className="card">
					Image Goes Here
				</div>
			</div>
		</div>
	)
};

export default C17;