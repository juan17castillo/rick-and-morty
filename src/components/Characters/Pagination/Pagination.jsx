import React, { useEffect } from "react";

import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { getCharacters } from "../../../actions/characters";


const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (page) dispatch(getCharacters(page));
  }, [dispatch, page]);


  return (
    <Pagination
    classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
           
          className={classes.item}
          {...item}
          component={Link}
          to={`/characters?page=${item.page}`}
        />
      )}
    />
  );
};

export default Paginate;