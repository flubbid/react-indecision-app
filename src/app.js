class Header extends React.Component {
    render(){
        return (
            <div>
            <h1>Indecision</h1>
            <h2>Put your life in the hands of a computer</h2>
            </div>
        )
    }
}


class Action extends React.Component {
    render(){
        return(
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

// Options Component
class Options extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                </ul>
            </div>
        )
    }
}

//AddOptions Component
class AddOption extends React.Component{
    render(){
        return(
            <div>
                <form> 
                <input>
                
                </input>
                <button>Add Option</button>
                </form>
            </div>
        )
    }
}

 
const jsx = (
    <div>
        <h1>Title</h1>
        <Header/>
        <Action/>
        <Options/>
        <AddOption/>
    </div>
)


ReactDOM.render(jsx, document.getElementById('app'))