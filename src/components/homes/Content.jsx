import { useNavigate } from "react-router-dom";

const Content = () => {
  let navigate = useNavigate();
  const handleBook = (book) => {
    localStorage.setItem('book', JSON.stringify(book));
    navigate("/book")
  }
  const books = [
    {
      title: '30Minutes',
      content: `Do you ever ask your self : What I have done today?
                where  did the time go? if so, then you need this book to
                help you to manage better your time`,
      author: 'Francky',
      id: 1
    },
    {
      title: '30Minutes',
      content: `Do you ever ask your self : What I have done today?
                where  did the time go? if so, then you need this book to
                help you to manage better your time`,
      author: 'Francky',
      id: 2
    },
    {
      title: '30Minutes',
      content: `Do you ever ask your self : What I have done today?
                where  did the time go? if so, then you need this book to
                help you to manage better your time`,
      author: 'Francky',
      id: 3
    }
  ];
  const listBooks = books.map((book) => 
    <div key={book.id} className="border border-1 p-3 mt-2 row shadow bg-light estonia-regular rounded">
      <div className="col-md-4">
        <h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
          </svg>
        </h1>
        <h6 className="font-n">author : {book.author}</h6>
      </div>
      
      <div className="col-md-6" onClick={() => { handleBook(book);}}>
        <h5 className="font-s">{book.title}</h5>
        <p className="p-3">{book.content.slice(0, 150) + '...'}</p>
      </div>
      
    </div>
  );
  return(
    <div className="container-fluid p-3 chocolat">
      <div className="row">
        <div className="col-md-3"> </div>
        <div className="col-md-6">
          {listBooks}
        </div>
        <div className="col-md-3"> </div>
      </div>
      
    </div>
  );
}

export default Content;