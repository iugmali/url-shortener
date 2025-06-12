const express = require("express");
const {shortenUrl, redirect, getById, getByDate} = require("../controllers/url")

const router = express.Router();
const limiter = require("../lib/limiter")

// Redireciona para a documentação da API
router.get("/", (req, res) => {
  return res.redirect("https://app.nosmove.com")
})

router.post("/urls", limiter, shortenUrl)

router.get("/url/:id", getById)
router.get("/urls", getByDate)

router.get("/:code", redirect)

module.exports = router;
