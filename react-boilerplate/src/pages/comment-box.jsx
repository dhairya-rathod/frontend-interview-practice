const messageStructure = {
  id: "",
  parentId: null,
  userName: "",
  comment: "",
  replies: [],
};

const initialState = {
  comments: [],
  messageData: { ...messageStructure },
};

const CommentBox = () => {
  return (
    <div>
      <input type="text" />
    </div>
  );
};

const setComment = (newComment, commentList) => {
  if (!newComment.parentId) {
    return [...commentList, newComment];
  }
  const clonedCommentList = structuredClone(commentList);
  return clonedCommentList.map((data) => {
    if (data.id === newComment.parentId) {
      return { ...data, replies: [...data.replies, newComment] };
    } else {
      const replies = setComment(newComment, data.replies);
      return { ...data, replies };
    }
  });
};

const ADD_COMMENT = "ADD_COMMENT";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      const comments = setComment(action.payload.message, state.comments);
      return { ...state, comments };
    }
    default:
      return { ...state };
  }
};

export default CommentBox;
