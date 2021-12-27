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
            <Saying><q>{sayings[0]}</q></Saying>
            <Detail><li>{occupation}</li><li>{species} from {homePlanet}</li></Detail>
        </Card>
    )
}

const Card = styled.div`
    max-width: 400px;
    padding: 20px;
`

const Profile = styled.img`
    width: 100%;
    aspect-ratio: 9 / 16;
    object-fit: contain;
    transition: all 0.2s ease;
    &:hover {
        cursor: pointer;
        transform: translateY(3px);
    }
`

const Saying = styled.em`
    background-color: #eee;
    font-size: 1.4em;
    transition: all 0.2s ease;
    word-break:break-word;
    &:hover {
        cursor: pointer;
        background-color: #ccc;
    }
`

const Detail = styled.ul`
    padding: 0;
    list-style: none;
    text-decoration: underline;
`