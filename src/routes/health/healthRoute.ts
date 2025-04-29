import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    try {
        //lofic here
        res.status(200).json({ sucess: true, data: { id: 1, price: 2000 } })
    } catch (error) {
        //eror handling
    }
})

export default router
