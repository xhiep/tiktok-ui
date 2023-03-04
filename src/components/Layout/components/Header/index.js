import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiHelpCircle } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { GrLanguage } from 'react-icons/gr';
import { RxKeyboard } from 'react-icons/rx';
import { FiLogOut } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { RiCoinLine } from 'react-icons/ri';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import Image from '~/components/Image';
import { InboxIcon, LogoIcon, MenuIcon, MessageIcon } from '~/components/icon';
import Search from '../Search';

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
    const currentUser = true;

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
                <a href="/" className={cx('logo-icon')}>
                    <LogoIcon />
                </a>

                <Search />

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
                                    <span className={cx('badge')}>12</span>
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
                                src="https://lh3.googleusercontent.com/ogw/AAEL6siWFWNi6PXqdGyv61d6CaQRj189HubUl0P7EC-14w=s32-c-mo"
                                alt="avatar"
                                // fallBack="https://lh3.googleusercontent.com/ogw/AAEL6sh7MYd-FvtAMlsGTX7Ww3c_1HX1S9fkHaq8pPjnvw=s32-c-mo"
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
