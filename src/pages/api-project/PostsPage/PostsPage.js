import { useEffect, useState } from "react"
import Container from "../../../Components/Container/Container"
import PostList from "../../../Components/api-project/PostsList/PostList"

const PostsPage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(res => res.json())
    //   .then(posts => {
    //     setPosts(posts)
    //   })

    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_embed=comments&_expand=user&_limit=35')
      const posts = await res.json()

      setPosts(posts)
    }

    fetchPosts()
  }, [])

  return (
    <Container>
      <h1>Posts Page</h1>

      <PostList posts={posts} />
    </Container>
  )
}

export default PostsPage