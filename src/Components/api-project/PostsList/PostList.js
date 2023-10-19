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
      {postsElement}
    </div>
  )
}

export default PostList