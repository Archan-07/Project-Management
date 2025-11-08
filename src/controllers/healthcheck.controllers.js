import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/async_handler.js";

const healthcheck = asyncHandler(async (req, res) => {
  res.status(200).json(new ApiResponse(200, { message: "Server is running" }));
});

// const healthcheck = (req, res, next) => {
//   try {
//     res
//       .status(200)
//       .json(new ApiResponse(200, { message: "Server is running" }));
//   } catch (error) {
//     next(error);
//   }
// };

export { healthcheck };
