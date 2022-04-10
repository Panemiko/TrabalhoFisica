import './App.sass'
import React, { useState } from 'react'
import RoomButton from './components/RoomButton'
import Viewer from './components/Viewer'
import floors from '../FLOORS.json'

function App() {
    const [room, setRoom] = useState(floors[0].rooms[0])

    return (
        <div className='main'>
            <div className='menu'>
                {floors.map((floor) => {
                    return (
                        <React.Fragment key={floor.id}>
                            <span className='floorName'>{floor.name}</span>
                            <div className='floorRooms'>
                                {floor.rooms.map((room) => {
                                    return (
                                        <RoomButton
                                            key={room.id}
                                            room={room}
                                            onClick={setRoom}
                                        />
                                    )
                                })}
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
            <div>
                <Viewer room={room} />
            </div>
        </div>
    )
}

export default App
