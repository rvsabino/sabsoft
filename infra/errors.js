export class InternalServerError extends Error {
  constructor({ cause }) {
    super("Um erro não esperado aconteceu.", {
      cause,
    });
    this.name = "InternalServerError";
    this.action = "Tente novamente mais tarde ou contate o suporte.";
    this.statusCode = 500;
  }

  toJSON() {
    return {
      message: this.message,
      name: this.name,
      action: this.action,
      status_code: this.statusCode,
      // Do not expose the stack trace or cause in the public error object
    };
  }
}
