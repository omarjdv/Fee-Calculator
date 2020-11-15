import { formatMoney } from './formatMoney';

describe('format money utils', () => {
  test('format small amount', () => {
    const amount = 500;
    const expectedResult = '$500,00';
    const result = formatMoney(amount);
    expect(result).toBe(expectedResult);
  });

  test('format medium amount', () => {
    const amount = 4835;
    const expectedResult = '$4.835,00';
    const result = formatMoney(amount);
    expect(result).toBe(expectedResult);
  });

  test('format big amount', () => {
    const amount = 15500;
    const expectedResult = '$15.500,00';
    const result = formatMoney(amount);
    expect(result).toBe(expectedResult);
  });

  test('format amount width decimals', () => {
    const amount = 12377.45;
    const expectedResult = '$12.377,45';
    const result = formatMoney(amount);
    expect(result).toBe(expectedResult);
  });

  test('format null amount', () => {
    const amount = 0;
    const expectedResult = '$0,00';
    const result = formatMoney(amount);
    expect(result).toBe(expectedResult);
  });
  // eslint-disable no-trailing-spaces */"
  test('return null with not numeric values', () => {
    const amount = 'abc';
    const result = formatMoney(amount);
    expect(result).toBeNull();
  });

  test('format negative amount', () => {
    const amount = -6;
    const expectedResult = '-$6,00';
    const result = formatMoney(amount);
    expect(result).toBe(expectedResult);
  });

  test('format negative amount with thousands and decimals', () => {
    const amount = -100456.65;
    const expectedResult = '-$100.456,65';
    const result = formatMoney(amount);
    expect(result).toBe(expectedResult);
  });
});
