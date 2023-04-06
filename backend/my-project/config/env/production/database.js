module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("containers-us-west-177.railway.app"),
      port: env.int(7211),
      database: env("railway"),
      user: env("postgres"),
      password: env("WWXswtnk9ZNybEoo1KSI"),
      ssl: env.bool(false),
    },
    debug: false,
  },
});
