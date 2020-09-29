import React,{useEffect,useState}  from 'react'
import {Link} from 'react-router-dom'
import './Card.scss'
function Card(props) {

    const [state, setstate] = useState({
        image:null
    })



    useEffect(() => {
        function imagefe(){
             var imgStart =  props.content.indexOf('<img')
             var imgend =  props.content.indexOf("/>\n")
             var image  =  props.content.substring(imgStart,imgend)+"/>"
             var src =  image.indexOf('https')
             var srcend =  image.indexOf('g"')
             var soruce = image.substring(src,srcend)+'g'
             setstate({image:soruce})
        }
        if(props.content && props.content.includes('img')){
         imagefe()
        }
 }, [props.content])

    return (
        <div onClick={props.onClick} className="card">
            <div className="image">
                <img src={state.image ? state.image.toString(): 'https://wallpaperaccess.com/full/27033.jpg' } alt="Card"/>
            </div>
            <div className="card-body">
                    <h1 className="card-head">{props.label}</h1>
                    <p className="card-text"></p>
            </div>
        </div>
    )
}

export default Card
