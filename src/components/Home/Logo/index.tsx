import { useRef} from 'react';
import LogoTM from '@assets/images/tm-logo.png';
import './index.scss';

const Logo = () => {
    const bgRef = useRef<HTMLDivElement>(null)
    const solidLogoRef = useRef<HTMLImageElement>(null)

    return (
      <div className='logo-container' ref={bgRef}>
          <img 
            className='solid-logo'
            ref={solidLogoRef}
            src={LogoTM}
            alt='TM' />
      </div>
    );
};

export default Logo;