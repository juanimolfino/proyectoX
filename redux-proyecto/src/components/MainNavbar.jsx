import React, { useEffect } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import '../syles/MainNavBar.css'
import { NavLink } from 'react-router-dom'; // => se usa con <NavLink to='/weather'>  </NavLink>

import { getGenders } from '../actions'
import { connect } from 'react-redux'; 

function MainNavbar({ getGenders, genders }) {

    //console.log(genders)

    useEffect(() => {
        getGenders();
    }, [getGenders])

    return <Navbar bg="dark" expand="lg" className='MainNavBar'>
                <Navbar.Brand className='MainNavBar' href="/">YO NI ME ENROSCO!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                {/* <Nav.Link className='MainNavBar' href="#home">Home</Nav.Link> */}
                <NavLink className='MainNavBar nav-link' to='/post/new'> Crear un nuevo post </NavLink>
                   {/*  <Nav.Link className='MainNavBar' href="#link">Crear un nuevo post</Nav.Link> */}

               
                <NavDropdown  title="Generos" id="basic-nav-dropdown">
                    {
                        genders.map((e, i) => {
                            return <NavLink key={i} className='MainNavBar nav-link' to={`/post/${e.gender}`}> {e.gender} </NavLink>
                        })
                    }

                    {/* <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
}

function mapStateToProps(state) {
    return {
      genders: state.gendersDB
    }
  }

export default connect(mapStateToProps, { getGenders })(MainNavbar)