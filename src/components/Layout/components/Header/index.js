import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import { IoMdCloseCircle } from 'react-icons/io';
import { AiOutlineLoading3Quarters, AiOutlineSetting } from 'react-icons/ai';
import { BiHelpCircle } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { GrLanguage } from 'react-icons/gr';
import { RxKeyboard } from 'react-icons/rx';
import { FiLogOut } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { RiCoinLine } from 'react-icons/ri';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import Image from '~/components/Image';
import { InboxIcon, LogoIcon, MenuIcon, MessageIcon, SearchIcon } from '~/components/icon';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <GrLanguage />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <BiHelpCircle />,
        title: 'Feedback and help',
        to: '/help',
    },
    {
        icon: <RxKeyboard />,
        title: 'Keyboard shortcut',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, [searchResult]);

    //hanlde logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //hanlde change language
                break;
            default:
        }
    };
    const userMenu = [
        {
            icon: <CgProfile />,
            title: 'View profile',
            to: '/help',
        },
        {
            icon: <RiCoinLine />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <AiOutlineSetting />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FiLogOut />,
            title: 'Log out',
            to: '/help',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <LogoIcon className={cx('logo-icon')} />
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <IoMdCloseCircle />
                        </button>
                        <AiOutlineLoading3Quarters className={cx('loading')} />

                        <button className={cx('search-btn')}>
                            <SearchIcon width="2.4rem" height="2.4rem" />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <p className={cx('action-icon')}>
                            <Button black leftIcon={<IoMdAdd />}>
                                Upload
                            </Button>

                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx('action-MessageIcon')}>
                                    <MessageIcon width="2.6rem" height="2.6rem" />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('action-InboxIcon')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </p>
                    ) : (
                        <>
                            <Button black leftIcon={<IoMdAdd />}>
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://ap9-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/fc4d0a690a5451ca8250db4d127dd565.jpeg?x-expires=1678003200&x-signature=JH7%2FdmSG1rr5fBduW6jfSCOlK7s%3D"
                                alt="avatar"
                                fallBack="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3fc4e1df5ffdbc87b883bd57e65f9c64~c5_100x100.jpeg?x-expires=1678006800&x-signature=JWO9vTz%2B70lCQJqVphvlu%2FLeABk%3D"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <MenuIcon width="2rem" height="2rem" />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
