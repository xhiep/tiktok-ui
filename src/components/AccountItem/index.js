import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { AiFillCheckCircle } from 'react-icons/ai';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                alt="hoaa"
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/60d73bdf902745a729efb69340c55e06.jpeg?x-expires=1677913200&x-signature=%2FpH5eLb7IbJau8M3Rwl2ilhrz7w%3D"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <AiFillCheckCircle className={cx('check')} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
