module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8001),
  url: 'http://52.30.188.232',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'e4fd0654323afc22ba38138a0f7e0e91'),
    },
  },
});
