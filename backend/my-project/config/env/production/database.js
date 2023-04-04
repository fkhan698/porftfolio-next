module.exports = ({ env }) => ({
  url: env("DATABASE_URL"),
  ssl: env.bool(true),
});
