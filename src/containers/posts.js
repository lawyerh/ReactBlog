import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions/fetch_weather';

class PostsIndex extends Component{
    constructor(props){
        super(props);

        this.props.fetchWeather()

        this.getPosts = this.getPosts.bind(this);

    }

    getPosts(){
        return this.props.posts.map(post => {
            <li>
                
            </li>
        })
    }

    render(){
        return(
            <div>
                Posts Index
            </div>
        );
    };
};
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchWeather
    }, dispatch)
}

function mapStateToProps(state){
    return{ posts }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);