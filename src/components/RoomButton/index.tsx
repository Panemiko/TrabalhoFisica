import './style.css'
import React from 'react'
import type { Room } from '../../hooks/useRooms'

const RoomButton: React.FC<RoomButtonProps> = ({ onClick, room }) => {
    return (
        <button tabIndex={-1} onClick={() => onClick(room)}>
            <span className='name'>{room.name}</span>
            <span className='floor'>{room.floor}</span>
        </button>
    )
}

export type RoomButtonProps = {
    onClick(room: Room): any
    room: Room
}

export default RoomButton
