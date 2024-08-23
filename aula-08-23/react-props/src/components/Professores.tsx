import styled from 'styled-components'

const DivProf = styled.div`
    border: 2px solid black;
    background-color: #ffc;
    h2{
        font-weight: 600;
        font-family: 'Segoe UI', Tahoma,Verdana, sans-serif;
        color: peru;
    }
`

export default function Professores(){
    return(
        <DivProf>
            <h2>Lista de Professores</h2>
            <ul>
                <li>Luis</li>
                <li>Éder Pereira</li>
                <li>Loco do java</li>
            </ul>
        </DivProf>
    )
}