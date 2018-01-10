import React, {Component} from 'react';
import {Thumbnail} from 'react-bootstrap';
import Slider from 'react-slick';
import ModalComponent from './Modal';

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
    constructor(props){
        super(props);
        this.state={
            images:[],
            showModal:false
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

    close =()=> {
        this.setState({ showModal: false });
    }

    open= ()=> {
        this.setState({ showModal: true });
    }
    

    render(){
        const images = this.state.images.map((item,i)=>(
            <div key={i}>
                <Thumbnail src={item.imageUrl} key={i} onClick={this.open} />
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
                <ModalComponent close={this.close} showModal={this.state.showModal} />
            </div>
        )
    }
}

export default Work;