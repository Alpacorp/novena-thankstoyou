import * as React from 'react';
import { Link } from 'react-router-dom';
import { adopta, amese, fruto, logoTty, MainTitle, sanar, techo } from '../assets';
import { funAdopta, funSanar, funTecho, funFruto, funAmese } from '../utils/clickEvents';
import BrandLogo from './BrandLogo';
import './Components.css';

const Intro = () => {

  return (
    <>
      <div className='introModal'>
        <div className='introContent'>
          <div className='logoTty'>
            <img src={logoTty} alt="logo Thanks To You" />
          </div>
          <BrandLogo src={MainTitle} />
          <div className='textTty'>
            <p>Al ingresar, interactuar y completar la novena digital ayudarás a una de estas fundaciones</p>
            <small>Selecciona una:</small>
          </div>
          <div className='foundations'>
            <div className='cause'>
              <Link to='/home'>
                <img src={adopta} alt="fundacion adopta" onClick={funAdopta} />
              </Link>
            </div>
            <div className='cause'>
              <Link to='/home'>
                <img src={sanar} alt="fundacion sanar" onClick={funSanar} />
              </Link>
            </div>
            <div className='cause'>
              <Link to='/home'>
                <img src={techo} alt="fundacion techo" onClick={funTecho} />
              </Link>
            </div>
            <div className='cause'>
              <Link to='/home'>
                <img src={fruto} alt="fundacion fruto" onClick={funFruto} />
              </Link>
            </div>
            <div className='cause'>
              <Link to='/home'>
                <img src={amese} alt="fundacion amese" onClick={funAmese} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Intro;