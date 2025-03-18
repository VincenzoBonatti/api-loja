import z from "zod";

    export const schemas = {

        getUserId: {
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
        },

        getUsers: {
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
        },

        postUser: {
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
        },

        getProducts: {
            schema: {
                tags: ["products"],
                description: "get all products",
                response: {
                    200: z.array(z.object({
                        id: z.string(),
                        name: z.string(),
                        estoque: z.number(),
                        preco: z.number(),
                    }))
                }
            }
        },

        postProducts: {
            schema: {
                tags: ["products"],
                description: "create a new product",
                body: z.object({
                    name: z.string(),
                    estoque: z.number().int(),
                    preco: z.number()
                    
                }),
                response: {
                    200: z.null().describe("product created"),
                    
                },
            },
        },

        getProductId: {
            schema: {
                tags: ["products"],
                description: "get product by id",
                response: {
                    200: z.object({
                        id: z.string(),
                        name: z.string(),
                        estoque: z.number(),
                        preco: z.number(),
                    })
                }
            }
        },

    }

     

    

    