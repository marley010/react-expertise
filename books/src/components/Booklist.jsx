import {useState} from 'react';
import Book from "./Book";

const Booklist = () => {

  const [books, setBooks] = useState([
  {title: "het leven van een loser 1", image: "afbeelding 1", author:"Marley"},
  {title: "het leven van een loser 2", image: "afbeelding 2", author:"Marley"},
  {title: "het leven van een loser 3", image: "afbeelding 3", author:"Marley"},
  {title: "het leven van een loser 4", image: "afbeelding 4", author:"Marley"},
  ]) 
  
  return ( 
    <section>
    {books.map((book) => (
      <Book title={book.title} image={book.image} autor={book.author}/>
    ) )}
    </section>
   );
}
 
export default Booklist;