import React, { useEffect } from "react";

import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { getCharacters } from "../../../actions/characters";

/**
 * Through the use of third party libraries. Material UI is responsible for providing a pagination component that helps with the logic and interface of page management.
 * @param {object} page destructured object with the page property to bring info to call the dispatcher.
 * @returns {JSX.Element} in charge of rendering the Pagination component.
 */
const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  const classes = useStyles();

  /**
   *It is in charge of the first call to the dispatcher to bring all the characters of the given page. 
   Then, if the page is changed, it is also updated and the dispatcher is triggered.
   */
  useEffect(() => {
    if (page) dispatch(getCharacters(page));
  }, [dispatch, page]);

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
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
