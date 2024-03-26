import { useState } from "react";
import Foot from "../../Foot";
import Navbar from "../Navbar/Navbar";
import Comment from "./Comment";
import Content from "./Content";

const Book = () => {
  
  return(
    <>
      <Navbar />
      <Content />
      <Comment />
      <Foot />
    </>
  );
}

export default Book;