declare module 'react-rating-stars-component' {
    import { ComponentType } from 'react';

    interface ReactStarsProps {
        count: number;
        onChange: (newRating: number) => void;
        size?: number;
        activeColor?: string;
    }

    const ReactStars: ComponentType<ReactStarsProps>;

    export default ReactStars;
}
