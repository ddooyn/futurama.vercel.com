import styled from '@emotion/styled';
import { EpisodeCard } from './EpisodeCard';
import { useEpisodeData } from '../hooks/useEpisodeData';
import { EpisodeData } from '../types/Episodes';

export const EpisodeContainer = () => {
    const { data, error } = useEpisodeData();

    if (error) return <div>An error💥 has occurred.</div>;
    if (!data) return <div>Loading...💫</div>;

    return (
        <Container>
            {data.map((episode: EpisodeData) => {
                return (
                    <EpisodeCard
                        episodeData={episode}
                        key={`futurama-character-${episode.id}`}
                    />
                )
            })}
        </Container>
    )
}

const Container = styled.div`
    position: block;
    display: flex;
    flex-direction: column;
    margin: 2em auto;
    padding: 2em;
    max-width: 1000px;
    text-align: center;
`