import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./styles.css"

class ChalkBoard extends Component {
    state = {
        chalk: "",
        notes: [],
    }
    updateChalk = e => {
        this.setState({chalk: e.target.value});
    };
    updateNotes = e => {
        e.preventDefault();
        const newNotes = this.state.notes.splice()
        newNotes.push(this.state.chalk);
        this.setState({
            chalk: "",
            notes: newNotes,
        })
    }

    render (){
        const notes = this.state.notes.map(note=> <li>{note}</li>)
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
                <div className="board">
                    <h1 className="chalk">{this.state.chalk}</h1>
                </div>
                <ul className="notes">{notes}</ul>
            </div>
        )
    }
}