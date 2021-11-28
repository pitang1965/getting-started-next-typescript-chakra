import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react';

const IndexPage = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.300', 'gray.700');
  return (
    <Flex height='100vh' alignItems='Center' justifyContent='center'>
      <Flex direction='column' background={formBackground} p={12} rounded={6}>
        <Heading mb={6}>ログイン</Heading>
        <Input placeholder='abc@pitang1965.com' variant='filled' mb={3} />
        <Input placeholder='********' variant='filled' mb={6} type='password' />
        <Button mb={6} colorScheme='purple' variant='solid'>
          ログイン
        </Button>
        <Button onClick={toggleColorMode}>カラーモードの切り替え</Button>
      </Flex>
    </Flex>
  );
};

export default IndexPage;
