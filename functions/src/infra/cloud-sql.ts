import { Pool } from "pg";

async function getConnection(): Promise<Pool> {
  const pool = new Pool({
    database: "postgres",
    user: "postgres",
    password: "123456",
    port: 5432,
    host: "34.39.136.195",
    ssl: {
      rejectUnauthorized: false, // Set this to true in production if you have a CA certificate
    },
  });

  return pool;
}

export const executeQuery = async (queryString: string, values: (string | number)[]) => {
  const connection = await (await getConnection()).connect();

  const result = await connection.query(queryString, values);

  connection.release();
  return result;
};
