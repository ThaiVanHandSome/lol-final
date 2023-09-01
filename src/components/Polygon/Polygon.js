export const POLYGON_FOUR_POINTS = ({ width, height, color, borderWidth = 1 }) => {
    console.log(width);
    console.log(height);
    const points = [
        [0.5, 3],
        [100, 3],
        [100, 100],
        [0.5, 100],
    ];
    var p = '';
    let XMax = -1;
    let YMax = -1;
    for (let i = 0; i < points.length; i++) {
        const vX = Number.parseInt((points[i][0] * width) / 100);
        const vY = Number.parseInt((points[i][1] * height) / 100);
        XMax = Math.max(XMax, vX);
        YMax = Math.max(YMax, vY);
        p += `${vX},${vY} `;
    }
    console.log(p);
    return (
        <svg
            width={width + 2}
            height={height + 1}
            style={{
                position: 'absolute',
                top: '0',
                left: '0',
            }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <polygon points={p} stroke={color} strokeWidth={borderWidth} />
        </svg>
    );
};

export const POLYGON_FIVE_POINTS = ({ width, height }) => {
    console.log(width);
    console.log(height);
    const points = [
        [0.1, 0.2],
        [97.1, 0.2],
        [100.1, 8.1],
        [100.1, 100.1],
        [0.1, 100.1],
    ];
    var p = '';
    let XMax = -1;
    let YMax = -1;
    for (let i = 0; i < points.length; i++) {
        const vX = parseInt((points[i][0] * width) / 100);
        const vY = parseInt((points[i][1] * height) / 100);
        XMax = Math.max(XMax, vX);
        YMax = Math.max(YMax, vY);
        p += `${vX},${vY} `;
    }
    console.log(p);
    return (
        <svg
            width={width + 10}
            height={height + 10}
            style={{
                position: 'absolute',
                top: '0',
                left: '0',
            }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <polygon points={p} stroke="#BFBDBF" strokeWidth={1} />
        </svg>
    );
};

export const POLYGON_SIX_POINTS = ({ width, height, color, borderWidth = 1, type }) => {
    console.log(width);
    console.log(height);
    let points = [
        [6, 3],
        [100, 3],
        [100, 76],
        [94, 100],
        [0.5, 100],
        [0.5, 24],
    ];
    console.log(type);
    if (type.haveOutline) {
        points = [
            [10, 3],
            [100, 3],
            [100, 66],
            [90, 100],
            [0.5, 100],
            [0.5, 34],
        ];
    }
    var p = '';
    let XMax = -1;
    let YMax = -1;
    for (let i = 0; i < points.length; i++) {
        const vX = Number.parseInt((points[i][0] * width) / 100);
        const vY = Number.parseInt((points[i][1] * height) / 100);
        XMax = Math.max(XMax, vX);
        YMax = Math.max(YMax, vY);
        p += `${vX},${vY} `;
    }
    console.log(p);
    return (
        <svg
            width={width + 2}
            height={height + 1}
            style={{
                position: 'absolute',
                top: '0',
                left: '0',
            }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <polygon points={p} stroke={color} strokeWidth={borderWidth} />
        </svg>
    );
};
