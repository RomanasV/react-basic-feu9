import PostItem from '../PostItem/PostItem'

const PostList = ({ posts }) => {

  let postsElement = <p>No posts...</p>

  if (posts.length > 0) {
    postsElement = (
      <ul>
        {posts.map((post) => <PostItem key={post.id} data={post} />)}
      </ul>
    )
  }

  return (
    <div>
      <h2>Posts:</h2>
      {postsElement}
    </div>
  )
}

export default PostList