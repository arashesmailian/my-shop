import {useEffect , useState} from 'react';
import {BiHeart} from "react-icons/bi"; 
import {BiShareAlt} from "react-icons/bi"; 
import {BiBellPlus} from "react-icons/bi"; 
import styles from './product.single.style.module.css'
import { Link } from 'react-router-dom';
import { CategoryItems } from '../../components';
import productImage from '../../assets/images/product1.jpg'
import { useParams } from 'react-router-dom';

const products = [
    {id:1, title:'kafsh meli', price:30000, image:productImage, description:'kafsh ba davam'},
    {id:2, title:'kafsh meli', price:30000, image:productImage, description:'kafsh ba davam'},
    {id:3, title:'kafsh meli', price:30000, image:productImage, description:'kafsh ba davam'},
    {id:4, title:'kafsh meli', price:30000, image:productImage, description:'kafsh ba davam'},
    {id:5, title:'kafsh meli', price:30000, image:productImage, description:'kafsh ba davam'},
]

const ProductSingle = () => {
    const {productId} = useParams()
    const [product, setProduct] = useState({})
    const [error, setError] = useState(false) //for erroe while getting from mirage
    useEffect(() => {
        setError(false)
        fetch('/api/products/' + productId).then(res => {
            if(res.status === 200) {return res.json()}
            else {setError(true)}
        }).then(data => setProduct(data.product))
    }, [productId])
    if (error){
        return('there is a problem please try again')
    }
  return (
        <div style={{backgroundColor:"#fff" , padding:32}}>
            <section>
                <Link to='/'>home</Link> / {product.category} / {product.title}
            </section>
            <section className={styles.product_details}>
                <div className={styles.product_left_side}>
                    <div className={styles.product_tools}>
                        <div>
                            <BiHeart size={'32px'}/>
                        </div>
                        <div>
                            <BiShareAlt size={'32px'} />
                        </div>
                        <div>
                            <BiBellPlus size={'32px'} />
                        </div>
                    </div>
                    <div className={styles.product_image}>
                        <img src={product.image} alt={'p'} />
                    </div>
                </div>
                <div className={styles.product_description}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                </div>
                <div className={styles.product_seller}>
                    <div>{product.price}</div>
                    <div>
                        <button className={styles.product_add_to_cart}>add to cart</button>
                    </div>
                </div>
            </section>
            <section style={{marginTop:32}}>
                <CategoryItems title={'related products'} products={products} />
            </section>
            <section style={{marginTop:32}}>
                <div>
                    comments
                </div>
            </section>
        </div>
  )
}

export default ProductSingle;
