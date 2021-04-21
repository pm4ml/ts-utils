import { OptionValue } from './types';
import composeOption from './composeOption';

function composeOptions (options: Record<string, OptionValue>) {
  return Object.entries(options).map(([label, value]) => {
    return composeOption(label, value);
  });
};

export default composeOptions;