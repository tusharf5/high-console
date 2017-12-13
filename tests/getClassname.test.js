const getClassnames = require('../index').getClassNames;

test('Print Numbers', () => {
  expect(getClassnames(1, 2)).toBe('1 2');
});

test('Print Strings', () => {
  expect(getClassnames('class', 'another')).toBe('class another');
});

test('Print Array', () => {
  expect(getClassnames(['as', 'asdd'])).toBe('as asdd');
});

test('Print Object', () => {
  expect(getClassnames({ abc: true, cde: false })).toBe('abc');
});

test('Print Functions', () => {
  expect(getClassnames({ abc: () => false, cde: () => true })).toBe('cde');
});

test('Print Bad Values', () => {
  expect(getClassnames(null, undefined)).toBe('');
});

test('Print Bad Values in Object', () => {
  expect(getClassnames({ abs: undefined, cdb: null, abd: 2, cjn: true, askdj: 'sda' })).toBe(
    'cjn askdj'
  );
});

test('Print Bad Values in Functions', () => {
  expect(getClassnames({ abc: () => undefined, cde: () => null, add: () => {} })).toBe(
    ''
  );
});

test('Print Bad Values in Array', () => {
  expect(getClassnames([null, undefined, 1, 'asd', {}])).toBe('1 asd');
});

test('Print hybrid', () => {
  expect(
    getClassnames(
      1,
      2,
      'class',
      'another',
      ['as', 'asdd'],
      { abc: true, cde: false },
      null,
      undefined,
      { abs: undefined, cdb: null, abd: 2, cjn: true, askdj: 'sda' },
      [null, undefined, 1, 'asd', {}],
      { abc: () => false, cde: () => true },
      { abc: () => undefined, cde: () => null, add: () => {} },
      { sdf: true, scf: undefined, abs: undefined, cdb: null, abd: 2, cjn: true, askdj: 'sda' }
    )
  ).toBe('1 2 class another as asdd abc cjn askdj 1 asd cde sdf cjn askdj');
});
