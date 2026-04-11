const router = require("express").Router();
const verifyToken = require("../middlewares/auth.middleware");
const checkRole = require("../middlewares/role.middleware");

const {
  getUsers,
  deleteUser,
  getProfile
} = require("../controllers/user.controller");

router.get("/", verifyToken, checkRole(["admin"]), getUsers);
router.delete("/:id", verifyToken, checkRole(["admin"]), deleteUser);
router.get("/profile", verifyToken, checkRole(["admin", "user"]), getProfile);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login de usuario
 *     tags: [Auth]
 */

module.exports = router;