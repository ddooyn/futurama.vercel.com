import type { NextPage } from 'next'
import axios from 'axios';
import useSWR from 'swr';
import { Character } from '../../types/Characters';

const fetcher = (url: string) => axios(url).then((res) => res.data);

const CharactersIndexPage: NextPage = () => {
    const { data, error } = useSWR('https://api.sampleapis.com/futurama/characters', fetcher);

    console.log(data);

    if (error) return <div>An error💥 has occurred.</div>;
    if (!data) return <div>Loading...💫</div>;

    return (
        <div>
            {data.map((character: Character) => {
                const { age, gender, homePlanet, id, images, name, occupation, sayings, species } = character;

                return (
                    <div key={`futurama-character-${id}`}>
                        <img src={images.main} alt='' />
                        <h2>{name.first} {name.middle} {name.last} ({age})</h2>
                        <strong><p>{species} from {homePlanet}</p></strong>
                        <em><q>{sayings[0]}</q></em>
                        <p>occupation: {occupation}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default CharactersIndexPage