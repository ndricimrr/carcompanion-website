/*
* This view will show freelancers page
*/

// Imports
import React from 'react';
import FreelancerGridView from './FreelancerGridView'
import FreelancerSpecificationView from './FreelancerSpecificationView'

const FreelancersPageView = (props) => {
    return (
        <React.Fragment>
            <FreelancerSpecificationView />
            <FreelancerGridView />
        </React.Fragment>
    );
}

export default FreelancersPageView;