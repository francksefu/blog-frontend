import { useNavigate } from "react-router-dom";

const Author = ({author}) => {
  let navigate = useNavigate();
  const handleBlog = (user_id) => {
    localStorage.setItem("bloguser", JSON.stringify(user_id));
    navigate('/authorblogs')
  }
  return(
    <section className="p-3 border mt-2 back-beige rounded shadow">
      <div>
        <h6>{author.descriptions[0].name}</h6>
        <p>
          {author.descriptions[0].descriptionUser}
        </p>
      </div>
      <p> {author.email} </p>
      <button className="btn btn-light mt-3" onClick={() => handleBlog(author.id)}> See my blogs</button>
    </section>
  );
}

export default Author;