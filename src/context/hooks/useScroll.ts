import { ScrollContext } from '@context/ScrollContext';
import { useAbstractContext } from './useAbstractContext';

export const useScroll = () => {
    return useAbstractContext(ScrollContext);
};
