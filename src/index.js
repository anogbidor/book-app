import React from 'react'
import { books } from './books'
import { Book } from './Book'
import ReactDOM from 'react-dom/client'
import './index.css'

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        // const { img, title, author } = book
        return <Book {...book} key={book.id} number={index} /> // can be done like this img={img} title={title} author={author}
      })}
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

/////////////////////////////////////////////////////////////REFERENCE///////////////////////////////////////////////

// const ilkKitap = {
//   author: 'Prince Harry',
//   title: 'Spare Hardcover',
//   img: 'https://images-na.ssl-images-amazon.com/images/I/91Szm8FpdfL._AC_UL600_SR600,400_.jpg',
// }

// const ikinciKitap = {
//   author: 'James Clear',
//   title: 'Atomic Habits',
//   img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL450_SR450,320_.jpg',
// }

// const üçüncüKitap = {
//   author: 'Colle en Hoover',
//   title: 'It Starts With Us',
//   img: 'https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL900_SR900,600_.jpg',
// }
//####### BUTTONS
//  const EventExamples = () => {
//   const handleFormInput = () => {
//     console.log('handle form input')
//   }
//   const handleButtonClick = () => {
//     alert('handle button click')
//   }
//   const handleFormSubmit = (e) => {
//     e.preventDefault()
//     console.log('form is sent')
//   }
//   return (
//     <section>
//       <form onSubmit={handleFormSubmit}>
//         <h1>Form</h1>
//         <input
//           type='text'
//           name='example'
//           style={{ margin: '1rem 0' }}
//           onChange={handleFormInput}
//         />
//         <button type='submit' onClick={handleFormSubmit}>
//           Submit
//         </button>
//         <div>
//           <button onClick={handleButtonClick} type='button'>
//             click Me
//           </button>

//###### ANONYMOUS FUCTIONS
// const EventExamples = () => {
//   return (
//     <section>
//       <form>
//         <h1>Form</h1>
//         <input
//           type='text'
//           name='product'
//           style={{ margin: '1rem 0' }}
//           onChange={(e) => console.log(e.target.value)}
//         />
//         <button type='button' onClick={() => console.log('hello')}>
//           Click me
//         </button>
//       </form>
//     </section>
//   )
// }
