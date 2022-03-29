import express from 'express';
import Reels from '../models/Reel.js'
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).send('Hello Jumma')
})

router.post('/post/reels', (req, res) => {
    const newReel = req.body;
    Reels.create(newReel, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {

            res.status(201).send(data);
        }

    });


})
router.get('/get/reels', (req, res) => {
    Reels.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {

            res.status(200).send(data);
        }
    });


})

export default router;