import React from 'react'
import { withRouter } from 'react-router';

 class SingleMovie extends React.Component {
    constructor(props){
        super(props);
        this.movieID = this.props.match.params.movieID
        console.log(this.movieID);
        this.state = {
          movie: {}
        };
    }
    componentDidMount = () => {
        fetch(`https://api.themoviedb.org/3/movie/${this.movieID}?api_key=471a32c8fb5a40f61dbbe1e382bb1a79&language=en-US`)
            .then((res)=> res.json ())
            .then((res)=> {
                const tempObj ={
                    title: res.original_title,
                    runTime: res.runtime,
                    image: res.poster_path
                }
                fetch(`https://api.themoviedb.org/3/movie/${this.movieID}/credits?api_key=471a32c8fb5a40f61dbbe1e382bb1a79&language=en-US`)
                    .then((res)=> res.json ())
                    .then((res)=> {
                        tempObj.stars = [res.cast[0].name, res.cast[1].name, res.cast[2].name].join(', ');
                        console.log(tempObj.stars);
                        tempObj.director = res.crew.find((director) => director.known_for_department ==="Directing" ).name
                    
                        this.setState({
                            movie: tempObj
                        })
                    } 
                )
            })
        }

    render() {
        let template = '';
        if (this.state.movie === undefined){
             template = <div>loading</div>
        }
        else{
            template = (
                        <div>
                            <h1>{this.state.movie.title}</h1>
                            <h3>Runtime: {this.state.movie.runtime} min</h3>
                            <img src={`https://image.tmdb.org/t/p/w500${this.state.movie.image}`} alt={this.state.movie.title}/>
                            <p>Director: {this.state.movie.director}</p>
                            <p>Stars :{this.state.movie.stars}</p>
                        </div>
            )
        }
        return (
            <div>
                {template}
            </div>
        )
            
        
    }
}
export default withRouter(SingleMovie);