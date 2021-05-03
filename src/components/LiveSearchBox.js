
import React from 'react';
// This component is a generic searchbox that shows results  immediatly whe the user starts typing
//props
// placeholdet- string- will be shown in the input
// result - array of strings - the names of the actors to show
// data-flow props
// onSearchChanged - function - will be invoked when the user enter text
// on ResultSelected
class LiveSearchBox  extends React.Component{
    constructor (props){
        super (props);
        this.state = {
            searchText: ''
        }
    }
    updateText = (event)=> {
        const val = event.target.value
        //Update the internal stat
        this.setState ({
            searchText: val
        })
        this.props.onSearchChange(val)
    }
    render() {
        const listIltems = this.props.results.map((res, index)=> {
            return <li onClick={() => this.props.onResultSelected(index)} key = {index}>{res}</li>
        })
        return(
            <div className="c-live-search-box">
                I am the Live search Box
                <input onChange={this.updateText} value={this.state.searchText} placeholder={this.props.placeholder}/>
                <ul>
                    {listIltems}
                </ul>
            </div>
        )
    }
}

export default LiveSearchBox;