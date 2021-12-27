import useSWR from 'swr';
import { API_ENDPOINT } from '../constants';
import { fetcher } from '../utils/fetcher';


export const useCastData = () => {
    return useSWR(`${API_ENDPOINT}/cast`, fetcher);
}