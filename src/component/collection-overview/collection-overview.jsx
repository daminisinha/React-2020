import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";
import PreviewCollection from "../../component/preview-collection/preview-collection";
import './collection-overview.styles.scss';


const CollectionOverview = ({collections}) => (
    <div className='collections-overview'>
        {collections.map(({id , ...otherCollectionProps}) =>(
                <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
