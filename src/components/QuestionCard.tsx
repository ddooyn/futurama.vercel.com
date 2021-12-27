import styled from '@emotion/styled';
import { QuestionData } from '../types/Questions';

interface QuestionCardProps {
    questionData: QuestionData
}

export const QuestionCard = ( { questionData }: QuestionCardProps) => {
    const { id, question, possibleAnswers, correctAnswer } = questionData;

    return (
        <Card key={`futurama-question-${id}`}>
            <h2>{id}</h2>
            <Question>{question}</Question>
            {possibleAnswers.map((value,index) => {
                return <AnswerList>{index + 1}. {value}</AnswerList>;
            })}
            <Answer><em>{correctAnswer}</em></Answer>
        </Card>
    )
}

const Card = styled.div`
    margin-bottom: 20px;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 100%;
    &:hover {
        border: 1px solid #f2a03d;
        h2 {
            color: #f2a03d;
        }
    }
`

const Question = styled.strong`
    display: block;
    margin-bottom: 1.6em;
`

const AnswerList = styled.p`
    display: flex;
    margin: 0 2em;
    line-height: 1.4em;
`

const Answer = styled.p`
    display: inline-block;
    margin: 2em 0 -5px;
    width: 200px;
    background-color: #333;
    cursor: pointer;
    &: active {
        background-color: transparent;
    }
`