import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import InputCustom from "../../utils/Buttons/InputCustom"

const Profile = (props) => {
    return (
        <div className={s.head}>
            <ProfileInfo profile={props.profile} saveProfile={props.saveProfile} savePhoto={props.savePhoto} status={props.status} isOwner = {props.isOwner} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>

        </div>
    )
}
export default Profile;