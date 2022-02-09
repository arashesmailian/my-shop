import React from 'react';
import styles from './cart.style.module.css'
import image from '../../assets/images/product1.jpg'
import { useSelector , useDispatch } from 'react-redux';
import {addToCart , decreaseItem , removeItem} from '../../redux/reducers/cart.reducer'
import {BiMinus} from "react-icons/bi"; 
import {BiPlus} from "react-icons/bi"; 
import {BiTrash} from "react-icons/bi"; 



const Cart = () => {
    const items = useSelector(state => state.cart.items)
    const dispatch = useDispatch()
    const total_price = useSelector(
        (state) => state.cart.items.reduce(
            (price , item) => price + (item.price * item.count), 
            0)) // we can use this instead of useMemo
  //   const total_price = useMemo( ()=>items.reduce((price , item) => price + (item.price * item.count) , 0), [items]) // every time we render totalprice will calculate, so we use useMemo ro prevent this if price wans't changed
      const total_count = useSelector(
          (state) => state.cart.items.reduce(
              (count , item) => count + item.count, 
              0))
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
                                    <div style={{
                                        flexFlow:1
                                    }}>{item.description}</div>
                                    <div style={{
                                        display:'flex',
                                        gap:10,
                                    }}>
                                        <div style={{cursor:'pointer'}} onClick={() => dispatch(addToCart(item))}><BiPlus /></div>
                                        <div>{item.count}</div>
                                        <div style={{cursor:'pointer'}} onClick={() => dispatch(decreaseItem(item))}><BiMinus /></div>
                                        <div style={{cursor:'pointer', marginRight:'40px'}} onClick={() => dispatch(removeItem(item))}><BiTrash /></div>
                                    </div>
                                </div>
                                <div>{total_price}تومن</div>
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
