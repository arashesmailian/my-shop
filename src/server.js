import { createServer, Model } from "miragejs"
import productImage from "./assets/images/product1.jpg";


export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
        product: Model,
    },

    seeds(server) {
        server.create("product", {
          id: 1,
          category: "shoes",
          title: "product1",
          price: 100,
          image: productImage,
          description: "samp;e",
        });
        server.create("product", {
          id: 2,
          category: "shoes",
          title: "product2",
          price: 100,
          image: productImage,
          description: "samp;e",
        });
        server.create("product", {
          id: 3,
          category: "shoes",
          title: "product3",
          price: 100,
          image: productImage,
          description: "samp;e",
        });
        server.create("product", {
          id: 4,
          category: "shoes",
          title: "product4",
          price: 100,
          image: productImage,
          description: "samp;e",
        });
        server.create("product", {
          id: 5,
          category: "shoes",
          title: "product5",
          price: 100,
          image: productImage,
          description: "samp;e",
        });
        server.create("product", {
          id: 6,
          category: "shoes",
          title: "product6",
          price: 100,
          image: productImage,
          description: "samp;e",
        });
        server.create("product", {
          id: 7,
          category: "shoes",
          title: "product7",
          price: 100,
          image: productImage,
          description: "samp;e",
        });
        server.create("product", {
          id: 8,
          category: "shoes",
          title: "product8",
          price: 100,
          image: productImage,
          description: "samp;e",
        });
        server.create("product", {
          id: 9,
          category: "shoes",
          title: "product9",
          price: 100,
          image: productImage,
          description: "samp;e",
        });
        server.create("product", {
          id: 10,
          category: "shoes",
          title: "product10",
          price: 100,
          image: productImage,
          description: "samp;e",
        });
        server.create("product", {
          id: 11,
          category: "shoes",
          title: "product11",
          price: 100,
          image: productImage,
          description: "samp;e",
        });
        server.create("product", {
          id: 12,
          category: "shoes",
          title: "product12",
          price: 100,
          image: productImage,
          description: "samp;e",
        });
        server.create("product", {
          id: 13,
          category: "shoes",
          title: "product13",
          price: 100,
          image: productImage,
          description: "samp;e",
        });
        server.create("product", {
          id: 14,
          category: "shoes",
          title: "product14",
          price: 100,
          image: productImage,
          description: "samp;e",
        });
        server.create("product", {
          id: 15,
          category: "shoes",
          title: "product15",
          price: 100,
          image: productImage,
          description: "samp;e",
        });
      },

    routes() {
      this.namespace = "api"
      this.timing = 2000
      this.get("/products", (schema) => {
        return schema.products.all()
      })
      this.get("/products/:id", (schema, request) => {
        let id = request.params.id
      
        return schema.products.find(id)
      })
    },
  })

  return server
}