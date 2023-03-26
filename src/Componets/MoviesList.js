import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginateCom from "./Paginate";
import Alter from "./Alter";
const MoviesList = ({ movies, getPage, pageCount }) => {
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((item) => {
          return <CardMovie key={item.id} item={item} />;
        })
      ) : (
        <Alter />
      )}

      {movies.length >= 1 ? (
        <PaginateCom getPage={getPage} pageCount={pageCount} />
      ) : null}
    </Row>
  );
};

export default MoviesList;
