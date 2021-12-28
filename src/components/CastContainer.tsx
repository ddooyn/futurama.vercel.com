import styled from '@emotion/styled';
import { CastCard } from './CastCard';
import { useCastData } from '../hooks/useCastData';
import { CastData } from '../types/Cast';

export const CastContainer = () => {
    const { data, error } = useCastData();

    console.log(data);

    if (error) return <div>An error💥 has occurred.</div>;
    if (!data) return <div>Loading...💫</div>;

    return (
        <Container>
            {data.map((cast: CastData) => {
                return (
                    <CastCard
                        castData={cast}
                        key={`futurama-cast-${cast.id}`}
                    />
                )
            })}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 30px 10px;
    margin: 2em auto;
    padding: 5vw;
    max-width: 1200px;
    text-align: center;
`