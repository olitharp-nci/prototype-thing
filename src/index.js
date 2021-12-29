import './styles.scss';

import { UsaFooter } from '@nciocpl/ncids-js';

// create all accordions
window.addEventListener('DOMContentLoaded', () => {
    const elements = document.getElementsByClassName('usa-footer');

    // loop through each footer found and init (should only be one footer, no looping needed IRL)
    [...elements].forEach((element) => {
        const footer = UsaFooter.create(element);
        console.log(footer);

        // when footer content toggles .hidden, do something
        footer.element.addEventListener(
            'usa-footer:nav-links:collapse',
            (event) => {
                console.log('collapsed', event);
            }
        );

        footer.element.addEventListener(
            'usa-footer:nav-links:expand',
            (event) => {
                console.log('expanded', event);
            }
        );
    });
});
