import styled from "styled-components"

export const DadosPet = styled.section`
    wrap: wrap;
    overflow-y: scroll;
    padding: 6px;
    flex-grow:1;
    @media screen and (max-device-width: 800px){
        max-height: 80vh ;
        width: 90vw ;
    }
    @media screen and (min-device-width: 801px){
        max-height: 55vh;
        max-width: 30vw;
    }
`

export const PesoPet = styled.section`
    padding: 1%;
    display: flex;  
    flex-direction: column;
    align-items: center;
   @media screen and (max-device-width: 800px){
    width: 90vw ;
   }
   @media screen and (min-device-width: 801px){
    width: 15vw ;
   }
   
`