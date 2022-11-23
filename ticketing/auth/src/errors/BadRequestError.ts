import { CustomError } from "./CustomError";

export class BadRequestError extends CustomError {
    statuscode = 400

    constructor(public message: string) {
        super(message)
        Object.setPrototypeOf(this, BadRequestError.prototype)
    }

    serialiseErrors() {
        return [{ message: this.message }]
    }
}