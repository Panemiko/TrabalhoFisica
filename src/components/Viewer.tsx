import { PROJECTION_TYPE, PanoViewer } from '@egjs/react-view360'
import React from 'react'
import type { RoomsName } from '../hooks/useRooms'
import useRooms from '../hooks/useRooms'

const Viewer: React.FC<ViewerProps> = ({ room }) => {
    return (
        <PanoViewer
            tag='div'
            image={useRooms(room).image}
            projectionType={PROJECTION_TYPE.CUBESTRIP}
            height={1000}
            width={1000}
            useKeyboard={true}
            onReady={() => console.log('Viewer ready')}
        />
    )
}

export type ViewerProps = {
    room: RoomsName
}

export default Viewer
