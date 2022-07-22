import '../App.css';
import {Route, Routes, Navigate, useParams} from 'react-router-dom';
import React, {Component} from "react";  
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import { DISHES} from '../shared/dishes';
import { COMMENTS} from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

class Main extends Component {

    constructor(props) {
      super(props);
      this.state = {
          dishes: DISHES,
          comments: COMMENTS,
          promotions: PROMOTIONS,
          leaders: LEADERS
      };
    }
  
    render() {
        const HomePage = () => {
            return(
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                     promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                     leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            )
        }

        const DishWithId = () => {
          const {dishId} = useParams();
          return(
            
            <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(dishId))[0]}
            comments={this.state.comments.filter((comment)=>comment.dishId === parseInt(dishId))}/>
          );
        };
      return (
        <div>
            <Header/>
            <Routes>
            {/* route is the url we type and it land us to a specific component */}          {/* i used element instead of component because element is ot supported */}
            <Route path="/home" element={<HomePage />} />
            <Route path="/menu" element={<Menu dishes={this.state.dishes} />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/menu/:dishId" element={<DishWithId />} />
            <Route path="/aboutus" element={<About leaders={this.state.leaders}/>} />
            
            {/* any other urls will lead to home */}
            {/* i used this format because Redirect is not support in the latest version */}
            <Route path="*" element={<Navigate to="/home" />} /> 
            </Routes>
            {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
            <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
            <Footer/>
        </div>
      );
    }
  }
  
  export default Main;