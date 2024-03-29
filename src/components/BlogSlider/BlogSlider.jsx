import React,{useEffect} from 'react'
import 'swiper/swiper.scss';
import Card from '../UI/BlogSlider-card/Card'
import ReadMore from '../UI/ReadMore/ReadMore'
import {connect} from 'react-redux'
import * as action from '../../redux/actions/index'
import Swiper from 'react-id-swiper';
import {withRouter} from 'react-router-dom'

function BlogSlider(props) {

  const params = {
    loopFillGroupWithBlank: true,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false
    },
    breakpoints: {
      580: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      860: {
        slidesPerView: 1,
        spaceBetween: 20
    },
      1080: {
          slidesPerView: 3,
          spaceBetween: 30
      }
  },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
   
  }

  useEffect(() => {
      props.onInitPosts()
  }, [])

  function handleId(id){
    props.history.push({
      pathname:`/post`,
      search:`?id=${id}`
    })
  }

 
    return (
        <>
      <Swiper {...params}>
        {props.posts !== null && props.posts.map((item,key)=>{
          return <div key={key}><Card onClick={()=>handleId(item.id)} label={item.name} content={item.content}  /></div>
        })}
      </Swiper>

      <ReadMore/>
        </>
    )
}

const MapStateToProps = state => {
    return {
      posts:state.fetchPost.posts,
    }
}


const mapDispatchToProps = (dispatch) => {
  return {
      onInitPosts: () => {dispatch(action.fetchPost())}
  }
}

export default connect(MapStateToProps,mapDispatchToProps)(withRouter(BlogSlider))
