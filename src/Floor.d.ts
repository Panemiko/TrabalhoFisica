import type Room from './Room'

export default interface Floor {
    id: number
    name: string
    rooms: Room[]
}
