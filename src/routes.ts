import { randomUUID } from "node:crypto";
import { FastifyTypedInstance } from "./types";
import z from "zod";


interface User {
    id: string,
    name: string,
    email: string
}

const users: User[] = []



export async function routes(app:FastifyTypedInstance) {
    app.get("/users", () =>{
        return users
    })


    app.post("/users", {
        schema: {
            tags: ["users"],
            description: "create a new user",
            body: z.object({
                name: z.string(),
                email: z.string().email(),
                
            })
        }
    }, (request, reply) =>{

        const{ name, email } = request.body

        users.push({
            id:randomUUID(),
            name,
            email
        })


        return reply.status(201).send()
    })
}   