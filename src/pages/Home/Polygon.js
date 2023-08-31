export const POLYGON_FIVE_POINTS = ({ width = 1310, height = 516 }) => {
    console.log(width);
    console.log(height);
    const points = [
        [0.5, 0.5],
        [97.5, 0.5],
        [100.5, 8.5],
        [100.5, 100.5],
        [0.5, 100.5],
    ];
    var p = '';
    for (let i = 0; i < points.length; i++) {
        const vX = parseInt((points[i][0] * width) / 100);
        const vY = parseInt((points[i][1] * height) / 100);
        p += `${vX},${vY} `;
    }
    console.log(p);
    return (
        <svg width={width + 100} height={height + 100} fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points={p} stroke="#ccc" strokeWidth={1} />
        </svg>
    );
};