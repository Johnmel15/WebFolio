import dotenv from 'dotenv';
import type { EmailConfig } from './email.d';

dotenv.config();

const config: EmailConfig = {
  smtp: {
    host: process.env.SMTP_HOST || '',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || '',
    },
  },
  defaultTo: process.env.SMTP_TO || '',
};

export default config;
