import './style.css'
import React from 'react'
import type { Room } from '../../hooks/useRooms'

const RoomButton: React.FC<RoomButtonProps> = ({ onClick, room }) => {
    return <button onClick={() => onClick(room)}>{room.name}</button>
}

export type RoomButtonProps = {
    onClick(room: Room): any
    room: Room
}

export default RoomButton
