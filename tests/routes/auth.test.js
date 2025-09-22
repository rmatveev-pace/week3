// tests/routes/auth.test.js
const request = require('supertest');
const app = require('../../server');

describe('Auth Routes', () => {
    it('should sign up a user', async () => {
        const res = await request(app)
            .post('/api/auth/signup')   // prefix + lowercase
            .send({
                name: 'Test User',
                username: 'testuser',
                email: 'test@example.com',
                password: 'secret123'
            });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.email).toBe('test@example.com');
    });

    it('should log in a user', async () => {
        const res = await request(app)
            .post('/api/auth/login')    // prefix + lowercase
            .send({
                emailOrUsername: 'test@example.com',
                password: 'secret123'
            });
        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBe(true);
    });
});
