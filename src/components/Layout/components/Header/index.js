import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { IoMdCloseCircle } from 'react-icons/io';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="tiktok" />
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
                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;
