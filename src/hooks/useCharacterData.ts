import useSWR from 'swr';
import { API_ENDPOINT } from '../constants';
import { fetcher } from '../utils/fetcher';


export const useCharacterData = () => {
    return useSWR(`${API_ENDPOINT}/characters`, fetcher);
}