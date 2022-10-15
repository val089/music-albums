import { MessageDescriptor } from 'react-intl';

import en from './languages/en';

export interface TypedMessageDescriptor extends MessageDescriptor {
  id: I18nKey;
}

export type Translation = Record<keyof typeof en, string>;

export type I18nKey = keyof Translation;

export type I18nValues = Record<string, string | number>;

export type I18nFn = (descriptor: TypedMessageDescriptor, values?: I18nValues) => string;

export type EnLabels = keyof typeof en;
