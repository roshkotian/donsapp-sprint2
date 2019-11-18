import React, { Component } from 'react'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Posts from '../components/Posts';
import MyPosts from '../components/MyPosts'
import Navbar from "../layout/Navbar";

const API_URL = process.env.REACT_APP_API_URL;

export class MyPost extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] , username: null};
    } 

    componentDidMount() {
        const username = localStorage.getItem('username');
        let body = {
            username: username
          };
          axios({
            url: API_URL + "/posts/getMyPosts",
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            data: JSON.stringify(body)
          }).then(response => {
                this.setState({ posts: response.data });
            })
            .catch(function (error) {
                console.log(error);
                alert('Error occurred : '+error);
            })
    }

    
    render() {
        let recentPostsMarkup = this.state.posts ? (
            this.state.posts.map(post =>
                <MyPosts post={post} key={post._id} ></MyPosts>)
        ) : <p>Loading...</p>
        return (
        <React.Fragment>
          <Navbar className="nav"></Navbar>  
          <div className="container">
            <Grid container>
                <Grid item sm={8} xs={12}>
                    {recentPostsMarkup}
                </Grid>
                <Grid item sm={1} xs={12}>
       
                </Grid>
            </Grid>
            </div>
            </React.Fragment>
        )
    }

}

export default MyPost;
       
   