import { ChakraProvider } from '@chakra-ui/react'
import Card from "./componentes/Card/Card";
import { animaisAdocao } from './data';
function App() {
  return (
    <ChakraProvider>
      {animaisAdocao
        .filter((pet) => !pet.adocao)
        .map((pet) => <Card key={pet.id} pet={pet} />)}
    </ChakraProvider>
  );
}

export default App;
