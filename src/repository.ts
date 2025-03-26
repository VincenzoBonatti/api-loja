const { Pool } = require("pg")
import { randomUUID } from "node:crypto";

const pool = new Pool({
    host: "localhost",
    database: 'react-loja',
    port: 5432,
    user: "postgres",
    password: "Vi031104"
})


export async function Users() {
    const lista = await pool.query("select * from usuarios")
    return lista.rows
}

export async function pgUsers(name: string, email: string, senha: string) {
    const cadastro = await pool.query(
        `INSERT INTO public.usuarios(
        id, name, email, senha)
        VALUES (${randomUUID()}, '${name}', '${email}', '${senha}');`
    )
    return cadastro
}

export async function pgVerEmail(email: string) {
    const verificarEmail = await pool.query(
        `
        SELECT * FROM usuarios
        WHERE email = '${email}';
        `
    )
    
    return verificarEmail
}