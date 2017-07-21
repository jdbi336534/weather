import './index.html';
import './index.css';
import dva from 'dva';
import FastClick from 'fastclick'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

// 1. Initialize
const app = dva();

// 2. Plugins
//app.use({});

// 3. Model
app.model(require('./models/weatherReport'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
