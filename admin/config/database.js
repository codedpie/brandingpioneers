module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('MYSQLHOST', 'containers-us-west-172.railway.app'),
      port: env.int('MYSQLPORT', 6234),
      database: env('MYSQLDATABASE', 'railway'),
      user: env('MYSQLUSER', 'root'),
      password: env('MYSQLPASSWORD', 'VRpqY1LnndYfN0ELdbxp'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
