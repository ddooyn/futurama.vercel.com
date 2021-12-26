import Head from 'next/head'
import useSWR from 'swr'
import axios from 'axios'
import { Info } from '../types/Info';

const fetcher = (url: string) => axios(url).then((res) => res.data);

export default function Home() {
  const { data, error } = useSWR('https://api.sampleapis.com/futurama/info', fetcher)

  if (error) return <div>An error💥 has occurred.</div>;
  if (!data) return <div>Loading...💫</div>;

  return (
    <div>
      <Head>
        <title>Futurama Information</title>
        <meta name="Futurama" content="퓨처라마 사이트 만들기 야나두🙋" />
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      </Head>
      <main>
        <h1>Futurama</h1>
        <div><strong>Creator</strong>: {
          data[0].creators.map((creator: Info['creators']) => {
            return <p key={`creator-${creator.name}`}>{creator.name}</p>
          })
          }
          </div>
        <h2>Menu</h2>
        <ul>
          <li><a href="./characters">characters</a></li>
          <li><a href="./cast">cast</a></li>
          <li><a href="./episodes">episodes</a></li>
          <li><a href="./questions">questions</a></li>
          <li><a href="./inventory">inventory</a></li>
        </ul>
      </main>
    </div>
  )
}