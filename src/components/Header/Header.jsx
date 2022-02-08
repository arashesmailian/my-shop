import {useState} from 'react';
import { ReactComponent as SiteLogo } from '../../assets/svg/logo.svg';
import { Link } from 'react-router-dom';
import styles from './header.style.module.css'
import {BiUser} from "react-icons/bi"; 
import {BiCart} from "react-icons/bi"; 
import { CartMenu } from '..';


const Header = () => {
  const [show , setShow] = useState(false)
  return (
        <header>
            <div className={styles.header_top}>
                <div className={styles.header_tope_left}>
                    <div 
                        onMouseEnter={()=> setShow(true)}
                        style={{position: 'relative'}}>
                        <BiCart size={'28px'}/>
                        <CartMenu show={show} setShow={setShow} />
                    </div>
                    <div><BiUser size={'28px'} /></div>
                </div>
                <div className={styles.header_tope_left}>
                    <input />
                    <Link to='/'>
                        <SiteLogo />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header