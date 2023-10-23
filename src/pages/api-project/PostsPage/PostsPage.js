import { useEffect, useState } from "react"
import Container from "../../../Components/Container/Container"
import PostList from "../../../Components/api-project/PostsList/PostList"
import { Link } from "react-router-dom"
import { API_URL } from "../../../config"

const PostsPage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(res => res.json())
    //   .then(posts => {
    //     setPosts(posts)
    //   })

    const fetchPosts = async () => {
      const res = await fetch(API_URL + '/posts?_embed=comments&_expand=user')
      const posts = await res.json()

      setPosts(posts)
    }

    fetchPosts()
  }, [])

  return (
    <Container>
      <Link to='/api-project/create-post'>Create New Post</Link>
      
      <h1>Posts Page</h1>

      <PostList posts={posts} />
    </Container>
  )
}

export default PostsPage