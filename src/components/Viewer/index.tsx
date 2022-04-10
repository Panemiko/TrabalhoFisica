import './style.sass'
import 'photo-sphere-viewer/src/styles/index.scss'
import React, { useEffect } from 'react'
import { CubemapAdapter } from 'photo-sphere-viewer/dist/adapters/cubemap'
import { Viewer as PSViewer } from 'photo-sphere-viewer'
import type Room from '../../Room'

const Viewer: React.FC<ViewerProps> = ({ room }) => {
    useEffect(() => {
        const viewer = document.getElementById('viewer')
        if (viewer?.hasChildNodes()) {
            viewer.innerHTML = ''
        }

        const roomId = room.id

        new PSViewer({
            adapter: CubemapAdapter,
            container: 'viewer',
            panorama: {
                left: `/${roomId}/left.png`,
                front: `/${roomId}/front.png`,
                right: `/${roomId}/right.png`,
                back: `/${roomId}/back.png`,
                top: `/${roomId}/top.png`,
                bottom: `/${roomId}/bottom.png`,
            },
            panoData: {
                fullWidth: 6000,
                fullHeight: 3000,
                croppedWidth: 4000,
                croppedHeight: 2000,
                croppedX: 1000,
                croppedY: 500,
                poseHeading: 270, // 0 to 360
                posePitch: 0, // -90 to 90
                poseRoll: 0, // -180 to 180
            },
            navbar: [],
        })
    })

    return <div id='viewer'></div>
}

export type ViewerProps = {
    room: Room
}

export default Viewer
