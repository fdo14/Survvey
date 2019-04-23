module.exports = (req, res, next) => {
  if (!req.user) {
    return res.sattus(401).send({ error: "Log in you nerd" });
  }

  next();
};
