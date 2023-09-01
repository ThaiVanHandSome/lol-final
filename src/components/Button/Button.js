import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { POLYGON_FOUR_POINTS, POLYGON_SIX_POINTS } from '../Polygon';

const cx = classNames.bind(styles);

function Button({
    children,
    textColor = '#fff',
    borderColor = '#fff',
    bgColor = '#0BC6E3',
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
    const [hovering, setHovering] = useState(false);
    const borderRef = useRef(null);
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
    if (outline) {
        bgColor = 'transparent';
    }
    const styles = {
        color: textColor,
        backgroundColor: bgColor,
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

    const handelHover = () => {
        setHovering(true);
    };

    const handleNotHover = () => {
        setHovering(false);
    };

    useEffect(() => {
        // eslint-disable-next-line no-lone-blocks
        {
            !hovering
                ? ReactDOM.render(
                      <POLYGON_SIX_POINTS
                          type={{ haveOutline }}
                          width={borderRef.current.clientWidth}
                          height={borderRef.current.clientHeight}
                          color={borderColor}
                          borderWidth={outline ? 2 : 1}
                      />,
                      borderRef.current,
                  )
                : ReactDOM.render(
                      <POLYGON_FOUR_POINTS
                          width={borderRef.current.clientWidth}
                          height={borderRef.current.clientHeight}
                          color={borderColor}
                          borderWidth={outline ? 2 : 1}
                      />,
                      borderRef.current,
                  );
        }
    });

    return (
        <Comp className={classes} {...props} style={styles} onMouseOver={handelHover} onMouseOut={handleNotHover}>
            <span className={cx('content')}>{children}</span>
            {(outline || haveOutline) && (
                <div
                    ref={borderRef}
                    className={cx('border', {
                        borderOutline: outline,
                        borderHaveOutline: haveOutline,
                    })}
                >
                    {/* {!hovering && <POLYGON_SIX_POINTS width={borderRef.current.clientWidth} height={borderRef.current.clientHeight} color={borderColor} borderWidth={outline ? 2 : 1} />}
                    {hovering && <POLYGON_FOUR_POINTS width={borderRef.current.clientWidth} height={borderRef.current.clientHeight}color={borderColor} borderWidth={outline ? 2 : 1} />} */}
                </div>
            )}
        </Comp>
    );
}

export default Button;
