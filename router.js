const express = require("express");
const router = express.Router();
const indexRouter = require("./routes/index");
const usuariosRouter = require("./routes/users");

/* home page */
router.use("/usuarios", usuariosRouter)
router.use("/auth", )

module.exports = router;
