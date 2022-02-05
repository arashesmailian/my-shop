// import {useEffect} from 'react';
import { HomeBanners , CategoryItems , Container } from '../../components'
import styles from './home.style.module.css'
import { useEffect , useState } from 'react'

const Home = () => {
    const[products , setProducts] = useState([])
    useEffect(() => {
        fetch('/api/products').then(res => res.json()).then(data => setProducts(data.products))
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
