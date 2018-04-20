
console.log('-app.js-');

// steps to use react-library

//step-1: define component's class

// class HelloWorld extends React.Component {
//     render() {
//         let h1Element=React.createElement('h1',null,"Hello World");
//         let divElement = React.createElement('div', {className:'alert alert-info'}, h1Element);
//         return divElement;
//     }
// }

// or ( using JSX syntax)

class HelloWorld extends React.Component {
    render() {
        return (
            <div className="alert alert-info">
                <h1>Hello World</h1>
            </div>
        );
    }
}



//step-2: instantiate component & render to virtiual-dom 

// let helloWorld = React.createElement(HelloWorld, null, null);
let helloWorld=<HelloWorld />
ReactDOM.render(helloWorld, document.getElementById('root'));