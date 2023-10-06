const SectionTitle = (props) => {
  const { title } = props

  if (!title) {
    return
  }

  return (
    <h2 className="section-title">{title}</h2>
  )
}

export default SectionTitle