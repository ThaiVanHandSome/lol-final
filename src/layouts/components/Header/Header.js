import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import routes from '~/configs/routes';

import { RiotLogo, LOLSmallLogo } from '~/asset/images/logos';
import { ArrowIcon, ArrowIconHaveRadius, LinkIcon, SearchIcon, GlobalIcon } from '~/Icons';
import Menu from '~/components/Menu';
import NewList from './NewList';
import RiotGameContainer from './RiotGameContainer';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [open, setOpen] = useState(false);
    return (
        <div className={cx('wrapper')}>
            {open && (
                <div className={cx('riot-game-container')}>
                    <RiotGameContainer setOpen={setOpen} />
                </div>
            )}
            <div className={cx('riotbar-left-content')}>
                <div className={cx('riot-logo-container')} onClick={() => setOpen(true)}>
                    <div className={cx('riot-logo')}>
                        <RiotLogo />
                    </div>
                    <div className={cx('riot-logo-arrow')}>
                        <ArrowIconHaveRadius />
                    </div>
                </div>
                <Link to={routes.home} className={cx('lol-logo')}>
                    <LOLSmallLogo />
                </Link>
                <ul className={cx('list-nav')}>
                    <li className={cx('nav-item')}>
                        <Link to={routes.game} className={cx('nav-item-local-link')}>
                            Trò chơi
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to={routes.champion} className={cx('nav-item-local-link')}>
                            Tướng
                        </Link>
                    </li>
                    <Tippy
                        interactive
                        placement="bottom-start"
                        offset={[0, 12]}
                        render={(attrs) => <Menu MENU_ITEMS={NewList} />}
                    >
                        <li className={cx('nav-item')}>
                            <span>Tin tức</span>
                            <ArrowIcon />
                        </li>
                    </Tippy>
                    <li className={cx('nav-item')}>
                        <Link to={routes.updateDetail} className={cx('nav-item-local-link')}>
                            Chi tiết cập nhật
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <a href="https://lolesports.com/schedule" className={cx('nav-item-link')}>
                            <span>ESPORTS</span>
                            <LinkIcon className={cx('link-icon')} />
                        </a>
                    </li>
                    <li className={cx('nav-item')}>
                        <a href="https://universe.leagueoflegends.com/vn_VN/" className={cx('nav-item-link')}>
                            <span>VŨ TRỤ</span>
                            <LinkIcon className={cx('link-icon')} />
                        </a>
                    </li>
                    <li className={cx('nav-item')}>
                        <a href="https://support.riotgames.com/hc/vi" className={cx('nav-item-link')}>
                            <span>HỖ TRỢ</span>
                            <LinkIcon className={cx('link-icon')} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className={cx('riotbar-right-content')}>
                <div className={cx('search-container')}>
                    <SearchIcon />
                </div>
                <div className={cx('select-language')}>
                    <GlobalIcon />
                </div>
                <Link to={routes.login} className={cx('btn-sign-in')}>
                    ĐĂNG NHẬP
                </Link>
                <a className={cx('btn-playing')}>CHƠI NGAY</a>
            </div>
        </div>
    );
}

export default Header;
