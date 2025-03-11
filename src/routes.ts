import { FastifyTypedInstance } from "./types";
import { randomUUID } from "node:crypto";

import {schemas} from "./schemas"

interface User {
    id: string,
    name: string,
    email: string,
    senha: string
}

const users: User[] = []



export async function routes(app:FastifyTypedInstance) {

    
    app.get("/users/:name", schemas.getUserId, async (request, reply) =>{
        let verificador = users.find(el => el.name === request.params.name)
        
        if(!verificador){
            return reply.status(404).send()
        } else if (verificador){
            reply.send(verificador)
        }
    })

    app.get("/users", schemas.getUsers,() =>{
        return users
    })


    app.post("/users", schemas.postUser, async (request, reply) =>{
        const {name, email, senha} = request.body
        let verificador = users.find(el => el.email === email)
        if(!verificador){          
            users.push({
                id:randomUUID(),
                name, 
                email,
                senha
            })
            return reply.status(200).send()
        } else if (verificador){
            return reply.status(409).send()
        }
    })
}   