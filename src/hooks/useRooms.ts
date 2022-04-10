export default function useRooms(roomName: RoomsName) {
    return {
        name: roomName,
        images: `/${roomName}/`,
    }
}

export type RoomsName =
    | 'LIVING_ROOM'
    | 'DINING_ROOM'
    | 'KITCHEN'
    | 'PANTRY'
    | 'GARAGE'
    | 'BATHROOM1'
    | 'OFFICE'
    | 'BALCONY'
    | 'SUITE'
    | 'BEDROOM1'
    | 'BEDROOM2'
    | 'BATHROOM2'
