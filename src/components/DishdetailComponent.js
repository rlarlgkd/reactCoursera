import React, { Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
        };
    }
    renderComments(comments) {
        return comments.map((comment)=>{
            return (
                <div key={comment.id} >
                <ul>
                    <li>{comment.comment}</li>
                    <li>-- {comment.author} , {new Intl.DateTimeFormat(
                        'en-US',{year:'numeric', month: 'short', day: '2-digit'}
                        ).format(new Date(Date.parse(comment.date)))}</li>
                </ul>    
                </div>

            );
        });
    }



    render() {
        if (this.props.dishes){
            
        
        return (
            <div className='container'>
                <div className="row">
                    <div className='col-12 col-md-5 m-1'>
                        <Card>
                        <CardImg width="100%" src={this.props.dishes.image} alt={this.props.dishes.name}/>
                        <CardBody>
                            <CardTitle>{this.props.dishes.name}</CardTitle>
                            <CardText>{this.props.dishes.description}</CardText>
                        </CardBody>
                        </Card>
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <h4>Comments</h4>
                        {this.renderComments(this.props.dishes.comments)}
                    </div>
                    
                </div>
            </div>
                
        );
        }
    }
}

export default DishDetail;