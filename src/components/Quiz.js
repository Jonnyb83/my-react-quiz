import React, { useContext } from 'react';
import DataContext from '../context/dataContext';
import './Quiz.css'; // Import the existing CSS file
import GamerButton from './GamerButton'; // Import the new component

const Quiz = () => {
    const { showQuiz, question, quizs, checkAnswer, correctAnswer,
            selectedAnswer, questionIndex, nextQuestion, showTheResult } = useContext(DataContext);

    const goToExternalSource = () => {
        window.location.href = 'https://myportfoliojonnyb83.netlify.app'; // Replace with the desired URL
    };

    return (
        <section className="quiz-section" style={{ display: `${showQuiz ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <div className="card p-4 quiz-card">
                            <div className="d-flex justify-content-between gap-md-3">
                                <h5 className='mb-2 fs-normal lh-base question-header'>{question?.question}</h5>
                                <h5 className="progress-text">{quizs.indexOf(question) + 1} / {quizs?.length}</h5>
                            </div>
                            <div>
                                {
                                    question?.options?.map((item, index) => (
                                        <button
                                            key={index}
                                            className={`option option-button ${correctAnswer === item ? 'bg-success' : ''}`}
                                            onClick={(event) => checkAnswer(event, item)}
                                        >
                                            {item}
                                        </button>
                                    ))
                                }
                            </div>

                            {
                                (questionIndex + 1) !== quizs.length ?
                                    <button className='btn next-button' onClick={nextQuestion} disabled={!selectedAnswer}>Next Question</button>
                                    :
                                    <button className='btn result-button' onClick={showTheResult} disabled={!selectedAnswer}>Show Result</button>
                            }

                            {/* New GamerButton for external navigation */}
                            <div className="mt-3 text-center">
                                <GamerButton onClick={goToExternalSource} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quiz;
