import './style.sass'
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
            navbar: [],
            loadingImg: '',
            loadingTxt: '',
            defaultZoomLvl: 0,
        })
    })

    return <div id='viewer'></div>
}

export type ViewerProps = {
    room: Room
}

export default Viewer
