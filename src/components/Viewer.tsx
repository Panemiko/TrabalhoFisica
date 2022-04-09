import { PROJECTION_TYPE, PanoViewer } from '@egjs/react-view360'
import React from 'react'
import type { RoomsName } from '../hooks/useRooms'
import useRooms from '../hooks/useRooms'

const Viewer: React.FC<ViewerProps> = ({ room }) => {
    return (
        <PanoViewer
            tag='div'
            image={useRooms(room).image}
            useZoom={false}
            projectionType={PROJECTION_TYPE.CUBEMAP}
            cubemapConfig={{
                tileConfig: { flipHorizontal: true, rotation: 0 },
            }}
        />
    )
}

export type ViewerProps = {
    room: RoomsName
}

export default Viewer
