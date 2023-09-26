import {
    Tag,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { goToDetalheMeuPet } from '../../Routes/coordinator';
import { useNavigate } from 'react-router-dom';

export default function Card({ pet, trocarPagina }) {
    const navigate = useNavigate()

    const corTags = useColorModeValue('gray.50', 'gray.800')
    const corTexto = useColorModeValue('gray.700', 'gray.400')

    return (
        <Center py={6}>
            <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: '100%', md: '540px' }}
                height={{ sm: '476px', md: '20rem' }}
                direction={{ base: 'column', md: 'row' }}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                padding={4}>
                <Flex flex={1} bg="blue.200">
                    <Image
                        objectFit="cover"
                        boxSize="100%"
                        src={
                            `https://picsum.photos/id/237/200/200`
                        }
                    />
                </Flex>
                <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={1}
                    pt={2}>
                    <Heading fontSize={'2xl'} fontFamily={'body'}>
                        {pet.nome}
                    </Heading>
                    <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                        @{pet.idProtetora}
                    </Text>

                    {!pet.adocao ?
                        <Text
                            textAlign={'center'}
                            color={corTexto}
                            px={3}>
                            "descrição bonitinha de como o pet é, mas curta"
                        </Text> :
                        pet.vacinas.map((vacina) => <><Text> <strong>{vacina.nome}</strong> <br />Próxima: {vacina.reforco}</Text></>)}
                    {!pet.adocao &&
                        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                            <Tag
                                px={2}
                                py={1}
                                bg={corTags}
                                fontWeight={'400'}>
                                {pet.sexo}
                            </Tag>
                            <Tag
                                px={2}
                                py={1}
                                bg={corTags}
                                fontWeight={'400'}>
                                porte {pet.porte.toLowerCase()}
                            </Tag>
                        </Stack>}

                    <Stack
                        width={'100%'}
                        mt={'2rem'}
                        direction={'row'}
                        padding={2}
                        justifyContent={'space-between'}
                        alignItems={'center'}>
                        <Button
                            flex={1}
                            fontSize={'sm'}
                            rounded={'full'}
                            bg={'#612096c7'}
                            color={'white'}
                            boxShadow={
                                '0px 1px 25px -5px #612096, 0 10px 10px -5px #61209699'
                            }
                            _hover={{
                                bg: '#612096',
                            }}
                            _focus={{
                                bg: '#612096',
                            }}
                            onClick={() => trocarPagina(navigate, pet.id)}>
                            Mais detalhes
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Center >
    );
}