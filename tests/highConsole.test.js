const HighConsole = require('../index').HighConsole;

let highConsole = new HighConsole();

test('Need Instantiation', () => {
  expect(getClassnames(1, 2)).toBe('1 2');
});

test('Log String', () => {
  expect(getClassnames('class', 'another')).toBe('class another');
});

test('Log Number', () => {
  expect(getClassnames(['as', 'asdd'])).toBe('as asdd');
});

test('Log undefined', () => {
  expect(getClassnames({ abc: true, cde: false })).toBe('abc');
});

test('Log null', () => {
  expect(getClassnames({ abc: () => false, cde: () => true })).toBe('cde');
});

test('Log Array', () => {
  expect(getClassnames(null, undefined)).toBe('');
});

test('Log Object', () => {
  expect(getClassnames({ abs: undefined, cdb: null, abd: 2, cjn: true, askdj: 'sda' })).toBe(
    'cjn askdj'
  );
});
