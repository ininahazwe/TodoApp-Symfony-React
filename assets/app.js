import React from 'react';
import ReactDom from 'react-dom';
import TodoContextProvider from "./js/contexts/TodoContext";
import TodoTable from "./js/components/TodoTable";

class App extends React.Component {
    render() {
        return (
            <TodoContextProvider>
                <TodoTable />
            </TodoContextProvider>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));