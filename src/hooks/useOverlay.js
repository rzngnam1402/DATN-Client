import { useState } from 'react';

export function useOverlay() {
    const [overlay, setOverlay] = useState(null);

    function hdStopDrag(e, data) {
        let { x, y } = data;
        setOverlay((pValue) => ({ ...pValue, x, y }));
    }

    function hdStopResize(e, direction, ref, delta, position) {
        const w = ref.style.width;
        const h = ref.style.height;
        const width = typeof w === 'number' ? w : Number(w.split('px')[0]);
        const height = typeof h === 'number' ? h : Number(h.split('px')[0]);
        setOverlay((pValue) => ({ ...pValue, width, height, x: position.x, y: position.y }));
    }

    function hdAddOverlay(_overlay) {
        setOverlay(_overlay);
    }

    function hdRemoveOverlay() {
        setOverlay(null);
    }

    return { overlay, setOverlay, hdStopDrag, hdStopResize, hdAddOverlay, hdRemoveOverlay };
}

export const style = {
    zIndex: '999',
    border: 'solid 2px #539BFF',
    borderRadius: '4px',
    justifyContent: 'center',
    display: 'flex',
};
