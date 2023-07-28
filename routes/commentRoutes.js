const router = require('express').Router();
const commentContr = require('../controller/commentContrll');

// show comment
router.get("/:vidio_id/comment", commentContr.getComment);
// add comment
router.post("/:vidio_id/addComment", commentContr.addComment);

module.exports = router;