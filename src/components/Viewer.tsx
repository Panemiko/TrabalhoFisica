import { PROJECTION_TYPE, PanoViewer } from '@egjs/react-view360'
import React from 'react'

const Viewer: React.FC<ViewerProps> = ({ image }) => {
    return (
        <PanoViewer
            tag='div'
            image={image}
            useZoom={false}
            projectionType={PROJECTION_TYPE.CUBEMAP}
            cubemapConfig={{
                tileConfig: { flipHorizontal: true, rotation: 0 },
            }}
        />
    )
}

export type ViewerProps = {
    image: string
}

export default Viewer
