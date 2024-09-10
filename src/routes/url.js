const express = require("express");
const {shortenUrl, redirect, getById, getByDate} = require("../controllers/url")

const router = express.Router();

// Redireciona para a documentação da API
router.get("/", (req, res) => {
  return res.redirect("https://app.nosmove.com")
})

router.post("/urls", shortenUrl);

router.get("/url/:id", getById)
router.get("/urls", getByDate)

router.get("/:code", redirect)

module.exports = router;
