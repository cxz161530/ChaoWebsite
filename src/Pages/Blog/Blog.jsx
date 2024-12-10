import { useState, useEffect } from "react";
import './Blog.css';



function Blog() {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        // Simulate fetching blog posts from a local JSON or API
        fetch("/blogs.json")
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error("Error fetching blog posts:", error));
    }, []);
  
    return (
        <>

            <div className="blog-page">
            <h2 className="blog-title">My Blog</h2>
            <div className="blog-content">
                {selectedPost ? (
                    <div className="post-detail">
                        <button
                            className="back-button"
                            onClick={() => setSelectedPost(null)}
                        >
                            Back to Posts
                        </button>
                        <h3>{selectedPost.title}</h3>
                        <p>{selectedPost.content}</p>
                        <p className="author">Author: {selectedPost.author}</p>
                        <p className="date">Published: {selectedPost.date}</p>
                    </div>
                ) : (
                    <div className="post-list">
                        {posts.map((post, index) => (
                            <div
                                key={index}
                                className="post-item"
                                onClick={() => setSelectedPost(post)}
                            >
                                <h3>{post.title}</h3>
                                <p>{post.summary}</p>
                                <p className="author">Author: {post.author}</p>
                                <p className="date">Published: {post.date}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
           
        </>
    );
}

export default Blog;
