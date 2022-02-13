import {useState} from 'react';
import { ReactComponent as SiteLogo } from '../../assets/svg/logo.svg';
import { Link, Navigate } from 'react-router-dom';
import styles from './header.style.module.css'
import {BiUser} from "react-icons/bi"; 
import {BiCart} from "react-icons/bi"; 
import {BiLogOut} from "react-icons/bi"; 
import { CartMenu } from '..';
import { useSelector } from 'react-redux';
import Auth from '../../api/localStorage';

const Header = () => {
  const total_count = useSelector(
        (state) => state.cart.items.reduce(
            (count , item) => count + item.count, 
            0))
  const [show , setShow] = useState(false)
  return (
        <header>
            <div className={styles.header_top}>
                <div className={styles.header_tope_left}>
                    <div 
                        onMouseEnter={()=> setShow(true)}
                        style={{position: 'relative'}}>
                        <BiCart size={'28px'}/>
                        <div style={{
                            display:'inline-block',
                            backgroundColor:'red',
                            color:'white',
                            borderRadius:'15px',
                            padding:'3',
                            position:'absolute',
                            left:'0',
                            top:'15px',
                            fontWeight:'700',
                        }}>
                            {total_count}
                        </div>
                        <CartMenu show={show} setShow={setShow} />
                    </div>
                    <div>
                        <Link to='/profile'>
                            <BiUser size={'28px'} />
                        </Link>
                    </div>
                    <div style={{cursor:'pointer'}} onClick={() => {
                        Auth.logout();
                    }}>
                        <BiLogOut size={'28px'} />
                    </div>
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