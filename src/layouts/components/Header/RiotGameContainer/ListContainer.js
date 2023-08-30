import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './RiotGameContainer.module.scss';

const cx = classNames.bind(styles);

function ListContainer({ ITEMS, handleChangeImage, handleUnMoutePreview }) {
    return (
        <div className={cx('list-item-block')}>
            <h1 className={cx('title')}>{ITEMS.title}</h1>
            <div className={cx('list')}>
                {ITEMS.data.map((item, index) => (
                    <a
                        key={index}
                        href="#"
                        className={cx('list-item')}
                        onMouseOver={() => handleChangeImage(item)}
                        onMouseOut={handleUnMoutePreview}
                    >
                        {item.title}
                    </a>
                ))}
            </div>
        </div>
    );
}

ListContainer.propTypes = {
    ITEMS: PropTypes.object.isRequired,
    handleChangeImage: PropTypes.func,
};

export default ListContainer;
