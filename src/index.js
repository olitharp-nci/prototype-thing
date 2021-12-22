// todo styles borked
import './styles.scss';

// todo error "Module is not installed"
import { UsaFooter } from '@nciocpl/ncids-js';

// create all accordions
window.addEventListener('DOMContentLoaded', () => {
    const elements = document.getElementsByClassName(
        'usa-footer__primary-content--collapsible'
    );

    // loop through each collapse found and init
    [...elements].forEach((element) => {
        UsaFooter.create(element);
    });
});

// when accordion content toggles .hidden, do something
const accordion = document.getElementById('accordion');
accordion.addEventListener('hidden', () => {
    console.log('hidden');
});
accordion.addEventListener('shown', () => {
    console.log('shown');
});
