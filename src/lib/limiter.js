const rateLimit = require('express-rate-limit');

// Create a rate limiter
const limiter = rateLimit({
  windowMs: 10 * 1000, // 10 seconds
  limit: 50, // Limit each IP to 50 requests per windowMs
  message: {
    status: 429,
    error: 'Too many requests, please try again later.',
  },
  keyGenerator: (req, res) => {
    return req.ip; // Customize the key (default is req.ip)
  },
  skip: (req, res) => {
    return req.ip === '127.0.0.1'; // Skip rate limiting for localhost
  },
});

module.exports = limiter;