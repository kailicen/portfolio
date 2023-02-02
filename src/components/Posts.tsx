import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import axios from "axios";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 5;
  const [totalPages, setTotalPages] = useState<number>(0);
  const [pages, setPages] = useState<number[]>([]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const offset = (currentPage - 1) * postsPerPage;
        const res = await axios.get(
          `https://kailisblog.com/wp-json/wp/v2/posts?offset=${offset}&per_page=${postsPerPage}`
        );
        setPosts(res.data);
        if (res.headers["x-wp-totalpages"] !== undefined)
          setTotalPages(parseInt(res.headers["x-wp-totalpages"], 10));
        setIsLoaded(true);
      } catch (err) {
        console.log(`error: ${err}`);
      }
    };
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    const pagesArr: number[] = [];
    for (let i = 1; i <= totalPages; i++) {
      pagesArr.push(i);
    }
    setPages(pagesArr);
    console.log("totalPages", totalPages);
  }, [totalPages]);

  return (
    <div className="post-page">
      {isLoaded ? (
        <div className="post-container">
          {currentPage === 1 ? (
            <div className="post-container__info">
              <h2>Kaili's Blog</h2>
              <p>
                Miscellaneous bits of insights about personal development,
                philosophy, epistemology, nonduality, life purpose, etc. Updated
                randomly throughout the week. Insights here are meant to be
                quick and half-baked.
              </p>
            </div>
          ) : (
            <div className="page-container">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Prev
              </button>
              {pages.map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={page === currentPage ? "active" : ""}
                >
                  {page}
                </button>
              ))}
              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </div>
          )}

          {posts.map((post, index) => (
            <div key={index}>
              <PostItem post={post} />
            </div>
          ))}
        </div>
      ) : (
        <h3>Loading...</h3>
      )}

      <div className="page-container">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Posts;
