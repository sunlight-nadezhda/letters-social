import React, { useState } from "react";
import PropTypes from "prop-types";

import Content from "./Content";
import Image from "./Image";
import PostActionSection from "./PostActionSection";
import Comments from "../comment/Comments";
import UserHeader from "../post/UserHeader";
import Loader from "../Loader";

const Post = props => {
    const [showComments, setShowComments] = useState(false);

    if (!props.post) {
        return <Loader />;
    }
    return (
        <div className="post">
            <UserHeader user={props.post.user} />
            <Content post={props.post} />
            <Image post={props.post} />
            <PostActionSection showComments={showComments} setShowComments={setShowComments} />
            <Comments
                comments={props.post.comments}
                show={showComments}
                post={props.post}
                user={props.user}
            />
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.shape({
        post: PropTypes.object,
        user: PropTypes.object
    })
};

export default Post;
