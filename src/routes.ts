import { FastifyTypedInstance } from "./types";
import { randomUUID } from "node:crypto";
import z, { Schema } from "zod";
import { getUserId, getUsers, postUser } from "./schemas"

interface User {
    id: string,
    name: string,
    email: string,
    senha: string
}

const users: User[] = []



export async function routes(app:FastifyTypedInstance) {

    
    app.get("/users/:name", getUserId, async (request, reply) =>{
        let verificador = users.find(el => el.name === request.params)
        
        if(!verificador){
            return reply.status(410).send()
        } else if (verificador){
            return verificador
        }
    })


    app.get("/users", getUsers,() =>{
        return users
    })


    app.post("/users", postUser, async (request, reply) =>{
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