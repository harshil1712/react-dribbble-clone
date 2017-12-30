import React, { Component } from 'react';
import {Grid,Col,Row, Image,Glyphicon,Button} from 'react-bootstrap';
import Work from './imagedata';

const userUrl = 'https://5a422991e1542700129be910.mockapi.io/imagecard/users?p=1&l=10';


class Designer extends Component{
    constructor(){
        super();
        this.state={
            designer:[]
        }
    }

    componentWillMount(){
        fetch(userUrl)
        .then(data=>data.json())
        .then(data=>{
            this.setState({designer:data});
            // console.log(this.state.designer[0].name);
        })
    }

    render(){
        const users = this.state.designer.map((item, i) => (
            <div  key={item.id}>
            <Grid bsClass='container-fluid spacing'>
                <Row>
                    <Col md={1}>
                        <Image src={item.imageUrl} alt="Designer Logo"  circle/>
                    </Col>
                    <Col md={3}>
                        <div className='pad-left'>
                            <h5 className='designerName'>{ item.name }</h5>
                            <div className='meta-bio'>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel purus vel neque sollicitudin pellentesque. 
                                </p>
                            </div>
                            <div className='meta-btn'>
                                <Grid className='container-fluid'>
                                    <Row>
                                        <Col xs={1}>
                                        <Button bsSize="xsmall"><Glyphicon glyph="plus" /></Button>
                                        </Col>
                                        <Col xs={1}>
                                        <Button bsSize="xsmall" bsStyle='success'><Glyphicon glyph="envelope" /></Button>
                                        </Col>
                                        <Col xs={1}>
                                            <ul>
                                                <li className='count'>{item.followers}</li>
                                                <li>followers</li>                                                
                                            </ul>  
                                        </Col>
                                    </Row>
                                </Grid>     
                            </div>
                        </div>
                    </Col>
                    <Col md={8}>
                        <Work />
                    </Col>
                </Row>
            </Grid>
                <hr />
            </div>
          ));
        return(
            <div>
                {users}
            </div>
        )
    }
}

export default Designer;