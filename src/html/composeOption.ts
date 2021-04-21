import { OptionValue } from './types';

function composeOption(label: string, value: OptionValue) {
  return {
    label,
    value,
  };
}

export default composeOption;
