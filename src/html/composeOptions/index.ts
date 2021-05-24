import { OptionValue, Option } from '../types';
import composeOption from '../composeOption';

function composeOptions(options: Record<string, OptionValue>): Option[] {
  return Object.entries(options).map(([label, value]) => {
    return composeOption(label, value);
  });
}

export default composeOptions;
