import asyncHandler from "express-async-handler";


// @desc Register a User
// @route Post /api/users/register
// @acess public

const registerUser= asyncHandler(async, (req, res) => {
    res.json({ message: "Register the user" });
  });



// @desc Login a User
// @route Post /api/users/login
// @acess public
  const loginUser= asyncHandler(async, (req, res) => {
    res.json({ message: "Login the user" });
  });

  // @desc Current User info
// @route Post /api/users/current
// @acess private
const currentUser= asyncHandler(async, (req, res) => {
    res.json({ message: "Current user" });
  });

export { registerUser,loginUser,currentUser};

