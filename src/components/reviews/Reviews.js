import React, { Component } from 'react';
import CommentList from './CommentList';
import { comments } from './commentsData';
import Clients from 'components/clients/Clients';
import './Reviews.css';

export default class Reviews extends Component {
  render() {
    return (
      <div>
      	<div className="top-triangle" />
				<div className="reviews">
            <section className="container">
              <div className="row justify-content-center">
                  <h2 className="custom-yellow mt-5 mb-5 text-center animated fadeIn">
                    Nuestros clientes nos recomiendan
                  </h2>
              </div>
              <CommentList comments={ comments }/>
              <Clients />
            </section>
				</div>
				<div className="bottom-triangle" />
      </div>
    );
  }
}