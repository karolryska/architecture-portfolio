import { useEffect, useState } from 'react';

const useWidth = () => {
    const isBrowser = typeof window !== 'undefined';
    const [width, setWidth] = useState(isBrowser ? window.innerWidth : 1000);

    useEffect(() => {
        if (!isBrowser) {
            return;
        }
        window.addEventListener('resize', () => setWidth(window.innerWidth));

        return () => {
            window.removeEventListener('resize', () =>
                setWidth(window.innerWidth)
            );
        };
    }, []);

    return [width < 767 ? true : false, width];
};

export default useWidth;
