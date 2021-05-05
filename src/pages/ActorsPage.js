
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import LiveSearchBox from '../components/LiveSearchBox';

class ActorsPage  extends React.Component{
    constructor (props){
        super (props);
        this.state = {
            searchString: '',
            chosenActors: [],
            results: [],
        }
    }
    searchTextChange =(newText) => {
        fetch(`https://api.themoviedb.org/3/search/person?api_key=471a32c8fb5a40f61dbbe1e382bb1a79&query=${newText}`)
            .then((stream) => stream.json())
            .then((res) => {
                if(res && res.results){
                    const newResults = res.results.map((person) => {
                        
                        return { name: person.name, image: person.profile_path}
                    })
                    this.setState({
                        results: newResults,
                    })
                }
                
            })
       this.setState( {
        searchString: newText,
        
       })
    }

    addActor =(index) => {
        // Mutable function vs unMutable  functions
        const currentActor = this.state.results[index];
        console.log(currentActor);
        const actors =  this.state.chosenActors.concat(currentActor)

        this.setState( {
            chosenActors: actors,
            results : []
        })
    }

    render() {
        const actorCards = this.state.chosenActors.map((actor) => {
            return (<Col lg={3} md={6} sm={12}><Card><h1>{actor.name}</h1><img src={`https://image.tmdb.org/t/p/w500${actor.image}`} alt=""/></Card></Col> )
        })
        return(
            <div className="p-actors-page">
                <LiveSearchBox
                    results={this.state.results}
                    placeholder = 'Choose an Actor'
                    onSearchChange = {this.searchTextChange}
                    onResultSelected ={this.addActor}
                />
                <Row>
                    {actorCards}
                </Row>
            </div>

        )
    }
}

export default ActorsPage;