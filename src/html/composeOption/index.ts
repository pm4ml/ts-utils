import { OptionValue, Option } from '../types';

function composeOption(label: string, value: OptionValue): Option {
  return {
    label,
    value,
  };
}

export default composeOption;
