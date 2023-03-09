import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './LoginTog.module.scss';

const cx = classNames.bind(styles);

function LoginTog() {
    return (
        <div className={cx('login-tog')}>
            <div className={cx('title')}>Log in to follow creators, like videos, and view comments.</div>
            <Button primary lager outline className={cx('btn-login')}>
                Login
            </Button>
        </div>
    );
}

export default LoginTog;
