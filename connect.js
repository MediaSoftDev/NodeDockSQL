//Connection with MySQL
export const pool = createPool({
    host: process.env.MYSQL_DB_HOST,
    user: process.env.MYSQL_ROOT_USERNAME,
    password: process.env.MYSQL_ROOT_PASSWORD,
    port: process.env.MYSQL_DOCKER_PORT
})