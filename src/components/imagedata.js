import React, {Component} from 'react';
import {Thumbnail, Modal,Button,Grid,Row,Col, Image} from 'react-bootstrap';
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

    getInitialState() {
        return { showModal: false };
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
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Body>
                        <Grid>
                            <Row>
                                <Col md={1}>
                                    <Image src={this.props.image} alt='logo' circle className='img-logo' />
                                </Col>
                                <Col md={11}>
                                    <h3>{this.props.name}</h3>
                                </Col>
                            </Row>
                        </Grid>
                        {/* <div className='container'> */}
                            <h4>Text in a modal</h4>
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                            <h4>Popover in a modal</h4>
                            <p>there is a <a href="#">popover</a>here</p>

                            <h4>Tooltips in a modal</h4>
                            <p>there is a  here</p>

                            <h4>Overflowing text to show scroll behavior</h4>
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                        {/* </div> */}
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default Work;