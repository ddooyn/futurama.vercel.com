import type { NextPage } from 'next'
import { CharacterContainer } from '../../components/CharacterContainer'
import styled from '@emotion/styled';
import Link from 'next/link'

const CharactersIndexPage: NextPage = () => {
  return (
    <div>
      <Header>
        <Link href="/"><a><Logo src="img/logo.png" alt='퓨처라마 소개 메인'/></a></Link>
        <Menu>
          <Now><Link href="/characters"><a>characters</a></Link></Now>
          <li><Link href="/cast"><a>cast</a></Link></li>
          <li><Link href="/episodes"><a>episodes</a></Link></li>
          <li><Link href="/questions"><a>questions</a></Link></li>
          <li><Link href="/inventory"><a>inventory</a></Link></li>
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
    margin: 0 10px;
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