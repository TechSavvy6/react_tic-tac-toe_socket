import React from 'react';
import ChoiceButton from './ChoiceButton'

const Choice = ({logo, onChoice}) => {
    return (
        <>
        <div className='choice-container'>
            <p className='play_sentence'>Let's Play Tic-Tac-Toe</p>
            <ChoiceButton onChoice={onChoice} type='primary' choice='new' label='Start New'/> 
            <ChoiceButton onChoice={onChoice} type='secondary' choice='join' label='Join Game'/> 
        </div>
        </>
    );
}

export default Choice;
