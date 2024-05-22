//ユニットテストで大事なことは、AAA意識することが大事。AAAとは、Arrange, Act, Assertのこと。
import app from '../index';
import  req  from 'supertest';

describe('/fib/:fibnumber', () => {
  test('fibnumber == 10', async() => {
// Arrange
    const fibnumber = 10;
    const expected = "55";
// Act
    const response = await req(app).get(`/fib/${fibnumber}`);
// Assert
      expect(response.status).toBe(200); // 200ステータスコードが返ってくる。
      expect(response.body.result).toBe(expected); // 期待する値が返ってくる。
  });

  test('fibnumber == 20', async() => {
    // Arrange
    const fibnumber = 20;
    const expected = "6765";

    // Act
    const response = await req(app).get(`/fib/${fibnumber}`);

    // Assert
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(expected);
  });

  test('fibnumber == 30', async() => {
    // Arrange
    const fibnumber = 30;
    const expected = "832040";

    // Act
    const response = await req(app).get(`/fib/${fibnumber}`);

    // Assert
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(expected);
  });

  test('fibnumber == 99', async() => {
    // Arrange
    const fibnumber = 99;
    const expected = "218922995834555169026";

    // Act
    const response = await req(app).get(`/fib/${fibnumber}`);

    // Assert
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(expected);
  });
});
