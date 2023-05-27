import { ChakraProvider } from '@chakra-ui/react'

import WithSubnavigation from './componentes/Header/Header';
import Adocao from './paginas/Adocao/Adocao';
function App() {
  return (
    <ChakraProvider>
      <WithSubnavigation />
      <Adocao />
    </ChakraProvider>
  );
}

export default App;
