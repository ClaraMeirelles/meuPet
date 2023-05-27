import { ChakraProvider, Flex } from '@chakra-ui/react'
import Card from "./componentes/Card/Card";
import { animaisAdocao } from './data';
import SimpleSidebar from './componentes/Filtros/Filtros';
import WithSubnavigation from './componentes/Header/Header';
function App() {
  return (
    <ChakraProvider>
      {/* <Flex > */}
      <WithSubnavigation />
      <SimpleSidebar>

        <section>
          {animaisAdocao
            .filter((pet) => !pet.adocao)
            .map((pet) => <Card key={pet.id} pet={pet} />)}
        </section>
      </SimpleSidebar>
      {/* </Flex> */}
    </ChakraProvider>
  );
}

export default App;
