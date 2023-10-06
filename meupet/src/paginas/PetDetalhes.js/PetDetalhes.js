import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { meusPets } from '../../data'
import { Avatar, Center, Flex, Heading, Text } from '@chakra-ui/react'
import img from "../../assets/bicho-de-estimacao.png"
import { DadosPet, PesoPet } from './styled'
export default function PetDetalhes() {

    const params = useParams()
    const [pet, setPet] = useState({})
    useEffect(() => {
        setPet(meusPets.find((pet) => String(pet.id) === params.id))
    }, [])
    pet.img = img
    return (
        <Flex
            flexDirection={'column'}
            alignItems={'center'}
            width={"98vw"}
            maxHeight={"90vh"}
            justifyItems={"center"}
        >
            <Avatar src={img} size='2xl' boxShadow='dark-lg' margin="16px" padding='6px' />
            <Heading>{pet.nome}</Heading>
            <Flex
                width={"100%"}
                wrap={"wrap"}
                padding={"0 16px"}
            >
                <Flex
                    justify={'space-evenly'}
                    width={"75vw"}
                    flexGrow={"5"}
                    flexWrap={"wrap"}
                >

                    <DadosPet>
                        <Heading>Vacinas</Heading>
                        {
                            pet.vacinas ? pet.vacinas.map((vacina) => {
                                return (
                                    <Text key={vacina.nome + vacina.nome}>
                                        <strong>{vacina.nome}</strong> - lote: {vacina.lote}
                                        <br />
                                        Próxima: {vacina.reforco}
                                    </Text>
                                )
                            }) :
                                <Text>{pet.nome} ainda não tem vacinas cadastradas :&#x00028;
                                </Text>
                        }
                    </DadosPet>
                    <DadosPet>
                        <Heading>Atendimentos</Heading>
                        {
                            pet.vet?.map((vet) => {
                                return <section key={vet.id}>
                                    <Heading size={'md'}><strong>{vet.nome}</strong></Heading>
                                    <p>última visita: {vet.ultimaVisita}</p>
                                    <p>{vet.agendamento && `próximo agendamento: ${vet.agendamento}`}</p>
                                    <h4>Histórico de visitas:</h4>
                                    {vet.visitas?.map((visita) => {
                                        return (
                                            <section key={visita.data}>
                                                <p><strong>{visita.data}</strong>- {visita.motivo}</p>
                                                <hr />
                                            </section>
                                        )
                                    })}
                                    <hr />
                                    <hr />
                                    <hr />
                                    <hr />
                                </section>
                            })
                        }
                    </DadosPet >
                    <DadosPet>
                        <Heading>Exames</Heading>
                        {
                            pet.exames && pet.exames.map((exame) => {
                                return (
                                    <section key={exame.id}>
                                        <Text> <strong>{exame.nome}</strong> <br />Data: {exame.data}</Text>
                                        <Text>{exame.agendamento && `próximo agendamento: ${exame.agendamento}`}</Text>
                                    </section>
                                )
                            })
                        }
                    </DadosPet>
                </Flex>
                <DadosPet>
                    <Heading size={'md'} alignSelf={'center'}>Histórico de peso</Heading>
                    {pet.peso?.map((peso) => {
                        return <Text key={peso.id}><strong>{peso.data}</strong> - {peso.valor}Kg</Text>
                    })}
                </DadosPet>
            </Flex>
        </Flex >
    )
}
