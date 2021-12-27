import styled from '@emotion/styled';
import { CastData } from '../types/Cast';

interface CastCardProps {
    castData: CastData
}

export const CastCard = ( {castData }: CastCardProps) => {
    const { name, born, died, bio, id } = castData;
    
    return (
        <Card key={`futurama-cast-${id}`}>
            <a href={bio['url']}><Name>{name}</Name></a>
            <em>({born} - {died})</em>
        </Card>
    )
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    border: 1px solid #eee;
    border-radius: 10px;
    width: 300px;
`

const Name = styled.h2`
    &:hover {
    background-color: #F2CF66;
    }
`