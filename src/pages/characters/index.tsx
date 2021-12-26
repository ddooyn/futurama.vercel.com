import type { NextPage } from 'next'
import { CharacterCardContainer } from '../../components/CharacterCardContainer'

const CharactersIndexPage: NextPage = () => {
    return (
        <div>
            <h1>Characters</h1>
            <CharacterCardContainer />
        </div>
    )
}

export default CharactersIndexPage