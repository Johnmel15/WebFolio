interface SmtpConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

export interface EmailConfig {
  smtp: SmtpConfig;
  defaultTo: string;
}
