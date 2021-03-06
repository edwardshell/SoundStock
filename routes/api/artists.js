const router = require("express").Router();
const artistsController = require("../../controllers/artistsController");

// Matches with "/api/artists"
router.route("/")
  .get(artistsController.findAll)
  .post(artistsController.create);

// Matches with "/api/artists/:id"
router
  .route("/:id")
  .get(artistsController.findById)
  .post(artistsController.update)
  .put(artistsController.update)
  .delete(artistsController.remove);

module.exports = router;
