const Body = () => {
    return (
        <body style = {bodyStyle}>
            <p>
                Welcome to the Decision Maker! This is a website created by students at the University of Calgary, in affiliation with Tech Start.
                The purpose of this website is to help you and your friends plan a fun social gathering together! Do you want to meet with a group of 
                friends? Are you stuck planning on what to do, and aliging everyones time, budget, and desires? Look no further! Our simple and easy to use 
                website can provide the solution to all your worries. Simple enter in you budget, location, preferences, and we'll do all the leg work
                on finding places or events for you to go to. Once we compile a list of potential matches, all you need to do us send your friends our generated
                link, which will take them to a voting poll. Here, they vote for their pick from the list of potential events or activites we compiled. The 
                list item with the most votes wins, and viola! you know that you're doing for the night. 
            </p>
            <br></br>
            <p>
                Tech Start is a software club at the University of Calgary. Through multidisciplinary teams, we take on interesting problems and use technology to solve them. Every semester, our teams combine software, design, and strategy to complete awesome projects.
                At Tech Start, our members learn new technologies, gain experience with professional development tools and methodologies, and master the art of collaboration. We're also the top spot on campus to meet fellow tech enthusiasts, aspiring entrepreneurs, and innovators!
            </p>
        </body>
    )
}

const bodyStyle = {
    backgroundColor:'#4B3265',
    fontSize:"15px",
    fontWeight:"bold",
    color:"#FFDD99",
    height:'100vh'
}

export default Body