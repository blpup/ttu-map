const searchContainerStyles = {
  height:"100vh",
  top:0,
  position:"absolute",
  backgroundColor:"white",
  width:"408px"
};
const searchBoxStyles = {
  width: "392px",
  height: "40px",
  borderRadius: "8px",
  border: "none",
  boxShadow: "none",
  boxShadow: "0 2px 4px rgba(0,0,0,0.2), 0 -1px 0px rgba(0,0,0,0.02)",
  padding: "20px",
  fontSize:"18px",
  fontWeight:"bold",
  outline:"none",
  position:"absolute",
  zIndex:2,
  left:"50%",
  marginLeft:"-196px",
  top:"8px"
}
const imageStyles = {
  left: 0,
  top: 0,
  width: "100%",
  zIndex: 1,
  height:"250px"
}
const descriptionStyles = {
  textAlign:"left",
  padding:"8px"
}

export default { searchContainerStyles, searchBoxStyles, imageStyles, descriptionStyles };
