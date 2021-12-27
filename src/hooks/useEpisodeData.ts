import useSWR from 'swr';
import { API_ENDPOINT } from '../constants';
import { fetcher } from '../utils/fetcher';


export const useEpisodeData = () => {
    return useSWR(`${API_ENDPOINT}/episodes`, fetcher);
}