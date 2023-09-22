import { ChakraProvider } from '@chakra-ui/react'
import { Adocao } from './paginas/Adocao/Adocao';
import Router from './Routes/Router';
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Adocao />
      </Router>
    </ChakraProvider>
  );
}

export default App;
