import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { meusPets } from '../../data'
import { Avatar, Heading, Text } from '@chakra-ui/react'
import img from "../../assets/bicho-de-estimacao.png"
export default function PetDetalhes() {

    const params = useParams()
    console.log(params)
    const [pet, setPet] = useState({})
    useEffect(() => {
        setPet(meusPets.find((pet) => String(pet.id) === params.id))
    }, [])
    pet.img = img
    console.log(pet)
    return (
        <div>
            <Avatar src={img} size='2xl' boxShadow='dark-lg' margin="16px" padding='6px' />
            <Heading>{pet.nome}</Heading>
            <section>
                <Heading>Vacinas</Heading>
                {
                    pet.vacinas ? pet.vacinas.map((vacina) => {
                        return <>
                            <Text>
                                <strong>{vacina.nome}</strong> - lote: {vacina.lote}
                                <br />
                                Próxima: {vacina.reforco}
                            </Text>
                        </>
                    }) :
                        <Text>{pet.nome} ainda não tem vacinas cadastradas :&#x00028;
                        </Text>
                }
            </section>
            <section>
                <Heading>Atendimentos</Heading>
                {
                    pet.vet?.map((vet) => <><Text> <strong>{vet.nome}</strong> <br />última visita: {vet.ultimaVisita}</Text> <Text><br />{vet.agendamento && `próximo agendamento: ${vet.agendamento}`}</Text></>)
                }
            </section>
            <section>
                <Heading>Exames</Heading>
                {/* {
                    pet.exames && pet.exames.map((exame) => <><Text> <strong>{exame.nome}</strong> <br />Data: {exame.data}</Text> <Text><br />{exame.agendamento && `próximo agendamento: ${exame.agendamento}`}</Text></>)
                } */}
            </section>
        </div>
    )
}
