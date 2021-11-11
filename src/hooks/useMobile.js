import { useEffect, useState } from 'react';

const useMobile = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth));
        // window.addEventListener('resize', () => console.log(window.innerWidth));

        return () =>
            window.removeEventListener('resize', () =>
                setWidth(window.innerWidth)
            );
    });

    return width < 767 ? true : false;
};

export default useMobile;
