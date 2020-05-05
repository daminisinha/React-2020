import React from 'react';
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/shopPage.jsx';
import Header from './component/header/header.jsx';
import SingInAndSignUpPage from'./pages/signInAndSignUp/SignInAndSignUpPage';
import CheckoutPage from './pages/checkout/checkout.jsx';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {selectCurrentUser} from './redux/user/user.selector';

import {setCurrentUser} from './redux/user/user.action';

class  App extends React.Component {
 
 unsubscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await  createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
         setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            });
          });
      }else{
        setCurrentUser({userAuth});

      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact="exact" path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/signin' render={()=>this.props.currentUser ? (
          <Redirect to='/'/>) :
          (<SingInAndSignUpPage/>)
        }/>
        <Route exact path = '/checkout' component = {CheckoutPage} />

      </Switch>
    </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser:selectCurrentUser
})
const mapDispatchToProps = dispatch =>({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
