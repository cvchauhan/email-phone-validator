// test.ts
import { isValidEmail, isValidPhoneNumber } from '../src/index';

test('valid email', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
});

test('invalid email', () => {
    expect(isValidEmail('invalid-email')).toBe(false);
});

test('valid phone number with country code', () => {
    expect(isValidPhoneNumber('+123-456-7890')).toBe(true);
});

test('valid phone number with area code', () => {
    expect(isValidPhoneNumber('(123) 456-7890')).toBe(true);
});

test('valid phone number with different separators', () => {
    expect(isValidPhoneNumber('123.456.7890')).toBe(true);
    expect(isValidPhoneNumber('123 456 7890')).toBe(true);
});

test('invalid phone number', () => {    
    expect(isValidPhoneNumber('abcd')).toBe(false);    
});
