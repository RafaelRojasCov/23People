import React from 'react';
import Comment from './Comment';
import right from './right.svg';
import left from './left.svg';

const CommentList = ({ comments }) => {

		return(
			<div className="row">
				<div id="TeamCarousel" 
					className={`carousel slide w-100`} 
					data-ride="carousel">
					<div className="carousel-inner">
						{
							comments.map(( comment, i ) => {
								return (
									<div key={i} className={(i===0) ? "carousel-item rounded active" : "carousel-item rounded"}>
										<Comment
											id={comment.id} 
											name={comment.name} 
											message={comment.message} 
											photo={comment.photo}
											logo={comment.logo}
											position={comment.position}
											alt={comment.alt}
										/>
									</div>
								)
							})
						}
					</div>
					<a className="carousel-control-prev" href="#TeamCarousel" role="button" data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true">
							<img src={left} alt="left"/>
						</span>
						<span className="sr-only">Anterior</span>
					</a>
					<a className="carousel-control-next" href="#TeamCarousel" role="button" data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true">
							<img src={right} alt="right"/>
						</span>
						<span className="sr-only">Siguiente</span>
					</a>
				</div>
      </div>
		);
}

export default CommentList;