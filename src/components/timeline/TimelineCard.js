import React from 'react';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledLogo = styled.img`
	max-width: 100px;
	max-height: 80px;
`;

const TimelineCard = ({id, icon, image, alt, title, description, date}) => {
	return(
		<VerticalTimelineElement
	    date={date}
	    iconStyle={{ background: '#fac450', color: '#fff' }}
	    icon={<FontAwesomeIcon icon={icon} />}
	  >
	    <h3 className="vertical-timeline-element-title">
	    	<StyledLogo src={image} alt={alt} />
	    </h3>
	    <h4 className="vertical-timeline-element-subtitle">{title}</h4>
	    <p>{description}</p>
	  </VerticalTimelineElement>
	);
}

export default TimelineCard;