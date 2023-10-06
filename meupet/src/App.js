import { ChakraProvider } from '@chakra-ui/react'
import { Adocao } from './paginas/Adocao/Adocao';
import Router from './Routes/Router';
import { GlobalStyle } from './GlobalStyles';
function App() {
  return (
    <ChakraProvider>
      {/* <GlobalStyle /> */}
      <Router />
    </ChakraProvider>
  );
}

export default App;
