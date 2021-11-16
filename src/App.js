import './App.css';
import {
    Button
} from '@material-ui/core';
import {HeaderStyle} from "./styles";
import {useEffect, useState} from "react";
import React from "react"
import image from './image.jpg'

const array_yes = [
        'ДА!!!',
        'YEAAAAH!!!',
        'Конечно)',
        'АГАСЬ',
        'Дааааа!!!'
]

const baybach = [
        'Ты за BAYBACH-CITY???',
        'Кирилл без ума от BAYBACH-CITY, а ты?',
        'Если ты не за BAYBACH-CITY вышел! Если за, нажми кнопку!',
        'BAYBACH-CITY лучшие?',
        'BAYBACH-CITY лучшая команда в мире???'
]

const array = [
    'Ты выбрал правильную сторону! Так держать!',
    'Я уж думал что ты в нас начал сомневаться)',
    'За честь и отвагу!!!',
    'Красава! А теперь гони баблишко, мой новый спонсор :)',
    'Если ты Матвей, я помню, что ты играл за другую команду, поэтому выйди, неверный(',
]

function App() {
    const [state, setState] = useState(false)
    const [text, setText] = useState('')
    const [textYes, setTextYes] = useState('')
    const [textbaybach, setTextBaybach] = useState('')

    useEffect(()=> {
        setTextYes(array_yes[Math.floor(Math.random() * array_yes.length)])
        setTextBaybach(baybach[Math.floor(Math.random() * baybach.length)])
    }, [])
    const classes = HeaderStyle()

    const getAnswer = () => {
        setState(!state)
        setText(array[Math.floor(Math.random() * array.length)])
    }
    return (
        <div className={classes.app}>
            <div className={state ? classes.main2 : classes.main}>
                {state
                    ?
                        <React.Fragment>
                            <div className={classes.text}>
                                {text}
                            </div>
                            <img className={classes.image} src={image} alt="image.jpg"/>
                        </React.Fragment>
                    :

                    <React.Fragment>
                        <div className={classes.text}>
                            {textbaybach}
                        </div>
                        <Button onClick={() => getAnswer()} variant="outlined" className={classes.locale}>
                            {textYes}
                        </Button>
                    </React.Fragment>
                }

            </div>

        </div>
    );
}

export default App;
