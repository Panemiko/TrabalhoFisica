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
                left: `/${roomId}/panorama_0.png`,
                front: `/${roomId}/panorama_1.png`,
                right: `/${roomId}/panorama_2.png`,
                back: `/${roomId}/panorama_3.png`,
                top: `/${roomId}/panorama_4.png`,
                bottom: `/${roomId}/panorama_5.png`,
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
