'use strict';

console.log('Js running');
var appObject = {
    title: 'Indecision App',
    subtitle: 'This is some Info!'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appObject.title
    ),
    React.createElement(
        'p',
        null,
        appObject.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var user = {
    name: 'Brendan',
    age: '29',
    location: 'Dallas'
};

function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'Unkown';
    }
}

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        user.age
    ),
    React.createElement(
        'p',
        null,
        getLocation(user.location)
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);
