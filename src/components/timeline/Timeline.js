import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineCard from './TimelineCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { data } from './timelineData';
import './styles.css';

export default class Timeline extends Component {
  render() {
    return (
      <div className="container">

      	<VerticalTimeline>

      		{
					data.map(( el, i ) => {
							return <TimelineCard
									key = {i}
									id = {el.id}
							    icon = {el.icon}
							    image = {el.image}
							    alt = {el.alt}
							    title = {el.title}
							    description = {el.description}
							    date = {el.date}
								/>
						})
				}

				<VerticalTimelineElement
				    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
				    icon={<FontAwesomeIcon icon="flag" />}
				  />
				</VerticalTimeline>

      </div>
    );
  }
}