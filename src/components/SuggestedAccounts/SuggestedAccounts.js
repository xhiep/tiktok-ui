import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import { memo } from 'react';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, data = [], onSeeAll, showMore, onSeeLess }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}

            {showMore ? (
                <p className={cx('more-btn')} onClick={onSeeLess}>
                    See Less
                </p>
            ) : (
                <p className={cx('more-btn')} onClick={onSeeAll}>
                    See All
                </p>
            )}
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default memo(SuggestedAccounts);
