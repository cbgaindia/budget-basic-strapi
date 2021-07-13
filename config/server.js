module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8001),
  url: 'https://budgetbasics-backend.openbudgetsindia.org/',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'e4fd0654323afc22ba38138a0f7e0e91'),
    },
  },
});
