import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormLabel, FormControl, Input, Button } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { addAlbum } from '../../store/slices/albums';
import { I18n } from '../../translations/I18n';

const errorMessage = 'Uzupełnij pole';

const FormScheme = yup
  .object({
    albumName: yup.string().required(),
  })
  .required();

export type FormData = yup.InferType<typeof FormScheme>;

export const Form = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(FormScheme),
  });

  const dispatch = useAppDispatch();

  const onSubmit = (values: FormData) => {
    const createdAt = new Date().toLocaleDateString();
    const id = uuidv4();
    const album = { ...values, createdAt, id };
    dispatch(addAlbum(album));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.albumName}>
        <FormLabel color="white" htmlFor="albumName">
          <I18n id="text.albumName" />
        </FormLabel>
        <Input color="white" id="albumName" {...register('albumName')} />
        <FormErrorMessage>{!!errors.albumName && <I18n id="text.fillTheField" />}</FormErrorMessage>
      </FormControl>
      <Button
        _hover={{ bg: 'green1' }}
        mt={4}
        bg="secondary"
        isLoading={isSubmitting}
        type="submit"
      >
        <I18n id="text.addToList" />
      </Button>
    </form>
  );
};
