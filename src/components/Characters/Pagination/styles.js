import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  ul: {
    justifyContent: "space-around",
  },
  item: {
    color: "white",
    backgroundColor: "slategray",
    "&$selected": {
        backgroundColor: "red",
        color: "white",
    }
},
  pagination: {
    borderRadius: "15px",
    marginTop: "1rem",
    padding: "16px",
    backgroundColor: "#353434",
    width: "450px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  }
}));
