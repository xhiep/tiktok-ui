import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { IoMdCloseCircle } from 'react-icons/io';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BiSearch, BiHelpCircle } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { GrLanguage } from 'react-icons/gr';
import { RxKeyboard } from 'react-icons/rx';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <GrLanguage />,
        title: 'English',
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

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, [searchResult]);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="tiktok" />
                <Tippy
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
                            <BiSearch className={cx('search-icon')} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button black leftIcon={<IoMdAdd />}>
                        Upload
                    </Button>
                    <Button primary>Log in</Button>

                    <Menu items={MENU_ITEMS}>
                        <button className={cx('more-btn')}>
                            <img src={images.menu} alt="menu" className={cx('menu-icon')} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
