import type { NextPage } from 'next'
import axios from 'axios';
import useSWR from 'swr';
import { Character } from '../../types/Characters';
import styled from '@emotion/styled';

const fetcher = (url: string) => axios(url).then((res) => res.data);

const CharactersIndexPage: NextPage = () => {
    const { data, error } = useSWR('https://api.sampleapis.com/futurama/characters', fetcher);

    console.log(data);

    if (error) return <div>An error💥 has occurred.</div>;
    if (!data) return <div>Loading...💫</div>;

    return (
        <CharacterContainer>
            {data.map((character: Character) => {
                const { age, gender, homePlanet, id, images, name, occupation, sayings, species } = character;

                return (
                    <CharacterCard key={`futurama-character-${id}`}>
                        <Profile src={images.main} alt='' />
                        <h2>{name.first} {name.middle} {name.last} ({gender[0]}/{age})</h2>
                        <em><q>{sayings[0]}</q></em>
                        <ul><li>{occupation}</li><li>{species} from {homePlanet}</li></ul>
                    </CharacterCard>
                )
            })}
        </CharacterContainer>
    )
}

const CharacterContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

const CharacterCard = styled.div`
    max-width: 300px;
`

const Profile = styled.img`
    width: 100%;
    aspect-ratio: 9 / 16;
    object-fit: contain;
`

export default CharactersIndexPage