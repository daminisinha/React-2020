import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/MenuItem'

import './Directory.style.scss';

const Directory = ({sections})=>( 
    <div className='directory-menu'>
        {
            sections.map(({id, ...sectionsProps}) => (
                <MenuItem key={id} {...sectionsProps}/>
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections:selectDirectorySections
});

export default connect(mapStateToProps)(Directory);