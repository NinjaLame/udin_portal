import App from './App.svelte';
import './assets/vendors/general/perfect-scrollbar/css/perfect-scrollbar.css';
import './assets/css/style.bundle.css';
import './assets/vendors/custom/fullcalendar/fullcalendar.bundle.css';
// import './assets/vendors/general/jquery/dist/jquery.js';
import $ from 'jquery';
import jquery from 'jquery';
import './assets/vendors/general/popper.js/dist/umd/popper.js';
import './assets/vendors/general/bootstrap/dist/js/bootstrap.min.js';
import './assets/vendors/general/js-cookie/src/js.cookie.js';
import './assets/vendors/general/moment/min/moment.min.js';
import './assets/vendors/general/tooltip.js/dist/umd/tooltip.min.js';
import './assets/vendors/general/perfect-scrollbar/dist/perfect-scrollbar.js';
import './assets/vendors/general/sticky-js/dist/sticky.min.js';
import './assets/vendors/general/wnumb/wNumb.js';
const app = new App({
	target: document.body,
});

export default app;