import styled from '@emotion/styled';
import { CharacterCard } from './CharacterCard';
import { useCharacterData } from '../hooks/useCharacterData';
import { CharacterData } from '../types/Characters';

export const CharacterCardContainer = () => {
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
    grid-template-columns: repeat(3, 1fr);
`