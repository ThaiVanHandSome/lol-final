import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { POLYGON_FIVE_POINTS } from '~/components/Polygon';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Home() {
    const borderRef = useRef();

    // useEffect(() => {
    //     const ctx = canvasRef.current.getContext('2d');
    //     let cvsWidth = canvasRef.current.width;
    //     let cvsHeight = canvasRef.current.height;
    //     const points = [
    //         [0, 0],
    //         [97, 0],
    //         [100, 8],
    //         [100, 100],
    //         [0, 100],
    //     ];
    //     ctx.beginPath();
    //     for (let i = 0; i < points.length; i++) {
    //         if (i === 0) {
    //             ctx.moveTo(parseInt((cvsWidth * points[i][0]) / 100), parseInt((cvsHeight * points[i][1]) / 100));
    //         } else {
    //             ctx.lineTo(parseInt((cvsWidth * points[i][0]) / 100), parseInt((cvsHeight * points[i][1]) / 100));
    //         }
    //     }
    //     ctx.closePath();
    //     ctx.clip();
    //     ctx.strokeStyle = '#898989';
    //     ctx.lineWidth = 2;
    //     ctx.rect(0, 0, canvasRef.current.width, canvasRef.current.height);
    //     ctx.stroke();
    // }, []);

    useEffect(() => {
        ReactDOM.render(
            <POLYGON_FIVE_POINTS width={borderRef.current.clientWidth} height={borderRef.current.clientHeight} />,
            borderRef.current,
        );
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider')}>
                <div className={cx('foreground-wrapper')}>
                    {/* <div className={cx('border')}></div> */}
                    {/* <canvas
                        className={cx('border')}
                        width="1726"
                        height="652"
                    ></canvas> */}
                    {/* <div className={cx('border')}></div> */}
                    {/* <canvas ref={canvasRef} className={cx('border')}></canvas> */}
                    <div ref={borderRef} className={cx('border')}></div>
                    <div className={cx('logo-container')}>
                        <img className={cx('logo')} src={require('~/asset/images/logos/lol-large.png')} alt="logo" />
                    </div>
                    <video
                        className={cx('foreground-wrapper-video')}
                        src={require('~/asset/videos/video-slider.webm')}
                        type="video/webm"
                        autoPlay
                        muted
                        loop
                    />
                </div>
                <div className={cx('background-wrapper')}>
                    <div className={cx('background-wrapper-overlay')}>
                        <img
                            className={cx('background-wrapper-overlay-image')}
                            src={require('~/asset/images/overlays/slider-background-wrapper.jpg')}
                            alt="overlay"
                        />
                    </div>
                    <video
                        className={cx('background-wrapper-video')}
                        src={require('~/asset/videos/video-slider.webm')}
                        type="video/webm"
                        autoPlay
                        muted
                        loop
                    />
                </div>
            </div>
            <div className={cx('container')}>
                <Button haveOutline borderColor="#BFBDBF">
                    CHƠI MIỄN PHÍ
                </Button>
            </div>
        </div>
    );
}

export default Home;
