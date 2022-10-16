import en from './languages/en';
import pl from './languages/pl';

const messages = {
  en,
  pl,
} as const;

export type Locale = keyof typeof messages;

export default messages;
