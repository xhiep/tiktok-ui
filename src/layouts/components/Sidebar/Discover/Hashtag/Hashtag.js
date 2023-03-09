import classNames from 'classnames/bind';
import styles from './Hashtag.module.scss';

const cx = classNames.bind(styles);

function Hashtag({ children }) {
    return (
        <div className={cx('Hashtag')}>
            {children.map((item) => {
                return (
                    <div key={item.id} className={cx('item')}>
                        <span className={cx('icon')}>{item.type}</span>
                        <span className={cx('name')}>{item.name}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default Hashtag;
