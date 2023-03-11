const express = require("express");
const multer = require("multer");
const router = express.Router();
const UserController = require("../controllers/ctrlUser.js")

const auth = require("../middlewares/auth.js")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload/avatars/');
    },
    filename: function (req, file, cb) {
        cb(null, "avatar-" + Date.now() + file.originalname)
    }
});




//definir rutas
const upload = multer({storage:storage});

router.get("/test",auth.auth,UserController.test);
router.post("/register",UserController.register);
router.post("/login",UserController.login);
router.get("/profile/:id",auth.auth,UserController.profile);
router.get("/profiles",auth.auth,UserController.all);
router.get("/list/:page",auth.auth,UserController.list);
router.put("/update",auth.auth,UserController.update);

router.post('/upload', [upload.single('avatar'),auth.auth],UserController.upload);
router.get("/avatar/:file",auth.auth,UserController.avatar);

module.exports = router;