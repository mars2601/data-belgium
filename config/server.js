module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337
  ),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6944e5762568961aa4c81aae3964d7be'),
    },
  },
});
