import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './RiotGameContainer.module.scss';
import { WindowIcon, MobileIcon } from '~/Icons';

const cx = classNames.bind(styles);

function Preview({ item }) {
    return (
        <div className={cx('preview')}>
            <img className={cx('preview-background')} src={item.background} alt="background" />
            <div className={cx('preview-info')}>
                <div className={cx('preview-info-container')}>
                    <div className={cx('logo-container')}>
                        {item.logo.includes('/') && <img className={cx('logo')} src={item.logo} alt="logo" />}
                        {!item.logo.includes('/') && <h1 className={cx('logo-text')}>{item.logo}</h1>}
                    </div>
                    <div className={cx('preview-content')}>{item.content}</div>
                    {(item.window || item.mobile) && (
                        <div className={cx('platforms')}>
                            {item.window && (
                                <div className={cx('platforms-icon')}>
                                    <WindowIcon />
                                </div>
                            )}
                            {item.mobile && (
                                <div className={cx('platforms-icon')}>
                                    <MobileIcon />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

Preview.propTypes = {
    item: PropTypes.object.isRequired,
};

export default Preview;
