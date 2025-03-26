import { randomUUID } from "node:crypto";
import { pgUsers, pgVerEmail, Users } from "./repository";


interface User {
    id: string,
    name: string,
    email: string,
    senha: string
}

interface Products {
    id: string,
    name: string,
    estoque: number,
    preco: number
}

export const products: Products[] = []
export const users: User[] = []

export async function ListaUsuarios(request, reply) {
    try {
        const usuarios = Users()
        reply.status(200).send(await usuarios)
    } catch (error: any) {
        reply.status(500).send(error.message)
    }
}


export function userPeloNome(request, reply) {
    let verificador = users.find(el => el.name === request.params.name)

    if (!verificador) {
        return reply.status(404).send()
    } else if (verificador) {
        reply.send(verificador)
    }
}

export async function cadastrarUsuario(request, reply) {
    const { name, email, senha } = request.body
    let verificador = await pgVerEmail(email)
    if (!verificador) {
        try {
            const resposta = await pgUsers(name, email, senha)
            return reply.status(200).send(resposta)
        } catch (error: any) {
            return reply.status(500).send(error.message)
        }
    } else if (verificador) {
        return reply.status(409).send("email já cadastrado")
    }
}

export function cadastrarProduto(request, reply) {
    const { name, estoque, preco } = request.body
    products.push({
        id: randomUUID(),
        name,
        estoque,
        preco
    })
    return reply.status(200).send()
}

export function productsById(request, reply) {
    let verificador = products.find(el => el.id === request.params.id)

    if (!verificador) {
        return reply.status(404).send()
    } else if (verificador) {
        reply.send(verificador)
    }
}