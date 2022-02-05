// import {useEffect} from 'react';
import { HomeBanners , CategoryItems , Container } from '../../components'
import styles from './home.style.module.css'
import productImage from '../../assets/images/product1.jpg'
import { useEffect } from 'react'
const products = [
    {id:1, title:'kafsh meli', price:30000, image:productImage, description:'kafsh ba davam'},
    {id:2, title:'kafsh meli', price:30000, image:productImage, description:'kafsh ba davam'},
    {id:3, title:'kafsh meli', price:30000, image:productImage, description:'kafsh ba davam'},
    {id:4, title:'kafsh meli', price:30000, image:productImage, description:'kafsh ba davam'},
    {id:5, title:'kafsh meli', price:30000, image:productImage, description:'kafsh ba davam'},
]

const Home = () => {
  useEffect(() => {
        fetch('/api/products').then(res => res.json()).then(data => console.log(data))
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
