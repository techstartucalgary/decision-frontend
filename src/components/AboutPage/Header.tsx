import { BsAlignCenter } from "react-icons/bs"

const Header = () => {
    return (
        <header style = {headerStyle}>
            <h1 style = {headingStyle}>What is This?</h1>
        </header>
    )
}

const headerStyle = {
    backgroundColor:'#4B3265', 
    borderBottomWidth:"4px",
    borderBottomColor:"#644386",
    height: "50px",
}
const headingStyle = {
    fontSize:"24px",
    fontWeight:"bold",
    color:"#FFDD99",
    align:'center'
}

export default Header