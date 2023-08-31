import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    children,
    textColor = '#fff',
    borderColor = '#fff',
    backgroundColor = '#0BC6E3',
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
    const styles = {
        color: textColor,
        backgroundColor: backgroundColor,
    };

    const classes = cx('wrapper', {
        primary,
        outline,
        haveOutline,
        small,
        medium,
        large,
        disable,
    });
    return (
        <Comp className={classes} {...props} style={styles}>
            {children}
        </Comp>
    );
}

export default Button;
