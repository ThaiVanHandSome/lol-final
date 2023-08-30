import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ MENU_ITEMS }) {
    return (
        <div className={cx('wrapper')}>
            {MENU_ITEMS.map((item, index) => {
                const props = {
                    href: item.href,
                    to: item.to,
                };
                let Comp = 'div';
                if (item.href) {
                    Comp = 'a';
                } else if (item.to) {
                    Comp = Link;
                }
                return (
                    <div className={cx('menu-item-container')}>
                        <Comp key={index} {...props} className={cx('menu-item')}>
                            {item.content}
                        </Comp>
                    </div>
                );
            })}
        </div>
    );
}

Menu.propTypes = {
    MENU_ITEMS: PropTypes.array.isRequired,
};

export default Menu;
