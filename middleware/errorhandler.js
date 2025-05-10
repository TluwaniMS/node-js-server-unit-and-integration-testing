import { ErrorMessages } from "../enumerators/error-messages"

export const errorHandler = (handler) => {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (error) {
      next(error);
    }
  };
};

export const unknownRequests = (req, res, next) => {
  const error = new Error(ErrorMessages.badRequestErrorMessage);
  error.status = 404;
  next(error);
};

export const errorResponse = (error, req, res, next) => {
  if (error.status) {
    console.log(error);
    res.status(error.status).send({ message: error.message });
  } else {
    console.log(error);
    res.status(500).send({ message: ErrorMessages.internalServerErrorMessage });
  }
};
