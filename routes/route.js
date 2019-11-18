const router = require("express").Router();
const multer = require("multer");
const postController = require("../controllers/posts.controller");
const loginController = require("../controllers/loginController");
const passwordController = require("../controllers/password.controller");
const registerController = require("../controllers/register.controller");
const imageController = require("../controllers/image.controller");
const userInfoController = require("../controllers/userInfo.controller")

//getall posts from mongodb
router.get("/", postController.getallposts);
router.post("/save", postController.save);

// get posts based on logged in user
router.post("/getMyPosts", postController.getMyPosts);

// Saving Login Information
router.post("/getLoginInfo", loginController.authenticate);

//Update password
router.post("/getUserInfo", passwordController.getUserDetails);
router.put("/updatePassword", passwordController.resetPassword);

//register
router.post("/register", registerController.save);

//profile image
const storage = multer.diskStorage ({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req,file,cb) {
        cb(null, file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
    cb(null, true);
} else { cb(null, false);}
};

const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter:fileFilter
});

router.post("/uploadImage",upload.single('image'), imageController.insertImage);  
router.put("/updateImage", upload.single('image'),imageController.updateImage);
router.get("/getImage", imageController.fetchImage);

// user Information
router.post("/getUser", userInfoController.getUserInfo);

module.exports = router;
