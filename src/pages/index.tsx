import Head from 'next/head'
import useSWR from 'swr'
import { fetcher } from '../utils/fetcher';
import { InfoData } from '../types/Info';
import styled from '@emotion/styled';

export default function Home() {
  const { data, error } = useSWR('https://api.sampleapis.com/futurama/info', fetcher)

  if (error) return <div>An error💥 has occurred.</div>;
  if (!data) return <div>Loading...💫</div>;

  console.log(data)

  return (
    <div>
      <Head>
        <title>Futurama Information</title>
        <meta name="Futurama" content="퓨처라마 사이트 만들기 야나두🙋" />
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      </Head>
      <Header>
        <a href="/"><Logo src="img/logo.png" alt='퓨처라마 소개 메인'/></a>
        <Menu>
          <li><a href="./characters">characters</a></li>
          <li><a href="./cast">cast</a></li>
          <li><a href="./episodes">episodes</a></li>
          <li><a href="./questions">questions</a></li>
          <li><a href="./inventory">inventory</a></li>
        </Menu>
      </Header>
      <Main>
        <h1>🌏 Welcome to FUTURAMA Information !</h1>
        <IndexImg src="img/index.jpg" alt='퓨처라마 포스터'/>
        <div><strong>- Creator -</strong> {
          data[0].creators.map((creator: InfoData['creators']) => {
            return <p key={`creator-${creator.name}`}>{creator.name}</p>
          })
          }
          </div>
          <Desc>{data[0].synopsis}</Desc>
          <Years>{data[0].yearsAired}</Years>
      </Main>
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

const Main = styled.main`
  text-align: center;
`

const Logo = styled.img`
  display: inline-block;
  width: 250px;
  object-fit: contain;
`

const IndexImg = styled.img`
  margin-bottom: 2em;
  width: 60%;
`

const Desc = styled.p`
  text-align: left;
  padding: 0 15vw;
  word-break:break-all;
  line-height: 1.6em;
  &:first-letter {
    font-size: 3em;
  }
`

const Years = styled.em`
  display: inline-block;
  margin: 3em auto;
`