import React, {Component} from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Destination from './Destination';
import SearchBar from "./SearchBar";
import { Button } from 'reactstrap';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => {
    let obj = {
        // some basic styles to make the items look a bit nicer
        userSelect: 'none',
        padding: grid * 2,
        margin: `0 0 ${grid}px 0`,

        // change background colour if dragging
        background: isDragging ? '#C8B019' : 'white',

    };
    for (let key in draggableStyle) {
        if (draggableStyle.hasOwnProperty(key)){
            obj[key] = draggableStyle[key];
        }
    }
    return obj;
    // styles we need to apply on draggables
};

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightgrey' : '#A9DFBF',
    padding: grid,
    width: "auto",
});


export default class DestinationList extends Component {
    constructor(props) {
        super(props);
        this.props.trip.places
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.addDestination = this.addDestination.bind(this);
        this.removeDestination = this.removeDestination.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }


    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(
            this.props.trip.places,
            result.source.index,
            result.destination.index
        );

        this.props.updateTrip(Object.assign(
                {},
                this.props.trip,
                {map: ""},
                {places: items},
                {distances: []}
            )
        );
    }

    onUpdate(place, oldIndex, newIndex) {

    }

    addDestination(place) {
        this.props.updateTrip(Object.assign(
            {},
            this.props.trip,
            {places: this.props.trip.places.concat(place)}
            )
        );
    }

    removeDestination(place){
        let places = this.props.trip.places;
        let distances = this.props.trip.distances;
        let index;
        for (let i = 0; i < places.length; i++){
            if(place == places[i].name){
                index = i;
            }
        }
        places.splice(index, 1);
        distances.splice(index, 1);
        this.props.updateTrip(Object.assign(
            {},
            this.props.trip,
            {
                places: places,
                distances:distances
            }
            )
        );

    }

    renderItem(item, index) {
        return (
            <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                    <div>
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                            )}
                        >
                            {item.name}
                    <div className="btn pull-right">
                        <Button style={{backgroundColor:"#E25345"}} onClick={()=>this.removeDestination(item.name)}>Remove</Button>
                     </div>
                        </div>
                        {provided.placeholder}
                    </div>
                )}
            </Draggable>
        )
    };

    render() {
        return (
            <div>
                <SearchBar places={this.props.trip.places} addDestination={this.addDestination}/>
                <div className="pre-scrollable">
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}
                            >
                                {this.props.trip.places.map(this.renderItem)}

                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                </div>
            </div>
        );
    }
}

