import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./styles.css"

class ChalkBoard extends Component {
    state = {
        chalk: "",
        notes: [],
    }

    render (){
        return (
            <div className="App">
                <form
                    type="text"
                    placeholder="Type here"
                    value={this.state.chalk}
                />
                <form
                    type="submit"
                />
            </div>
        )
    }
}