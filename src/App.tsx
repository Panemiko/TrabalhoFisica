import './App.css'
import React from 'react'
import RoomButton from './components/RoomButton'
import Viewer from './components/Viewer'
import rooms from '../ROOMS.json'

function App() {
    return (
        <React.Fragment>
            <div className='.menu'>
                {rooms.map((room) => {
                    return (
                        <RoomButton
                            key={room.id}
                            room={room}
                            onClick={(room) => console.log(room.name)}
                        />
                    )
                })}
            </div>
            <div>{/* <Viewer room={'BALCONY'} /> */}</div>
        </React.Fragment>
    )
}

export default App
