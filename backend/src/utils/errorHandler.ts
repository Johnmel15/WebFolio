export class ErrorHandler {
  static handleValidationError(error: any): {
    status: number;
    body: Record<string, any>;
  } {
    // Mongoose validation error
    if (error.name === "ValidationError") {
      const errors: Record<string, string> = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      return {
        status: 400,
        body: {
          message: "Validation failed",
          errors,
        },
      };
    }

    // Duplicate key error (MongoDB)
    if (error.code === 11000 && error.keyPattern) {
      const field = Object.keys(error.keyPattern)[0];
      return {
        status: 400,
        body: {
          message: "Validation failed",
          errors: {
            [field]: `This ${field} is already taken`,
          },
        },
      };
    }

    // Cast Error (invalid ID)
    if (error.name === "CastError") {
      return {
        status: 400,
        body: {
          message: "Invalid input",
          errors: {
            [error.path]: `Invalid ${error.path}`,
          },
        },
      };
    }

    // JWT Error
    if (error.name === "JsonWebTokenError") {
      return {
        status: 401,
        body: {
          message: "Invalid token",
          error: "Please login again",
        },
      };
    }

    // Token Expired Error
    if (error.name === "TokenExpiredError") {
      return {
        status: 401,
        body: {
          message: "Token expired",
          error: "Please login again",
        },
      };
    }

    // Default server error
    return {
      status: 500,
      body: {
        message: "Internal server error",
        error:
          process.env.NODE_ENV === "production"
            ? "Something went wrong"
            : error.message,
      },
    };
  }

  static handleAuthError(error: Error): {
    status: number;
    body: Record<string, any>;
  } {
    return {
      status: 401,
      body: {
        message: "Authentication failed",
        error: error.message,
      },
    };
  }
}
