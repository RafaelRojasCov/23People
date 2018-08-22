import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => {

		return(
			<div className="row">
				{
					comments.map(( comment, i ) => {
						return <Comment
								key={i}
								id={comment.id} 
								name={comment.name} 
								message={comment.message} 
								logo={comment.logo}
								position={comment.position}
							/>
					})
				}
      </div>
		);
}

export default CommentList;