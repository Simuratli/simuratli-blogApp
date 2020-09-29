import React,{useEffect,useState} from 'react'
import Button from '../../../../components/UI/Button/Button'
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
        <div className="card">
            <div className="image">
                <img src={state.image ? state.image.toString(): 'https://wallpaperaccess.com/full/27033.jpg' } alt="Card"/>
            </div>
            <div className="card-body">
                    <h1 className="card-head">{props.label}</h1>
            </div>
            <div className="card-footer">
                <Button onClick={props.onEdit} label="Edit" />
                <Button onClick={props.onClick} label="Delete"/>
            </div>
        </div>
    )
}

export default Card
