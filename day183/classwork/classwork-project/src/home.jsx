import "./App.css"
import Card from "./card.jsx"
function Main(){
    return(
        <div id="main">
            <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1569332054907615%2F&show_text=false&width=380&t=0" width="380" height="476" scrolling="no" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe>

           <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2441861399590651%2F&show_text=false&width=267&t=0" width="267" height="476"  scrolling="no"  allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe>
           <Card/> 
           <Card/> 
           <Card/> 
        </div>
         
    )
}

export default Main