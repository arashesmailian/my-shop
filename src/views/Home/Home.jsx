// import {useEffect} from 'react';
import { HomeBanners , CategoryItems , Container } from '../../components'
import styles from './home.style.module.css'
import { useEffect , useState } from 'react'
// import axios from '../../api/setup';
import { getProducts } from '../../api/products.api';
import axios from 'axios';
const Home = () => {
    const[products , setProducts] = useState([])
    useEffect(() => {
        getProducts().then(data => setProducts(data.products)).catch(res => alert(res.status))
        // fetch('/api/products').then(res => res.json()).then(data => setProducts(data.products))
    }, [])
  return(
        <div style={{padding:20}}>
            <HomeBanners />
            <section>
                <Container>
                    <CategoryItems title='shoes' products={products} />
                </Container>
            </section>
            <section>
                 <Container>
                    <CategoryItems title='shoes' products={products} />
                </Container>
            </section>
            <section>
                there is category icons
            </section>
            <section>
                 <Container>
                    <CategoryItems title='shoes' products={products} />
                </Container>

            </section>
            <section>
                 <Container>
                    <CategoryItems title='shoes' products={products} />
                </Container>
            </section>
        </div>        
  )
};

export default Home;
