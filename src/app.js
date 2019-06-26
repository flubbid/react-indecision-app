console.log('Js running');
var appObject = {
    title: 'Indecision App',
    subtitle: 'This is some Info!'
};




var template = (
    <div>
        <h1>{appObject.title}</h1>
        <p>{appObject.subtitle}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var user = {
    name: 'Brendan',
    age: '29',
    location: 'Dallas'
}

function getLocation(location){
    if(location) {
        return location;
    } else{
        return 'Unkown';
    }
}

var userName ='Brendan';
var template2 = (
    <div>
        <h1>{userName}</h1>
        <p>{user.age}</p>
        <p>{getLocation(user.location)}</p>
    </div>
);


var appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);