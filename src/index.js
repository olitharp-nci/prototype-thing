import './styles.scss';

import { NCIFooter } from '@nciocpl/ncids-js';

const element = document.getElementById('nci-footer');
const footer = NCIFooter.create(element, { trigger: '.usa-footer__nci-primary-link--accordion-header' });
console.log(footer);

footer.element.addEventListener('usa-footer:nav-links:collapse', (event) => {
    console.log('collapsed', event);
});

footer.element.addEventListener('usa-footer:nav-links:expand', (event) => {
    console.log('expanded', event);
});

footer.element.addEventListener('usa-footer:sign-up:submit', (event) => {
    console.log('valid email', event);
});

footer.element.addEventListener('usa-footer:sign-up:error', (event) => {
    console.log('invalid email', event);
});

window.addEventListener('resize', () => {
        const footer = NCIFooter.create(element, { trigger: '.usa-footer__nci-primary-link--accordion-header' });
        console.log(footer);
    },
);
