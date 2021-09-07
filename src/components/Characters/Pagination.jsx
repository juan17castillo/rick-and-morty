import React, { useEffect } from "react";

import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCharacters } from "../../actions/characters";


const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    if (page) dispatch(getCharacters(page));
    console.log("Hola")
  }, [dispatch, page]);

  return (
    <Pagination
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/characters?page=${item.page}`}
        />
      )}
    />
  );
};

export default Paginate;