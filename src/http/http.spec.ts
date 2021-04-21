import is200 from './is200';
import is201 from './is201';
import is204 from './is204';
import is20x from './is20x';
import is400 from './is400';
import is401 from './is401';
import is403 from './is403';
import is404 from './is404';
import is422 from './is422';
import is40x from './is40x';
import is500 from './is500';
import is50x from './is50x';

function testWrongCodes(tester, skipStatusCode) {
  const statusCodes = [100, 200, 300, 400, 500];
  statusCodes
    .filter(statusCode => statusCode !== skipStatusCode)
    .forEach(statusCode => {
      expect(tester(statusCode)).toBe(false);
    });
}

describe('tests the HTTP status code testers', () => {
  it('Should test for the 200 status code', () => {
    expect(is200(200)).toBe(true);
    testWrongCodes(is200, 200);
  });
  it('Should test for the 201 status code', () => {
    expect(is201(201)).toBe(true);
    testWrongCodes(is201, 200);
  });
  it('Should test for the 204 status code', () => {
    expect(is204(204)).toBe(true);
    testWrongCodes(is204, 200);
  });
  it('Should test for the 400 status code', () => {
    expect(is400(400)).toBe(true);
    testWrongCodes(is400, 400);
  });
  it('Should test for the 401 status code', () => {
    expect(is401(401)).toBe(true);
    testWrongCodes(is401, 400);
  });
  it('Should test for the 403 status code', () => {
    expect(is403(403)).toBe(true);
    testWrongCodes(is403, 400);
  });
  it('Should test for the 404 status code', () => {
    expect(is404(404)).toBe(true);
    testWrongCodes(is404, 400);
  });
  it('Should test for the 422 status code', () => {
    expect(is422(422)).toBe(true);
    testWrongCodes(is422, 400);
  });
  it('Should test for the 500 status code', () => {
    expect(is500(500)).toBe(true);
    testWrongCodes(is500, 500);
  });
  it('Should test for the 20x status codes', () => {
    expect(is20x(200)).toBe(true);
    expect(is20x(201)).toBe(true);
    expect(is20x(299)).toBe(true);
    testWrongCodes(is20x, 200);
  });
  it('Should test for the 40x status codes', () => {
    expect(is40x(400)).toBe(true);
    expect(is40x(401)).toBe(true);
    expect(is40x(499)).toBe(true);
    testWrongCodes(is40x, 400);
  });
  it('Should test for the 50x status codes', () => {
    expect(is50x(500)).toBe(true);
    expect(is50x(501)).toBe(true);
    expect(is50x(599)).toBe(true);
    testWrongCodes(is50x, 500);
  });
});
