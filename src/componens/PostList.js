import axios from 'axios'
import React, { Component } from 'react'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts:[],
            error:''
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp=>{
            this.setState({posts: resp.data})
            console.log(resp.data)
        })
        .catch(err=>{
            console.log(err)
            this.setState({errorMsg: 'Error...'})
        })
    }

    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                List of Post
                {
                    posts.length ?
                    posts.map(post => 

                    <div key={post.id}>
                        {post.name}
                    </div>):
                    null
                }
                {errorMsg ? <div>{errorMsg}</div>:null}
            </div>
        )
    }
}

export default PostList
