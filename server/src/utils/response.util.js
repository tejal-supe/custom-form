export const sendSuccess = (
  res,
  message = "Operation successful",
  data = null,
  statusCode = 201
) => {
  const response = {
    success: true,
    message,
    data,
  };
  return res.status(statusCode).json(response);
};

export const sendError = (
  res,
  message = "An error occurred",
  error = null,
  statusCode = 400
) => {
  const response = {
    success: false,
    message,
    error,
  };
  console.error("Error:", message, error);
  return res.status(statusCode).json(response);
};

