import React from "react";
import PostItem from "./PostItem";

class PostList extends React.Component {
    constructor(props) {
        super(props);
        console.log("Constructor was called!");
        this.state = {
            posts: [],
            error: null
        };
    }
    
    componentDidMount() {
       this.fetchPosts('https://jsonplaceholder.typicode.com/posts');
    }

    componentDidUpdate(){
        console.log("PostList did update!");
    }

    componentWillUnmount(){
        console.log("PostList will unmount!");
    }

    async fetchPosts(url){
        try{
            const response = await fetch(url);
            let data = await response.json();
            data = data.filter(posts => posts.id < 5);
            this.setState({posts: data});
        } catch (error) {
            this.setState({error});
        }
    }

    render() {
        console.log("PostList was rendered!");
        return (
            <div>
                <h2>Posts list:</h2>
                {this.state.posts.map((post, index) =>{
                    return <PostItem 
                        title={post.title}
                        body={post.body}
                        key={index}
                    />
                })
                }
            </div>
        )
    }
}

export default PostList;