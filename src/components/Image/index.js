import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallBack = images.noImage, ...props }, ref) => {
    const [error, setError] = useState('');
    const handleError = () => {
        setError(fallBack);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={error || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
