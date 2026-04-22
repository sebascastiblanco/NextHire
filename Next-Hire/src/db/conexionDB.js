import pg from "pg";

//conexion base datos
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "NEXT-HIRE",
    password: "12345678",
    port: 5432,
});

export default db;