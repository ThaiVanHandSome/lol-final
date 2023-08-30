import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider')}>
                <div className={cx('foreground-wrapper')}>
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
            <div className={cx('container')}></div>
        </div>
    );
}

export default Home;
