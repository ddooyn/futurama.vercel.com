import styled from '@emotion/styled';
import { CharacterData } from '../types/Characters';

interface CharacterCardProps {
    characterData: CharacterData
}

export const CharacterCard = ( {characterData }: CharacterCardProps) => {
    const { age, gender, homePlanet, id, images, name, occupation, sayings, species } = characterData;
    
    return (
        <Card key={`futurama-character-${id}`}>
            <Profile src={images.main} alt='' />
            <h2>{name.first} {name.middle} {name.last} ({gender[0]}/{age})</h2>
            <em><q>{sayings[0]}</q></em>
            <ul><li>{occupation}</li><li>{species} from {homePlanet}</li></ul>
        </Card>
    )
}

const Card = styled.div`
    max-width: 300px;
`

const Profile = styled.img`
    width: 100%;
    aspect-ratio: 9 / 16;
    object-fit: contain;
`