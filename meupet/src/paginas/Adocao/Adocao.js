import React from 'react'
import SimpleSidebar from '../../componentes/Filtros/Filtros'
import Card from '../../componentes/Card/Card'
import { animaisAdocao } from '../../data'

export function Adocao() {
    return (
        <SimpleSidebar>
            <section>
                {animaisAdocao
                    .filter((pet) => !pet.adocao)
                    .map((pet) => <Card key={pet.id} pet={pet} />)}
            </section>
        </SimpleSidebar>
    )
}
