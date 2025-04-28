import mysql from "mysql2";
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "weatherapp",
});

export const db = pool.promise();

// import mysql from 'mysql2';

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'weatherapp',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });

// export const db = pool.promise();
