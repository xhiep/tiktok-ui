import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import Hashtag from './Hashtag';

const cx = classNames.bind(styles);
const FetchHashtags = [
    { id: 1, name: 'Suthatla', type: '#' },
    { id: 2, name: 'Mackedoi', type: '#' },
    { id: 3, name: '7749hieuung', type: '#' },
    { id: 4, name: 'genzlife', type: '#' },
    { id: 5, name: 'Tình Đã Đầy Một Tim - Huyền Tâm Mônssssssssssssssssssssssss', type: '#' },
    { id: 6, name: 'Thiên Thần Tình Yêu - RICKY STAR', type: '#' },
    { id: 7, name: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn', type: '#' },
    { id: 8, name: 'Thiên Thần Tình Yêu - RICKY STAR', type: '#' },
    { id: 9, name: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn', type: '#' },
    { id: 10, name: 'Thiên Thần Tình Yêu - RICKY STAR', type: '#' },
];

function Discover() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>Discover</p>
            <div className={cx('content')}>
                <Hashtag>{FetchHashtags}</Hashtag>
            </div>
        </div>
    );
}

export default Discover;
