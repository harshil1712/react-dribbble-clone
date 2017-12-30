import React, {Component} from 'react';
import {Thumbnail,Grid,Row,Col} from 'react-bootstrap';
import Slider from 'react-slick';

const imgUrl = 'https://5a422991e1542700129be910.mockapi.io/imagecard/users/1/images';

class Work extends Component{
    constructor(){
        super();
        this.state={
            images:[]
        }
    }

    componentWillMount(){
        fetch(imgUrl)
        .then(d=>d.json())
        .then(d=>{
            this.setState({images:d});
            console.log(this.state.images);
        })
    }

    render(){
        const images = this.state.images.map((item,i)=>(
                            <Col md={4} key={i}>
                                <Thumbnail href="#" alt="design" src={item.imageUrl} />
                            </Col>
        ));
        var settings = {
            dots: false,
            speed: 500,
            slidesToScroll: 1
          };

        return(
            <div>
            <Slider {...settings}>
                    <Grid>
                        <Row>
                            {images}
                        </Row>
                    </Grid>
            </Slider>
            </div>
        )
    }
}

export default Work;