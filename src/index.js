import './styles.scss';

// todo error "Module is not installed"
import { NCIFooter, MyNCIFooter } from '@nciocpl/ncids-js';

// create all accordions
window.addEventListener('DOMContentLoaded', () => {
    const elements = document.getElementsByClassName('usa-footer');

    // loop through each footer found and init (should only be one footer, no looping needed IRL)
    [...elements].forEach((element) => {
        const footer = NCIFooter.create(element, { trigger: '.usa-footer__nci-primary-link--accordion-header' });
        console.log(footer);

        // when footer content toggles .hidden, do something
        footer.element.addEventListener(
            'usa-footer:nav-links:collapse',
            (event) => {
                console.log('collapsed', event);
            },
        );

        footer.element.addEventListener('usa-footer:nav-links:expand', (event) => {
            console.log('expanded', event);
        });

        footer.element.addEventListener('usa-footer:sign-up:submit', (event) => {
            console.log('valid email', event);
        });

        footer.element.addEventListener('usa-footer:sign-up:error', (event) => {
            console.log('invalid email', event);
        });

    });

});
