import type { NextPage } from 'next'
import { EpisodeContainer } from '../../components/EpisodeContainer'
import styled from '@emotion/styled';

const EpisodesIndexPage: NextPage = () => {
  return (
    <div>
      <Header>
        <a href="/"><Logo src="img/logo.png" alt='퓨처라마 소개 메인'/></a>
        <Menu>
          <li><a href="./characters">characters</a></li>
          <li><a href="./cast">cast</a></li>
          <Now><a href="./episodes">episodes</a></Now>
          <li><a href="./questions">questions</a></li>
          <li><a href="./inventory">inventory</a></li>
        </Menu>
      </Header>
      <h1>Episodes</h1>
      <EpisodeContainer />
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

export default EpisodesIndexPage