import { IconButton, Flex, Text, Tooltip } from '@chakra-ui/react';
import { DeleteIcon, StarIcon } from '@chakra-ui/icons';
import { AlbumType } from '../../types';
import { I18n } from '../../translations/I18n';
import { useAppSelector } from '../../hooks/reduxHooks';

type AlbumItemProps = {
  album: AlbumType;
  addToBest?: () => void;
  handleDelete: () => void;
  isGridList?: boolean;
};

const MAX_TEXT_LENGTH = 20;

const cutText = (text: string) => {
  if (text.length > MAX_TEXT_LENGTH) {
    return `${text.slice(0, MAX_TEXT_LENGTH)}...`;
  }

  return text;
};

export const AlbumItem = ({
  album,
  addToBest,
  handleDelete,
  isGridList = false,
}: AlbumItemProps) => {
  const bestAlbums = useAppSelector((state) => state.albums.bestAlbums);

  const isInBestAlbums = !!bestAlbums.find((item) => item.id === album.id);

  return (
    <Flex
      key={album.id}
      justifyContent="space-between"
      mb="10px"
      bg="darkGrey"
      alignItems="center"
      p="10px"
      borderRadius="10px"
    >
      {isGridList ? (
        <Text color="white" fontSize={14} w={100} wordBreak="break-all" pr="10px">
          {cutText(album.albumName)}
        </Text>
      ) : (
        <>
          <Text color="white" fontSize={14} wordBreak="break-all" pr="10px">
            {cutText(album.albumName)}
          </Text>
        </>
      )}

      <Flex
        alignItems="center"
        direction={{ base: isGridList ? 'column' : 'row', md: 'row' }}
        gap={'10px'}
      >
        <Text color="white" fontSize={14} pr="10px">
          {album.createdAt}
        </Text>
        <Tooltip label={<I18n id="text.remove" />}>
          <IconButton
            _hover={{ bg: 'grey1' }}
            bg="primary"
            onClick={handleDelete}
            aria-label="Delete album"
            icon={<DeleteIcon color="danger" onClick={handleDelete} />}
          />
        </Tooltip>
        {addToBest && (
          <Tooltip
            label={
              isInBestAlbums ? (
                <I18n id="text.removeFromBestOfTheBest" />
              ) : (
                <I18n id="text.setAsBestOfTheBest" />
              )
            }
          >
            <IconButton
              _hover={{ bg: 'grey1' }}
              bg="primary"
              aria-label="Add to best albums"
              onClick={addToBest}
              icon={<StarIcon color={isInBestAlbums ? 'secondary' : 'grey1'} />}
            />
          </Tooltip>
        )}
      </Flex>
    </Flex>
  );
};
