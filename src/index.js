import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./styles.css"

class Chalkboard extends Component {
    state = {
        chalk: "",
        notes: [],
    }
    updateChalk = e => {
        this.setState({chalk: e.target.value});
    };
    updateNotes = e => {
        e.preventDefault();
        const newNotes = this.state.notes.slice()
        newNotes.push(this.state.chalk);
        this.setState({
            chalk: "",
            notes: newNotes,
        })
    }
    componentDidUpdate(){

    }
    componentDidMount(){
        
    }

    render (){
        const notes = this.state.notes.map(note=> <li>{note}</li>)
        return (
            <div className="App">
                <form onSubmit={this.updateNotes}>
                  <input
                    onChange={this.updateChalk}
                    type="text"
                    placeholder="Type here"
                    value={this.state.chalk}
                  />
                  <input 
                    type="submit"
                  />
                </form>
                <div className="board">
                    <h1 className="chalk">{this.state.chalk}</h1>
                </div>
                <ul className="notes">{notes}</ul>
            </div>
        )
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Chalkboard />, rootElement);