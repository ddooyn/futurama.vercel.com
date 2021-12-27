import type { NextPage } from 'next'
import { CharacterContainer } from '../../components/CharacterContainer'
import styled from '@emotion/styled';

const CharactersIndexPage: NextPage = () => {
  return (
    <div>
      <Header>
        <a href="/"><Logo src="img/logo.png" alt='퓨처라마 소개 메인'/></a>
        <Menu>
          <Now><a href="./characters">characters</a></Now>
          <li><a href="./cast">cast</a></li>
          <li><a href="./episodes">episodes</a></li>
          <li><a href="./questions">questions</a></li>
          <li><a href="./inventory">inventory</a></li>
        </Menu>
      </Header>
      <h1>Characters</h1>
      <CharacterContainer />
    </div>
  )
}

const Header = styled.header`
    display: flex;
    margin-bottom: 3em;
    padding: 0 3em;
    background-color: #333;
    color: #eee;
`

const Menu = styled.ul`
    display: flex;
    align-items: center;
    margin-left: auto;
    list-style: none;
    li {
    margin: 0 2em;
}
`

const Logo = styled.img`
  display: inline-block;
  width: 250px;
  object-fit: contain;
`

const Now = styled.li`
  font-weight: bold;
  color: #F2CF66;
`

export default CharactersIndexPage