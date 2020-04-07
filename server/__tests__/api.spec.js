import supertest from 'supertest';
import app from '../src';

describe('Sold houses endpoint', () => {
  it('should return an array', async () => {
    const res = await supertest(app)
      .get('/api/sold-houses');
    expect(res.statusCode).toEqual(200);
    res.body.forEach((house) => {
      expect(Object.keys(house)).toEqual(['x', 'y', 'price', 'percentile']);
    });
  });
});
