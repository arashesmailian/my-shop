import React from 'react';
import styles from './cart.style.module.css'
import image from '../../assets/images/product1.jpg'

const Cart = () => {
    const items = [{
        id: 1,
        category: "shoes",
        title: "product1",
        price: 100,
        image: image,
        description: "sample",
    }]
  return (
        <div className={styles.Cart}>
            <div className={styles.Cart_items}>
                {
                    items.map(item =>{
                        return(
                            <div key={item.id} className={styles.Cart_item}>
                                <div className={styles.Cart_item_image}>
                                    <img width={'100%'} src={image} alt="product1" />
                                </div>
                                <div className={styles.Cart_item_info}>
                                    <div>{item.title}</div>
                                    <div>{item.description}</div>
                                    <div></div>
                                </div>
                                <div>{item.price}تومن</div>
                            </div>
                        )
                    })
                }        
            </div>
            <div className={styles.Cart_info}>
                <div className={styles.Cart_info_item}>
                    <div>{"قیمت کالاها"}</div>
                    <div>تومن {3000}</div>
                </div>
                <div className={styles.Cart_info_item}>
                    <div>{"تخفیف کالاها"}</div>
                    <div>تومن {3000}</div>
                </div>
                <div className={styles.Cart_info_last_item}>
                    <div>{"جمع سبد خرید"}</div>
                    <div>تومن {3000}</div>
                </div>
            </div>
        </div>
    )
}

export default Cart;
