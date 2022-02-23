import './styles.scss';

// import { NCIFooter } from '@nciocpl/ncids-js';
import { NCISiteAlert } from "@nciocpl/ncids-js";

const siteAlerts = document.getElementsByClassName("usa-site-alert");
const siteAlert = NCISiteAlert.create(siteAlerts[0]);
const siteAlert1 = NCISiteAlert.create(siteAlerts[1], { closeable: true });

// site close
siteAlert1.element.addEventListener(
    "usa-site-alert:close-button:close",
    (event) => {
        console.log("dismissed", event);
    }
);

// when footer content toggles .hidden, do something
siteAlert1.element.addEventListener(
    "usa-site-alert:content:collapse",
    (event) => {
        console.log("collapsed", event);
    }
);

siteAlert1.element.addEventListener(
    "usa-site-alert:content:expand",
    (event) => {
        console.log("expanded", event);
    }
);

//
// const element = document.getElementById('nci-footer');
// const footer = NCIFooter.create(element);
// console.log(footer);
//
// footer.element.addEventListener('usa-footer:nav-links:collapse', (event) => {
//     console.log('collapsed', event);
// });
//
// footer.element.addEventListener('usa-footer:nav-links:expand', (event) => {
//     console.log('expanded', event);
// });
//
// footer.element.addEventListener('usa-footer:sign-up:submit', (event) => {
//     console.log('valid email', event);
// });
//
// footer.element.addEventListener('usa-footer:sign-up:error', (event) => {
//     console.log('invalid email', event);
// });
//
// window.addEventListener('resize', () => {
//         const footer = NCIFooter.create(element);
//         console.log(footer);
//     },
// );
window.addEventListener("resize", () => {
    siteAlert.unregister();
    siteAlert1.unregister();
});