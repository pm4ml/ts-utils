import composeOption from './composeOption';
import composeOptions from './composeOptions';

describe('tests the composeOption(s) utility methods', () => {
  it('Should build the correct pair', () => {
    expect(composeOption('label', 'value')).toStrictEqual({
      label: 'label',
      value: 'value',
    });
  });

  it('Should build the multiple correct pairs', () => {
    expect(composeOptions({ label: 'value', label2: 'value2' })).toStrictEqual([
      { label: 'label', value: 'value' },
      { label: 'label2', value: 'value2' },
    ]);
  });

  it('Accepts the type number as value', () => {
    expect(composeOption('label', 10)).toStrictEqual({
      label: 'label',
      value: 10,
    });
  });
});
