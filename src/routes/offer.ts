import express, { Request, Response } from "express";
import supabase from "../lib/superBaseClient";
const router = express.Router()


//this will be fetched from the postgress sql DB (supabase)
const planDummyData = [
    {
        planId: '1',
        price: 49.99,
        coverage: '2024-2025',
        type: 'shipping', // shipping | product | both
    },
    {
        planId: '2',
        price: 89.99,
        coverage: '2024-2026',
        type: 'product',
    },
    {
        planId: '3',
        price: 129.99,
        coverage: '2024-2027',
        type: 'both',
    },
    {
        planId: '4',
        price: 39.99,
        coverage: '2024-2025',
        type: 'shipping',
    },
    {
        planId: '5',
        price: 109.99,
        coverage: '2024-2026',
        type: 'both',
    },
];



router.get('/offer', async (req: Request, res: Response) => {
    try {
        //logic here
        //database oeprations
        const { plan_id } = req.query;
        if (plan_id) {
            const { data } = await supabase
                .from('plans')
                .select('*')
                .eq('plan_id', plan_id)
            res.status(200).json({ sucess: true, data: data })
        } else {
            res.status(404).json({ sucess: false, data: {} })
        }
    } catch (error) {
        //eror handling
    }
})

router.post('/order-webhook', async (req: Request, res: Response) => {
    try {
        //logic here
        //database oeprations
        const body = req.body;
        if (body) {
            console.log(body)
            res.status(200).json({ sucess: true, data: req.body })
        } else {
            res.status(404).json({ sucess: false, data: {} })
        }
    } catch (error) {
        //eror handling
    }
})

export default router