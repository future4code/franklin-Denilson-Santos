
export const CardCandidato = (props) => {
    const { candidatoTexto, profissao, idade, nome, pais } = props.candidato

    return (
        <div>
            <p><b>Nome:</b> {nome}</p>
            <p><b>Profissão:</b> {profissao}</p>
            <p><b>Idade:</b> {idade}</p>
            <p><b>País:</b> {pais}</p>
            <p><b>Texto de Candidatura:</b> {candidatoTexto}</p>
        </div>
    )
}