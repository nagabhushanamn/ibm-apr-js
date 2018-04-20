
console.log('-app.js-');

// -----------------------------------------------------------------
// step-1: define component's class
class HelloWorld extends React.Component {
    render() {
        let h1Element=React.createElement('h1',null,"Hello World");
        let divElement = React.createElement('div', {className:'alert alert-info'}, h1Element);
        return divElement;
    }
}
// -----------------------------------------------------------------
// or ( using JSX syntax)
// -----------------------------------------------------------------
class HelloWorld extends React.Component {
    render() {
        return (
            <div className="alert alert-info">
                <h1>Hello World</h1>
            </div>
        );
    }
}

// -----------------------------------------------------------------
// step-2: instantiate component & render to virtiual-dom 

let helloWorld = React.createElement(HelloWorld, null, null);
or
let helloWorld=<HelloWorld />

ReactDOM.render(helloWorld, document.getElementById('root'));

//-----------------------------------------------------------------
// Ex2

// //-----------------------------------------------------------------
// class MenuItem extends React.Component {
//     render() {
//         return (
//             <div className="list-group-item">
//                 <span className="badge badge-danger">{this.props.item}</span>
//             </div>
//         );
//     }
// }
// //-----------------------------------------------------------------
// class Menu extends React.Component {
//     render() {
//         return (
//             <div className="list-group">
//                 <MenuItem item="Biryani" />
//                 <MenuItem item="Meals"/>
//             </div>
//         );
//     }
// }
// //-----------------------------------------------------------------
// ReactDOM.render(<Menu />, document.getElementById('root'));
// //-----------------------------------------------------------------