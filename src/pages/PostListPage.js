import "../css/postlistpage.css";
import Cselect from "../components/Cselect";
import Cselect2 from "../components/Cselect2";
import Cselect3 from "../components/Cselect3";
import Ccondition from "../components/Ccondition";
import CpostListContent from "../components/CpostListContent";
import CpostButton from "../components/CpostButton";
import Cnumber from "../components/Cnumber";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header3 from "../components/Header3";
import ReactPaginate from "react-paginate";

export default function PostListPage() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  const [currentPage, setCurrentPage] = useState(0);

  function handlePageClick(data) {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  }

  const itemsPerPage = 10;
  const totalItems = 450;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/postlist").then((resp) => {
      setPostList(resp.data);
    });
  }, []);

  return (
    <div id="postlistdiv">
      <Header3 />
      <main id="postlistmain">
        <h1 id="postlisth1">게시글</h1>
        <form id="postlistfrom">
          <div id="postlistdiv1">
            <Cselect2></Cselect2>
            <Cselect3></Cselect3>
          </div>
          <div id="postlistdiv2">
            <Cselect></Cselect>
          </div>
          <div id="postlistdiv3">
            <Ccondition></Ccondition>
          </div>
        </form>
        <CpostListContent postData={postList}></CpostListContent>

        <div id="postlistcpostbotton">
          <Link to="/postwrite" onClick={handleClick}>
            <CpostButton></CpostButton>
          </Link>
        </div>

        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={4}
          marginPagesDisplayed={0}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          previousLabel={"◀"}
          nextLabel={"▶"}
        />
      </main>
    </div>
  );
}
