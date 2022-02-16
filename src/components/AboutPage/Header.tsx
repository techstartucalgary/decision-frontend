import { BsAlignCenter } from "react-icons/bs"
import { Box, Text } from "@chakra-ui/react"
import zIndex from "@mui/material/styles/zIndex"

const Header = () => {
    return (

        <header style = {headerStyle}>
            <Box 
            bg='#4B3265'
            px="2rem"></Box>
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