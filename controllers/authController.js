const register = (req, res) => {
  res.send("register user");
};
const login = (req, res) => {
  res.send("Login");
};
const updateUser = (req, res) => {
  res.send("updated user");
};

export { register, login, updateUser };