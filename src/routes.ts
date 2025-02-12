import { FastifyInstance } from "fastify";
import { FastifyTypedInstance } from "./types";
import z from "zod";

export async function routes(app:FastifyTypedInstance) {
    app.get("/users", () =>{
        return "aaaaaa"
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
    }, () =>{
        return
    })
}   