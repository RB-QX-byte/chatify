import express from "express"

const router = express.Router()

//login route
router.get(("/"), (req, res) => {
    res.send("/")
})


export default router