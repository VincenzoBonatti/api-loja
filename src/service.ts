import { randomUUID } from "node:crypto";


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

export function userPeloNome(request, reply) {
    let verificador = users.find(el => el.name === request.params.name)

    if (!verificador) {
        return reply.status(404).send()
    } else if (verificador) {
        reply.send(verificador)
    }
}

export function cadastrarUsuario(request, reply) {
    const { name, email, senha } = request.body
    let verificador = users.find(el => el.email === email)
    if (!verificador) {
        users.push({
            id: randomUUID(),
            name,
            email,
            senha
        })
        return reply.status(200).send()
    } else if (verificador) {
        return reply.status(409).send()
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