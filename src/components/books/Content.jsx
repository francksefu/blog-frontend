const Content = () => {
    const bookjs = localStorage.getItem('book');
    const book = JSON.parse(bookjs);
    return(
      <div className="container-fluid p-3 estonia-regular">
        <div>
          <h1 className="mt-3 mb-3">{book.title}</h1>
          <p className="p-3 border border-1">
            {book.content}
          </p>
        </div>
      </div>
    );
  }
  
  export default Content;