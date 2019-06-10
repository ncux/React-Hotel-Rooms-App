import React, { Component } from 'react'
import items from './data';


const RoomContext = React.createContext();

const RoomConsumer = RoomContext.Consumer;


class RoomProvider extends Component {

    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    };

    componentDidMount() {
        let rooms = this.formatData(items);
        console.log(rooms);
    }

    formatData(shit) {
        let items = shit.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = { ...item.fields, images, id };
            return room;
        })
        return items;
    }

    render() {
        return (
            <RoomContext.Provider value={ {...this.state} } >
                { this.props.children }

            </RoomContext.Provider>
        )
    }
}


export { RoomProvider, RoomContext, RoomConsumer }