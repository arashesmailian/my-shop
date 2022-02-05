import { createServer, Model } from "miragejs"
import productImage from './assets/images/product1.jpg'

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      products: Model,
    },

    seeds(server) {
      server.create("product", {id:1, title:'product1', price:100, image:productImage, description:'sample'})
      server.create("product", {id:2, title:'product1', price:100, image:productImage, description:'sample'})
      server.create("product", {id:3, title:'product1', price:100, image:productImage, description:'sample'})
      server.create("product", {id:4, title:'product1', price:100, image:productImage, description:'sample'})
      server.create("product", {id:5, title:'product1', price:100, image:productImage, description:'sample'})
      server.create("product", {id:6, title:'product1', price:100, image:productImage, description:'sample'})
      server.create("product", {id:7, title:'product1', price:100, image:productImage, description:'sample'})
      server.create("product", {id:8, title:'product1', price:100, image:productImage, description:'sample'})
      server.create("product", {id:9, title:'product1', price:100, image:productImage, description:'sample'})
      server.create("product", {id:10, title:'product1', price:100, image:productImage, description:'sample'})
      server.create("product", {id:11, title:'product1', price:100, image:productImage, description:'sample'})
      server.create("product", {id:12, title:'product1', price:100, image:productImage, description:'sample'})
      server.create("product", {id:13, title:'product1', price:100, image:productImage, description:'sample'})
      server.create("product", {id:14, title:'product1', price:100, image:productImage, description:'sample'})
      server.create("product", {id:15, title:'product1', price:100, image:productImage, description:'sample'})
    },

    routes() {
      this.namespace = "api"

      this.get("/products", (schema) => {
        return schema.products.all()
      })
    },
  })

  return server
}