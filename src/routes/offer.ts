import express, { Request, Response } from "express";
const router = express.Router()


//this will be fetched from the postgress sql DB (supabase)
const planDummyData = [
    {
        planId: 'PLN1001',
        price: 49.99,
        coverage: '2024-2025',
        type: 'shipping', // shipping | product | both
    },
    {
        planId: 'PLN1002',
        price: 89.99,
        coverage: '2024-2026',
        type: 'product',
    },
    {
        planId: 'PLN1003',
        price: 129.99,
        coverage: '2024-2027',
        type: 'both',
    },
    {
        planId: 'PLN1004',
        price: 39.99,
        coverage: '2024-2025',
        type: 'shipping',
    },
    {
        planId: 'PLN1005',
        price: 109.99,
        coverage: '2024-2026',
        type: 'both',
    },
];



router.get('/', async(req: Request, res: Response) => {
    try {
        //logic here
        //database oeprations
        const { product_id } = req.query;
        if (product_id) {
            res.status(200).json({ sucess: true, data: planDummyData })
        } else {
            res.status(404).json({ sucess: false, data: {} })
        }
    } catch (error) {
        //eror handling
    }
})


export default router