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
                <a
                    href={
                        // eslint-disable-next-line max-len
                        'https://docs.google.com/document/d/1YcV6RVBIqjU8CgGzx5xw9kOg6Ciyse2WaH88_8BMTuM/edit?usp=sharing'
                    }
                    target='_blank'
                    rel='noreferrer'
                >
                    Trabalho Escrito
                </a>
                <hr />
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
