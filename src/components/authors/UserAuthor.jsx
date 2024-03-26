import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/users/usersSlice";
import Author from "./Author";
import Navbar from "../Navbar/Navbar";
import Foot from "../../Foot";

const UserAuthor = () => {
  
  let dispatch = useDispatch();
  let loading = useSelector((state) => state.user.isLoading)
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch]);
  const authors = useSelector((state) => state.user.users);
  const resourceOwner = useSelector((state) => state.user.resourceOwner)
  if(loading) {
    return <h1>Loading ...</h1>
  }

  
  return(
    <>
    <Navbar />
    <div className="container-fluid p-3 fond-white text-white">
      <div className="mt-3 p-3"> </div>
    {authors && authors.map((author) => {
      if(author.id == resourceOwner.id) {
        return(
      <div className="row" key={author.id}>
        <div className="col-md-3"> </div>
        <div className="col-md-6" >
          <Author author={author} />
        </div>
        <div className="col-md-3"> </div>
      </div>
    )}})}
    </div>
    <Foot />
    </>
  );
}

export default UserAuthor;