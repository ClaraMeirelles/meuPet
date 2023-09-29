import React from 'react'
import { meusPets } from '../../data'
import Card from '../../componentes/Card/Card'
import { goToDetalheMeuPet } from '../../Routes/coordinator'

export function MeusPets() {
    return (
        <div>
            {meusPets.map((pet) => {
                return <Card key={pet.id} pet={pet} trocarPagina={goToDetalheMeuPet} />
            })}
        </div>
    )
}
