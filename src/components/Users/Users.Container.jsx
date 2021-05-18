import {connect} from "react-redux";
import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollow,
    toggleIsFetching
} from "../../redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {

        this.props.toggleIsFetching (true);
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {

                withCredentials: true,

            } ).then(response => {
                this.props.toggleIsFetching (false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching (true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true,
        } ).then(response => {
            this.props.toggleIsFetching (false);
            this.props.setUsers(response.data.items);
        });
    }

   /* postFollow = () => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/id=${this.props.profilePage.profile.userId}`).then(response => {
            this.props.toggleFollow(response.data.resultCode);
        });
    }*/



    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null  }
        <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged} users={this.props.users} toggleFollow={this.props.toggleFollow}
        />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}



export default connect(mapStateToProps, {
    toggleFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    })(UsersContainer);

