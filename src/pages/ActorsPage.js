
import React from 'react';
import LiveSearchBox from '../components/LiveSearchBox';

class ActorsPage  extends React.Component{
    constructor (props){
        super (props);
        this.state = {
            searchString: '',
            chosenActors: [],
            results: [
                'result1',
                'result2',
                'result3',
                'result4'
            ],
        }
    }
    searchTextChange =(newText) => {
        const newResults = this.state.results.filter( (item) =>{
            return item.includes(newText);
        })
        
       this.setState( {
        searchString: newText,
        results: newResults,
       })
    }

    addActor =(index) => {
        // Mutable function vs unMutable  functions
        const currentActor = this.state.results[index];
        console.log(currentActor);
        const actors =  this.state.chosenActors.concat(currentActor)

        this.setState( {
            chosenActors: actors
        })
    }

    render() {
 
        return(
            <div className="p-actors-page">
                I am a actors page
                <LiveSearchBox
                    results={this.state.results}
                    placeholder = 'Choose an Actor'
                    onSearchChange = {this.searchTextChange}
                    onResultSelected ={this.addActor}
                />
                <p>{this.state.chosenActors}</p>
            </div>

        )
    }
}

export default ActorsPage;