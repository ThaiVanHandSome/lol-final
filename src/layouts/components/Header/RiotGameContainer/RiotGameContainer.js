import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './RiotGameContainer.module.scss';
import { RiotLogo } from '~/asset/images/logos';
import { CloseIcon, ArrowIconHaveRadius } from '~/Icons';
import { GAMES, FORCES, ESPORTS, ENTERTAINMENTS, BUSINESS } from './data';
import ListContainer from './ListContainer';
import Preview from './Preview';

const cx = classNames.bind(styles);

function RiotGameContainer({ setOpen }) {
    const [itemPreview, setItemPreview] = useState(null);

    const handleChangeImage = (data) => {
        setItemPreview(data);
    };

    const handleUnMoutePreview = () => {
        setItemPreview(null);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('riot-logo-container')}>
                    <div className={cx('riot-logo')} onClick={() => setOpen(false)}>
                        <RiotLogo />
                    </div>
                    <div className={cx('riot-logo-arrow')}>
                        <ArrowIconHaveRadius />
                    </div>
                </div>
                <div className={cx('btn-close')} onClick={() => setOpen(false)}>
                    <CloseIcon />
                </div>
            </div>
            <div className={cx('content')}>
                <div className={cx('list-item-container')}>
                    <div className={cx('list-items')}>
                        <ListContainer
                            ITEMS={GAMES}
                            handleChangeImage={handleChangeImage}
                            handleUnMoutePreview={handleUnMoutePreview}
                        />
                    </div>
                    <div className={cx('list-items')}>
                        <ListContainer
                            ITEMS={FORCES}
                            handleChangeImage={handleChangeImage}
                            handleUnMoutePreview={handleUnMoutePreview}
                        />
                        <ListContainer
                            ITEMS={ESPORTS}
                            handleChangeImage={handleChangeImage}
                            handleUnMoutePreview={handleUnMoutePreview}
                        />
                    </div>
                    <div className={cx('list-items')}>
                        <ListContainer
                            ITEMS={ENTERTAINMENTS}
                            handleChangeImage={handleChangeImage}
                            handleUnMoutePreview={handleUnMoutePreview}
                        />
                        <ListContainer
                            ITEMS={BUSINESS}
                            handleChangeImage={handleChangeImage}
                            handleUnMoutePreview={handleUnMoutePreview}
                        />
                    </div>
                </div>
                <div className={cx('container-right')}>
                    {itemPreview && <Preview item={itemPreview} />}
                    {!itemPreview && (
                        <div className={cx('default-content-right')}>
                            <a href="#" className={cx('default-block')}>
                                <img
                                    className={cx('default-background')}
                                    src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt2969e05afbda6333/638fe791e133455e0fe8e041/LoR_6E_DS_WorldEnder_Riot_BarApplicationSwitcher_PromoCards_(660x428)_V2.jpg??&format=pjpg&quality=85"
                                    alt="background"
                                />
                                <p className={cx('default-content')}>
                                    Bản Mở Rộng Huyền Thoại Runeterra Mới - Trường Ca Darkin: Chiến Binh Tận Thế
                                </p>
                            </a>
                            <a href="#" className={cx('default-block')}>
                                <img
                                    className={cx('default-background')}
                                    src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/bltc9637bfbdae4ff91/649b449305ac38d3b5aebb85/LLoR_7B2023_HotH_RiotBarApplicationSwitcher_660x428.jpg??&format=pjpg&quality=85"
                                    alt="background"
                                />
                                <p className={cx('default-content')}>
                                    Bản Mở Rộng Huyền Thoại Runeterra Mới - Trái Tim Thợ Săn
                                </p>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default RiotGameContainer;
