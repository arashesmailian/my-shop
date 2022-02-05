import React from 'react';
import styles from './banners.style.module.css'
import bigPic from '../../assets/images/banner1.png'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.jpg'

const HomeBanners = () => {
  return (
    <section className={styles.banners}>
        <div style={{padding:10}}>
            <img style={{borderRadius:15}} src={bigPic} alt='banner1' width={883} />
        </div>
        <div style={{width:440}}>
            <div style={{padding:10}}><img style={{borderRadius:15}} src={banner2} alt='banner2' width={'100%'} /></div>
            <div style={{padding:10}}><img style={{borderRadius:15}} src={banner3} alt='banner3' width={'100%'} /></div>
        </div>
    </section>
  )
};

export default HomeBanners;
