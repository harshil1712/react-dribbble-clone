import React, {Component} from 'react';
import {Thumbnail} from 'react-bootstrap';
import Slider from 'react-slick';

const imgUrl = 'https://5a422991e1542700129be910.mockapi.io/imagecard/users/';

function SampleNextArrow(props) {
    const {className, style, onClick} = props
    return (
      <div
        className={className}
        style={{...style, display: 'block', background: '#2b2b2b96'}}
        onClick={onClick}
      ></div>
    );
  }

  function SamplePrevArrow(props) {
    const {className, style, onClick} = props
    return (
      <div
        className={className}
        style={{...style, display: 'block', background: '#2b2b2b96'}}
        onClick={onClick}
      ></div>
    );
  }

class Work extends Component{
    constructor(){
        super();
        this.state={
            images:[]
        }
    }

    componentWillMount(){
        fetch(imgUrl+this.props.id+'/images')
        .then(d=>d.json())
        .then(d=>{
            this.setState({images:d});
            console.log(this.state.images);
        })
    }

    render(){
        const images = this.state.images.map((item,i)=>(
            <div key={i}>
                <Thumbnail src={item.imageUrl} key={i} />
            </div>
        ));
        var settings = {
            dots: false,
            speed: 500,
            slidesToScroll: 1,
            infinite: false,
            slidesToShow: 3,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
          };

        return(
            <div>
            <Slider {...settings} style={{background:'transparent'}}>
                {images}
            </Slider>
            </div>
        )
    }
}

export default Work;