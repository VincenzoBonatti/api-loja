import { FastifyTypedInstance } from "./types";
import {schemas} from "./schemas"
import { cadastrarProduto, cadastrarUsuario, ListaUsuarios, products, productsById, userPeloNome } from "./service";


export async function routes(app:FastifyTypedInstance) {

    
    app.get("/users/:name", schemas.getUserId, async (request, reply) =>{
       userPeloNome(request, reply)
    })

    app.get("/users", schemas.getUsers,async (request, reply) =>{
        return ListaUsuarios(request, reply)
    })

    app.post("/users", schemas.postUser, async (request, reply) =>{
        cadastrarUsuario(request, reply)
    })

    app.get("/products", schemas.getProducts, () =>{
        return products
    })

    app.post("/products", schemas.postProducts, async (request, reply) =>{
        cadastrarProduto(request, reply)
    })

    app.get("/products/:id", schemas.getProductId, async (request, reply) =>{
        productsById(request, reply)
     })
}   