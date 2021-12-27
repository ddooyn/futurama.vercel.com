import useSWR from 'swr';
import { API_ENDPOINT } from '../constants';
import { fetcher } from '../utils/fetcher';


export const useQuestionData = () => {
    return useSWR(`${API_ENDPOINT}/questions`, fetcher);
}