import React, {Component} from 'react';
import {Dropdown, FormControl, FormGroup, Glyphicon, Image, MenuItem, Nav, Navbar} from 'react-bootstrap'
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
        console.log("token from nav " + token);
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
            <Navbar fluid>
                <Navbar.Form pullLeft>
                    <FormGroup>
                        <FormControl type="text" placeholder="Поиск задач" className={style.SearchInput}/>
                        <FormControl.Feedback>
                            <Glyphicon glyph="glyphicon glyphicon-search" className={style.glyphicon_search}/>
                        </FormControl.Feedback>
                    </FormGroup>
                </Navbar.Form>
                <Nav pullRight>
                    <Dropdown title={"Logout"} id="logout_dropdown" bsStyle="link"
                              className={`${style.nav_dropdown}`}>
                        <Dropdown.Toggle bsStyle="link" className={style.logout_menu}>
                            <Image src={user.avatar} className={`${style.nav_avatar} rounded-0`} alt="avatar"
                                   responsive/>
                            <span>{user.name}</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className={style.logoutMenu}>
                            <MenuItem header className={style.logoutDropdownHeader}>
                                <Image src={user.avatar} className={`${style.dropdownLogo} rounded-0`} alt="avatar"
                                       responsive/>
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