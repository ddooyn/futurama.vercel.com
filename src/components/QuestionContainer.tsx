import styled from '@emotion/styled';
import { QuestionCard } from './QuestionCard';
import { useQuestionData } from '../hooks/useQuestionData';
import { QuestionData } from '../types/Questions';

export const QuestionContainer = () => {
    const { data, error } = useQuestionData();

    if (error) return <div>An error💥 has occurred.</div>;
    if (!data) return <div>Loading...💫</div>;

    return (
        <Container>
            {data.map((question: QuestionData) => {
                return (
                    <QuestionCard
                        questionData={question}
                        key={`futurama-question-${question.id}`}
                    />
                )
            })}
        </Container>
    )
}

const Container = styled.div`
    position: block;
    display: flex;
    flex-direction: column;
    margin: 2em auto;
    padding: 2em;
    max-width: 1000px;
    text-align: center;
`