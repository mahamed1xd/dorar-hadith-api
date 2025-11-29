const app = require('./app');
const config = require('./config/config');

const port = process.env.PORT || config.port;

// Server
// تأكد إنك بتصدر الـ 'app' عشان Vercel تعرف تستخدمه
module.exports = app;

// Handle unhandled rejections
process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
