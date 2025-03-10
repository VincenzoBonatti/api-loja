import z from "zod";



    export const getUserId = {
        schema: {
            tags: ["users"],
            description: "get user by name",
            response: {
                200: z.object({
                    id: z.string(),
                    name: z.string(),
                    email: z.string(),
                    senha: z.string(),
                })
            }
        }
    }

    export const getUsers = {
        schema: {
            tags: ["users"],
            description: "get all users",
            response: {
                200: z.array(z.object({
                    id: z.string(),
                    name: z.string(),
                    email: z.string(),
                    senha: z.string(),
                }))
            }
        }
    }

    export const postUser = {
        schema: {
            tags: ["users"],
            description: "create a new user",
            body: z.object({
                name: z.string(),
                email: z.string().email(),
                senha: z.string()
                
            }),
            response: {
                200: z.null().describe("user created"),
                
            },
        },
    }