import dotenv from 'dotenv';

dotenv.config();

export default {
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/farmfusion',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
    accessKeyId: process.env.accessKeyId || 'accessKeyId',
    secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
  };
  
