import './slider';
import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import timer from './modules/timer';
import changeState from './modules/changeState';

document.addEventListener('DOMContentLoaded', () => {

    let formState = {};

    changeState(formState)
    modal();
    tabs();
    forms(formState);
    timer();
})
