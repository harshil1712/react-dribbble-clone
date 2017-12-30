import React, { Component } from 'react';
import {Navbar,Nav,NavItem, Button, NavDropdown, MenuItem, Image, Glyphicon, Well,Form, FormControl,FormGroup,InputGroup, DropdownButton, Grid, Col,Row} from 'react-bootstrap';
import logo from '../Assests/logo1.png';
import Designer from './designerdata';

const NavbarInstance = () => (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Image src={logo} alt='Dribbble Logo' />
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Shots</NavItem>
          <NavItem eventKey={2} href="#" active={true}>Designers</NavItem>
          <NavItem eventKey={3} href="#">Blog</NavItem>
          <NavItem eventKey={4} href="#">Podcast</NavItem>
          <NavItem eventKey={5} href="#">Meetups</NavItem>  
          <NavItem eventKey={6} href="#">Jobs</NavItem>
          <NavItem eventKey={7} href="#">Hiring</NavItem>                  
          <NavDropdown eventKey={8} title={<Glyphicon glyph="option-horizontal" />} id="basic-nav-dropdown" noCaret>
            <MenuItem eventKey={8.1}>Action</MenuItem>
            <MenuItem eventKey={8.2}>Another action</MenuItem>
            <MenuItem eventKey={8.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Sign Up</NavItem>
          <NavItem eventKey={2} href="#">Sign In</NavItem>
          <NavItem>
            <Form inline>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon><Glyphicon glyph="search" /></InputGroup.Addon>
                  <FormControl type="text" placeholder="Search" />
                </InputGroup>
              </FormGroup>
            </Form>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
);
const WellInstance = ()=>(
  <Well>
    <strong>Hiring Designers?</strong><span> Scout gives you unlimited access to the best talent. Find, save, and message designers.</span>
    <Button bsStyle="success">Learn more</Button>
  </Well>
);
const Wrapper = () => (
  <div className='container-fluid'>
    <Grid bsClass='container-fluid'>
      <Row>
        <Col md={6}>
          <DropdownButton title='Designers' id="dropdown-no-caret">
            <MenuItem eventKey="1">Designers &amp; Team</MenuItem>
            <MenuItem eventKey="2">Design Team</MenuItem>
          </DropdownButton>
        </Col>
        <Col md={6} className='text-right'>
          <span>Sort:</span>&nbsp;
          <span>Trending</span>&nbsp;
          <span>•</span>&nbsp;
          <span>Followers</span>
        </Col>
      </Row>
    </Grid>
    <hr />
    </div>
)
const ResultWrapper = () =>(
  <div className='container-fluid spacing'>
    <Designer/>
  </div>
)
class Page extends Component{
    render(){
        return(
            <div>
                <NavbarInstance />
                <WellInstance />
                <Wrapper />
                <ResultWrapper />
            </div>
        );
    }
}

export default Page;