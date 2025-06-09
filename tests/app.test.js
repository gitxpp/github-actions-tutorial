const request = require('supertest');
const { app, add, multiply } = require('../app');

describe('Express App', () => {
  test('GET / should return welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello GitHub Actions!');
    expect(response.body.timestamp).toBeDefined();
  });

  test('GET /health should return OK status', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('OK');
  });

  test('POST /echo should echo the message', async () => {
    const testMessage = 'Test message';
    const response = await request(app)
      .post('/echo')
      .send({ message: testMessage });
    
    expect(response.status).toBe(200);
    expect(response.body.echo).toBe(`Echo: ${testMessage}`);
  });
});

describe('Math Functions', () => {
  test('add function should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  test('multiply function should multiply two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(0, 5)).toBe(0);
  });
});