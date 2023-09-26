export const goToAdotar = (navigate, pet) => {
    navigate(`/adotar`)
}

export const goToDetalheMeuPet = (navigate, id) => {
    navigate(`/meu-pet/${id}`)
}

export const goToHome = (navigate) => {
    navigate("/")
}

export const goToAdotarPetId = (navigate, id) => {
    navigate(`/adotar/${id}`)
}