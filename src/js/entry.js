const m = require('mithril');
const hash = require('./hash.js');

m.route(document.getElementById('spec-viewer'), '/', {
    '/about': require('./about.js'),
    '/:parts...': require('./spec-viewer.js'),
});
m.mount(document.getElementById('part-selector'), require('./part-selector.js'));

// extend part selector if no parts are selected on mobile
if(hash.getList().length === 0) {
    document.getElementById('mobile-toggle').checked = true;
}