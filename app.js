const heading = React.createElement('div', { id: 'parent' }, React.createElement('h1', { id: 'h1' }, "Hello World React!"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);