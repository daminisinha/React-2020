import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { cartAction } from "../../redux/cart/cart.action";
import {selectCartItemsCount} from '../../redux/cart/cart.selector';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-cart.svg';
import './cart-icon.scss';

const CartIcon = ({ cartAction,itemCount }) => (
  <div className="cart-icon" onClick={cartAction}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  cartAction: () => dispatch(cartAction()),
});

const mapStateToProps = createStructuredSelector ({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);