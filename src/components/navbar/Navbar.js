import React, {Component} from 'react';
import {Col, Dropdown, FormControl, FormGroup, Glyphicon, Image, MenuItem, Nav, Navbar} from 'react-bootstrap'
import {connect} from 'react-redux';
import {getUser} from "../../actions/user"
import {logout} from "../../actions/login";
import style from './css/navbar.css'

class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    handleLogOut = (event) => {
        this.props.dispatch(logout());
        event.preventDefault();
    };

    componentWillMount() {
        let {dispatch, token} = this.props;
        dispatch(getUser(token))
    }

    render() {
        let {user} = this.props;
        if (!user) {
            return null
        }
        console.log("d from nav" + user);
        console.log(this.props);
        return (
            <Navbar fluid className={style.appNavbar}>
                <Col sm={2} className={style.inputCol}>
                    <Navbar.Form pullLeft className={`${style.inputCol} ${style.fullSizeInput}`}>
                        <FormGroup className={style.fullSizeInput}>
                            <FormControl type="text" placeholder="Поиск задач"
                                         className={`${style.searchInput} ${style.fullSizeInput}`}/>
                            <FormControl.Feedback>
                                <Glyphicon glyph="glyphicon glyphicon-search" className={style.glyphiconSearch}/>
                            </FormControl.Feedback>
                        </FormGroup>
                    </Navbar.Form>
                </Col>
                <Nav pullRight className={style.navUserBlock}>
                    <Dropdown title={"Logout"} id="logout_dropdown">
                        <Dropdown.Toggle bsStyle="link" className={style.navbarLogout}>
                            <Image src={user.avatar} className={`${style.navAvatar} rounded-0`} alt="avatar"
                                   responsive/>
                            <span>{user.name}</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className={style.logoutMenu}>
                            <MenuItem header className={style.logoutDropdownHeader}>
                                <Image src={user.avatar} className={`${style.dropdownLogo} rounded-0`} alt="avatar"/>
                                <span className={style.dropdownUserName}>{user.name}</span>
                            </MenuItem>
                            <MenuItem divider className={style.dropdownDivider}/>
                            <MenuItem className={style.dropdownLogout} onClick={this.handleLogOut}>Выйти</MenuItem>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Navbar>

        )
    }

}

function mapStateToProps(state) {
    return {
        user: state.profile.user,
        token: state.profile.token
    }
}

export default connect(mapStateToProps)(NavBar);