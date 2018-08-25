import React from 'react';
import CardContact from './CardContact';
import styled from 'styled-components';

const StyledList = styled.div`
	display:flex;
	flex-wrap: wrap;
	height: 100%;
	justify-content: space-between;
`;

const ContactList = ({ contacts }) => {

		return(
			<StyledList>
				{
					contacts.map(( contact, i ) => {
						return <CardContact
								key={i}
								id={contact.id} 
								title={contact.title} 
								phone={contact.phone} 
								mail={contact.mail}
								photo={contact.photo}
								name={contact.name}
							/>
					})
				}
      </StyledList>
		);
}

export default ContactList;