module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '65e34f3ad2af468e883eda9a7b629ca4'),
  },
});
