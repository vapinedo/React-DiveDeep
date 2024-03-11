const rootNode = document.getElementById("app");

const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

function App() {
    return (
        React.createElement("article", null,
            React.createElement("h2", null, "Counter "),
            React.createElement("p", null, "You clicked 1 times"),
            React.createElement("button", null, "Click me"))
    )
}

let articleElements = document.getElementsByTagName("article")
let articleElement = document.getElementsByTagName("article").item(0)
console.log(articleElements)
console.log(articleElement)

// This will run after React's code already has done
setTimeout(() => {
    let articleElements = document.getElementsByTagName("article")
    let articleElement = document.getElementsByTagName("article").item(0)
    console.log(articleElements)
    console.log(articleElement)
}, 1000);