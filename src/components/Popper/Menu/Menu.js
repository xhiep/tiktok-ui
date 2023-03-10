import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import Header from '~/components/Popper/Menu/Header';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((pre) => [...pre, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    const handleBack = () => {
        setHistory((pre) => pre.slice(0, pre.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title="language" onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItem()}</div>
            </PopperWrapper>
        </div>
    );
    //reset to first menu
    const handleResetMenu = () => {
        setHistory((pre) => pre.slice(0, 1));
    };

    return (
        <Tippy
            hideOnClick={false}
            offset={[12, 8]}
            delay={[0, 700]}
            interactive
            placement="bottom-end"
            render={renderResult}
            onHidden={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
