import { Grid, GridItem } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../components/ColorModeSwitcher';
import { Form } from '../../components/Form';

export const HomePage = () => {
  return (
    <Grid
      templateAreas={`"header header"
                  "form main"`}
      gridTemplateRows={'100px 1fr'}
      gridTemplateColumns={'500px 1fr'}
      h="100vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="orange.300" area={'header'}>
        <ColorModeSwitcher justifySelf="flex-end" />
      </GridItem>
      <GridItem pl="2" area={'form'}>
        <Form />
      </GridItem>
      <GridItem pl="2" bg="green.300" area={'main'}>
        Main
      </GridItem>
    </Grid>
  );
};
