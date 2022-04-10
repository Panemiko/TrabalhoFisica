import './style.sass'
import React from 'react'
import type Room from '../../Room'

const RoomButton: React.FC<RoomButtonProps> = ({ onClick, room }) => {
    return (
        <button tabIndex={-1} onClick={() => onClick(room)}>
            <span className='name'>{room.name}</span>
        </button>
    )
}

export type RoomButtonProps = {
    onClick(room: Room): any
    room: Room
}

export default RoomButton
