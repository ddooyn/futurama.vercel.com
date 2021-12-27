import styled from '@emotion/styled';
import { EpisodeData } from '../types/Episodes';

interface EpisodeCardProps {
    episodeData: EpisodeData
}

export const EpisodeCard = ( { episodeData }: EpisodeCardProps) => {
    const { number, title, writers, originalAirDate, desc, id } = episodeData;
    
    return (
        <Card key={`futurama-episode-${id}`}>
            <details>
            <Title>
                <h2>{number} {title}</h2>
                <strong>{originalAirDate}</strong>
            </Title>
                <em>writer: {writers}</em>
                <Desc>{desc}</Desc>
            </details>
        </Card>
    )
}

const Card = styled.div`
    margin-bottom: 20px;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 100%;
    &:hover {
        background-color: #eee;
        h2 {
            color: #fff;
            background-color: #F2A03D;
        }
    }
`

const Title = styled.summary`
    cursor: pointer;
    list-style: none;
`

const Desc = styled.p`
    padding: 0 7vw;
`