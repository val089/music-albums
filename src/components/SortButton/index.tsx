import { IconButton, Stack, Text, Tooltip } from '@chakra-ui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { SortType } from '../../types';
import { I18n } from '../../translations/I18n';

type SortButtonProps = {
  sortDesc: () => void;
  sortAsc: () => void;
  sortBy: SortType;
};

export const SortButton = ({ sortDesc, sortAsc, sortBy }: SortButtonProps) => {
  return (
    <Stack direction={['column', 'row']} spacing="24px" alignItems="center">
      <Tooltip label={<I18n id="text.ascending" />}>
        <IconButton
          _hover={{ bg: 'grey1' }}
          variant="ghost"
          color="secondary"
          aria-label="sort ascending"
          fontSize="20px"
          icon={<ChevronUpIcon />}
          onClick={sortAsc}
        />
      </Tooltip>
      <Text color="white" fontSize={12}>
        <I18n id="text.sortBy" values={{ sortBy }} />
      </Text>
      <Tooltip label={<I18n id="text.descending" />}>
        <IconButton
          _hover={{ bg: 'grey1' }}
          variant="ghost"
          color="secondary"
          aria-label="sort descending"
          fontSize="20px"
          icon={<ChevronDownIcon />}
          onClick={sortDesc}
        />
      </Tooltip>
    </Stack>
  );
};
