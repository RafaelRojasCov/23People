import React, { Component } from 'react';
import CasesCard from './CasesCard';
import { cases } from './casesData';

export default class CasesList extends Component {
	render(){
		return(
			<div className="container mb-5 mt-5">
				<div>
				{
					cases.map(( item, i ) => {
							return <CasesCard
									key={i}
									id={item.id} 
									title={item.title} 
									logo={item.logo} 
									description={item.description} 
									url={item.url}
									image={item.image}
									client={item.client}
								/>
						})
				}
				</div>
			</div>
		);
	}
}
