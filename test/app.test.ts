import request from 'supertest';
import app from '../src/index';  // Adjust the path if needed

describe('post /api/offer?plan_id=1', () => {
    for(let i =1 ; i<=99;i++){
        it('200 code', async () => {
            const res = await request(app).get(`/api/offer?plan_id=${i}`);
            expect(res.statusCode).toBe(200);
        });
    }
});