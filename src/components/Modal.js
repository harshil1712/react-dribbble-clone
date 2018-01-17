import React, { Component } from 'react';
import {Modal,Grid,Row,Col, Image, Thumbnail, Glyphicon} from 'react-bootstrap';

class ModalComponent extends Component{
    render(){
        return(
            <Modal show={this.props.showModal} onHide={this.props.close}>
                <Modal.Body>
                    <Grid>
                        <Row>
                            <Col md={1}>
                                <Image src={this.props.desgImg} alt='logo' circle className='img-logo' />
                            </Col>
                            <Col md={11}>
                                <h3 className='image-name'>{this.props.data.name}</h3>
                                by <a href='#'>{this.props.desgName}</a>
                            </Col>
                        </Row>
                        <Row className='marginTop'>
                            <Col md={8}>
                                <Thumbnail src={this.props.data.imageUrl} className='modal-img'/>
                            </Col>
                            <Col md={4}>
                                <ul className="stats">
                                    <li>
                                        <Glyphicon glyph="heart"></Glyphicon>&nbsp;Like?&nbsp;&nbsp;
                                        <span className="text-right">{this.props.data.fans} likes</span>
                                    </li>
                                    <li>
                                        <Glyphicon glyph="share"></Glyphicon>&nbsp;Share&nbsp;&nbsp;
                                        <span className="text-right">{this.props.data.views} views</span>
                                    </li>
                                    <li>
                                        <Glyphicon glyph="tint"></Glyphicon>
                                        <div className="color" id='fe7e59'></div>
                                        <div className="color" id='fc6363'></div>
                                        <div className="color" id='fda346'></div>
                                        <div className="color" id='ff755c'></div>                                    
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Grid>
                </Modal.Body>
            </Modal>
        )
    }
}

export default ModalComponent;