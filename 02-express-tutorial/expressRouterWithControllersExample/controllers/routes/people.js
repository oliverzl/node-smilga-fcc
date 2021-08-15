const express = require("express");
const router = express.Router();

const { getPeople, createPerson, createPersonPostman, updatePerson, deletePerson } = require("../peopleMethods");

router.get("/", getPeople);
router.post("/", createPerson);
router.post("/postman", createPersonPostman);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

//lesser lines of code method by chaining the routes:

// START

// router.route("/").get(getPeople).post(createPerson);
// router.route("/postman").post(createPersonPostman);
// router.route("/:id").put(updatePerson).delete(deletePerson);

//END

module.exports = router;
