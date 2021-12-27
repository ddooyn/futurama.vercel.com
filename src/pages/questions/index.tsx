import type { NextPage } from 'next'
import { QuestionContainer } from '../../components/QuestionContainer'
import styled from '@emotion/styled';
import Link from 'next/link'

const QuestionsIndexPage: NextPage = () => {
  return (
    <div>
      <Header>
        <Link href="/"><a><Logo src="img/logo.png" alt='퓨처라마 소개 메인'/></a></Link>
        <Menu>
          <li><Link href="/characters"><a>characters</a></Link></li>
          <li><Link href="/cast"><a>cast</a></Link></li>
          <li><Link href="/episodes"><a>episodes</a></Link></li>
          <Now><Link href="/questions"><a>questions</a></Link></Now>
          <li><Link href="/inventory"><a>inventory</a></Link></li>
        </Menu>
      </Header>
      <h1>Questions</h1>
      <QuestionContainer />
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

export default QuestionsIndexPage