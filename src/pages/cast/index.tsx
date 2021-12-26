import type { NextPage } from 'next'
import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url: string) => axios(url).then((res) => res.data);

const CastIndexPage: NextPage = () => {
    const { data, error } = useSWR('https://api.sampleapis.com/futurama/cast', fetcher);

    console.log(data);

    if (error) return <div>An error💥 has occurred.</div>;
    if (!data) return <div>Loading...💫</div>;

    return (
        <div>

        </div>
    )
}

export default CastIndexPage