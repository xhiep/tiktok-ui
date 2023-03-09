import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import { useEffect, useState } from 'react';
import config from '~/config';
import {
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    UserActiveGroupIcon,
    UserGroupIcon,
} from '~/components/Icon';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userService from '~/Service/userService';
import LoginTog from './LoginTog';
import Discover from './Discover';
import { EffectIcon } from '~/components/Icon';
import Scrollbars from 'react-custom-scrollbars';
import { useCallback } from 'react';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;

function Sidebar() {
    const [page, setPage] = useState(INIT_PAGE);
    const [perPage, setPerPage] = useState(5);
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        userService.getSuggested({ page, perPage }).then((data) => {
            setSuggestedUsers((prevUsers) => [...prevUsers, ...data]);
        });
    }, [page, perPage]);

    const handleSeeAll = useCallback(() => {
        setPage((prev) => prev + 1);
        setPerPage(10);
        setShowMore(true);
    }, []);
    const handleSeeLess = () => {
        setShowMore(false);
        setSuggestedUsers((prev) => prev.slice(0, 5));
    };

    return (
        <aside className={cx('wrapper')}>
            <div className={cx('inner-fixed')}>
                <Scrollbars
                    className={cx('scroll')}
                    autoHide
                    autoHideTimeout={100}
                    renderThumbVertical={({ style, ...props }) => (
                        <div
                            {...props}
                            style={{
                                ...style,
                                height: '40px',
                                backgroundColor: 'rgba(22, 24, 35, 0.06)',
                                borderRadius: '4px',
                                transform:
                                    'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1) scale(5.30328) translateZ(-4.30328px) translateZ(-2px)',
                                transition: 'opacity .5s',
                                padding: '0 4px',
                            }}
                        />
                    )}
                    renderTrackVertical={({ style, ...props }) => (
                        <div
                            {...props}
                            style={{
                                ...style,
                                position: 'absolute',
                                width: '6px',
                                backgroundColor: 'transparent',
                                borderRadius: '4px',
                                right: '0',
                                bottom: '0',
                                top: '0',
                                zIndex: '1',
                            }}
                        />
                    )}
                >
                    <Menu>
                        <MenuItem
                            title="For You"
                            to={config.routes.home}
                            icon={<HomeIcon />}
                            activeIcon={<HomeActiveIcon />}
                        />
                        <MenuItem
                            title="Following"
                            to={config.routes.following}
                            icon={<UserGroupIcon />}
                            activeIcon={<UserActiveGroupIcon />}
                        />
                        <MenuItem
                            title="LIVE"
                            to={config.routes.live}
                            icon={<LiveIcon />}
                            activeIcon={<LiveActiveIcon />}
                        />

                        <LoginTog />
                        <SuggestedAccounts
                            label="Suggested accounts"
                            data={suggestedUsers}
                            onSeeAll={handleSeeAll}
                            showMore={showMore}
                            onSeeLess={handleSeeLess}
                        />
                        <Discover />

                        <div className={cx('footer')}>
                            <div className={cx('wrapper-img')}>
                                <p className={cx('wrapper-title')}>
                                    <EffectIcon className={cx('icon')} />
                                    <p className={cx('title')}>Create effects</p>
                                </p>
                            </div>
                        </div>
                        <div className={cx('linker')}>
                            <p className={cx('link-container')}>
                                <a target={'_blank'} href="/" className={cx('crt')}>
                                    About
                                </a>
                                <a target={'_blank'} href="/" className={cx('crt')}>
                                    Newsroom
                                </a>
                                <a target={'_blank'} href="/" className={cx('crt')}>
                                    Contact
                                </a>
                                <a target={'_blank'} href="/" className={cx('crt')}>
                                    Careers
                                </a>
                                <a target={'_blank'} href="/" className={cx('crt')}>
                                    ByteDance
                                </a>
                            </p>
                        </div>
                        <div className={cx('linker')}>
                            <p className={cx('link-container')}>
                                <a target={'_blank'} href="/" className={cx('crt')}>
                                    Tiktok for Good
                                </a>
                                <a target={'_blank'} href="/" className={cx('crt')}>
                                    Advertise
                                </a>
                                <a target={'_blank'} href="/" className={cx('crt')}>
                                    Developers
                                </a>
                                <a target={'_blank'} href="/" className={cx('crt')}>
                                    Transparency
                                </a>
                                <a target={'_blank'} href="/" className={cx('crt')}>
                                    TikTok Rewards
                                </a>
                                <a target={'_blank'} href="/" className={cx('crt')}>
                                    TikTok Browse
                                </a>
                                <a target={'_blank'} href="/" className={cx('crt')}>
                                    TikTok Embeds
                                </a>
                            </p>
                        </div>
                        <div className={cx('linker')}>
                            <p className={cx('link-container')}>
                                <a target={'_blank'} href="/" className={cx('crt')}>
                                    Help
                                </a>
                                <a target={'_blank'} href="/" className={cx('crt')}>
                                    Safety
                                </a>
                                <a target={'_blank'} href="/" className={cx('crt')}>
                                    Terms
                                </a>
                                <a target={'_blank'} href="/" className={cx('crt')}>
                                    Privacy
                                </a>
                                <a target={'_blank'} href="/" className={cx('crt')}>
                                    Creator Portal
                                </a>
                                <a target={'_blank'} href="/" className={cx('crt')}>
                                    Community Guidelines
                                </a>
                            </p>
                        </div>
                        <div className={cx('linker')}>
                            <p className={cx('link-container')}>
                                <a target={'_blank'} href="/" className={cx('create')}>
                                    © 2023 TikTok create by xhiep
                                </a>
                            </p>
                        </div>
                    </Menu>
                </Scrollbars>
            </div>
        </aside>
    );
}

export default Sidebar;
