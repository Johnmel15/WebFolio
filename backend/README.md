# Portfolio Backend

This is the backend server for the portfolio website. It handles email sending and other API functionalities.

## Project Structure

```
backend/
├── config/         # Configuration files
│   └── email.js    # Email configuration
├── controllers/    # Request handlers
│   └── emailController.js
├── routes/         # API routes
│   └── api.js
├── .env.example    # Example environment variables
└── server.js       # Main server file
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file:
```bash
cp .env.example .env
```

3. Update the `.env` file with your SMTP credentials.

4. Start the server:
```bash
npm start
```

## API Endpoints

### POST /api/send-email
Sends an email from the contact form.

Request body:
```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "body": "string"
}
```

## Environment Variables

- `PORT`: Server port (default: 3001)
- `SMTP_HOST`: SMTP server host
- `SMTP_PORT`: SMTP server port
- `SMTP_SECURE`: Use SSL/TLS
- `SMTP_USER`: SMTP username
- `SMTP_PASS`: SMTP password
- `SMTP_FROM`: Sender email address
- `SMTP_TO`: Recipient email address
