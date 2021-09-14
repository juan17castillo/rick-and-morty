import React from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";
import useStyles from "./styles";

/**
 * Through the use of third party libraries. Material UI is responsible for providing a pagination component that helps with the logic and interface of page management.
 * @param {object} page destructured object with the page property to bring info to call the dispatcher.
 * @returns {JSX.Element} in charge of rendering the Pagination component.
 */
const Paginate = ({ page, numPages }) => {
  const classes = useStyles();

  /**
   *It is in charge of the first call to the dispatcher to bring all the characters of the given page. 
   Then, if the page is changed, it is also updated and the dispatcher is triggered.
   */

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={numPages}
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
