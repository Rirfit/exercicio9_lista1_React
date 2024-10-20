function Nivel(props){
    let nivel = props.nivel

    return (
        <>
        {nivel === 'iniciante' ? ('Bem-vindo, iniciante!')
            : nivel === 'intermediario' ? ('Você está progredindo')
            : nivel === 'avançado' ? ('Parabéns, especialista!')
            : ('Nivel desconhecido')
        }
        </>
    )
}
export default Nivel