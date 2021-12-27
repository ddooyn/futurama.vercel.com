import styled from '@emotion/styled';
import { CharacterCard } from './CharacterCard';
import { useCharacterData } from '../hooks/useCharacterData';
import { CharacterData } from '../types/Characters';

export const CharacterContainer = () => {
    const { data, error } = useCharacterData();

    if (error) return <div>An error💥 has occurred.</div>;
    if (!data) return <div>Loading...💫</div>;

    return (
        <Container>
            {data.map((character: CharacterData) => {
                return (
                    <CharacterCard
                        characterData={character}
                        key={`futurama-character-${character.id}`}
                    />
                )
            })}
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    grid-auto-rows: minmax(500px, auto);
    gap: 10px;
    padding-left: 2em;
    text-align: center;
`