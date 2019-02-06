import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { imagePath } from '../../store/utils';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import './header.scss';

const mapStateToProps = state => ({
    route: state.router.location.pathname
});

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggle = this.toggle.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            isOpen: false,
            isScrolled: false,
            showLogin: false
        };
    }

    toggleModal() {
        this.setState({
            showLogin: !this.state.showLogin,
        });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        let scrollTop = window.scrollY;
        if (scrollTop > 50) {
            this.setState({
                isScrolled: true
            });
        }
        else {
            this.setState({
                isScrolled: false
            });
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
        return (
            <div className="header-wrapper">
                <div className='ah-header header-shadow'>
                <Navbar color="" expand="md" className="ah-nav">
                    <NavbarBrand href="/">
                        <img className="logo-test" src={imagePath('logo.svg')} alt="logo" />
                    </NavbarBrand>
                    <NavbarToggler className={this.state.isOpen ? 'close-nav' : ''} onClick={this.toggle} />
                    <Collapse navbar className={`ah-collapse ${this.state.isOpen ? 'show' : ''}`} >
                        <Nav className="" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/sample">Sample</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className='icon-nav' navbar>
                            <NavItem>
                                <NavLink className='icon-link' style={{ cursor: "pointer" }} onClick={this.toggleModal}>
                                    Login
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
            </div>
        );
    }

}

Header.propTypes = {
    route: PropTypes.string
};

export default connect(
    mapStateToProps,
)(Header);
