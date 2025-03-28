import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import style from "./header.module.css";
import { useContext } from "react";
import { langcontext } from "../../contexts/lang";

function Header() {
    const { lang, setLang } = useContext(langcontext);
   
    const changeLang = () => {
        setLang(lang === 'en' ? 'ar' : 'en');
    }
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Link to="/movies" className={style.link}>
                        <Navbar.Brand>Movies</Navbar.Brand>
                    </Link>
                    <Link to='/favMovies' className={style.link}> <Navbar.Brand >Favorites</Navbar.Brand></Link>
                    <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                        <Form.Control
                            type="search"
                            placeholder="Search by Title"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Link to="/signin" className={style.link}>
                        <Navbar.Brand>sign in</Navbar.Brand>
                    </Link>
                    <button className="btn btn-success" onClick = {()=>{changeLang() } }>{lang}</button>
                </Container>
            </Navbar>


        </>
    );
}

export default Header;
