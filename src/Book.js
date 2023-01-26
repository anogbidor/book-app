export const Book = (props) => {
  const { img, title, author, number } = props

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <p>Just doing some stuff</p>
      <h2>{title} </h2>
      <h4>{author}</h4>
      <span className='number'>#{number + 1}</span>
    </article>
  )
}
