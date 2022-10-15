import { FormattedMessage } from 'react-intl';
import { Props } from 'react-intl/src/components/message';

import { I18nKey } from './types';

export interface I18nProps extends Props {
  id: I18nKey;
}

export const I18n: React.FC<I18nProps> = (props) => <FormattedMessage {...props} />;
