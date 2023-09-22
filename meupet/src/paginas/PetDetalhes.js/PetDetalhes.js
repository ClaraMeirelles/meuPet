import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { meusPets } from '../../data'
import { Heading } from '@chakra-ui/react'

export default function PetDetalhes() {
    const params = useParams()
    console.log(params)
    const [pet, setPet] = useState({})
    useEffect(() => {
        setPet(meusPets.find((pet) => String(pet.id) === params.id))
    }, [])
    console.log(pet)
    return (
        <div>
            <Heading>{pet.nome}</Heading>

        </div>
    )
}
