import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    textColor = '#fff',
    borderColor = '#fff',
    backgroundColor = 'rgb(11, 198, 227);',
    primary,
    outline,
    haveOutline,
    to,
    href,
    disable,
    small,
    medium,
    large,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        ...passProps,
    };
    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }
    return <div className={cx('wrapper')} {...props}></div>;
}

export default Button;
