import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormLabel, FormControl, Input, Button } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { addAlbum } from '../../store/slices/albums';

const errorMessage = 'Uzupełnij pole';

const FormScheme = yup
  .object({
    albumName: yup.string().required(errorMessage),
  })
  .required();

export type FormData = yup.InferType<typeof FormScheme>;

export const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(FormScheme),
  });

  const dispatch = useAppDispatch();

  const onSubmit = (values: FormData) => {
    const createdAt = new Date().toLocaleDateString();
    const id = uuidv4();
    console.log({ ...values, createdAt, id });
    dispatch(addAlbum({ ...values, createdAt, id }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.albumName}>
        <FormLabel htmlFor="albumName">Album name</FormLabel>
        <Input id="albumName" placeholder="Album name" {...register('albumName')} />
        <FormErrorMessage>{!!errors.albumName && errorMessage}</FormErrorMessage>
      </FormControl>
      <Button mt={4} bg="secondary" isLoading={isSubmitting} type="submit">
        ADD ALBUM
      </Button>
    </form>
  );
};
