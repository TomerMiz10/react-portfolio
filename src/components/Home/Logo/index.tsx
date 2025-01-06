import { useRef, useEffect } from 'react';
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoTM from '../../../assets/logo/tm-logo-png-no-bg.svg';
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