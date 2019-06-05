import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/action';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';


  

class Todo extends Component {
	
    state = {
					title: "",
					error:'',
			}
	
    onInputChange = (e) => {
					this.setState({
						title: e.target.value,
						error:'',
					});
		}
	


		onInputKeyUp = (e) => {
			if (e.keyCode === 13 && this.state.title !== '') {
				this.props.addTodo(this.state.title)
				this.setState({
					title: "",
					error:'',
				});
				
			}
			else {
				this.setState({
					error:'* Please Enter Todo Text',
				});
			}
			

			if (e.keyCode === 27) {
				this.setState({
					title: " ",
					error:'',
				});
			};
		}
		
		//Remove Todo
		removeTodo = (id) => {
			this.props.removeTodo(id);
			// this.updateTodo(id, { isRemoved: true })
		}

		//TODO COMPLETE
		checkTodo = (id, e) => {
			this.props.checkTodo(id, e.target.checked);
		}

    render() {
        return (
			<div className="container">
				<div className="row">
					<div className="col-6 todolist ">
						<h3>TODOS</h3>
							<input type="text"
								placeholder="Add todo"
								value={this.state.title}
								onChange={this.onInputChange}
								onKeyUp={this.onInputKeyUp}
								className="form-control add-todo" 
								name="add_todo"
								required
								/>
								<span className="error_msg">{this.state.title === '' ? this.state.error : '' }</span>
								<br></br>
								<table className="table table-hover">
								<tbody>
									{
									this.props.todo.length > 0 && 
									this.props.todo
									.filter(todo => !todo.isRemoved)
									.filter(todo => !todo.isDone)
									.map(todo => (
										<tr key={todo.id}>
											<td>
											<div key={todo.id} style={{height: 20}}>
											

											<Checkbox
															onChange={(e) => this.checkTodo(todo.id, e)} 
															checked={todo.isDone} 
															color="primary"
															className="checkBox"
														/>

												&nbsp;&nbsp;&nbsp;
											   <label>{todo.title}</label>
											  
											   <IconButton aria-label="Delete" style={{float:"right"}} onClick={() => this.removeTodo(todo.id)} className="delete_btn"> 
													<DeleteIcon fontSize="small" />
												</IconButton>
											</div>
											</td>
										</tr>
									))
								}
								</tbody>
							</table>
							<br></br>
							<br></br><br></br>
							<div className="todo-footer">
								<strong>
								{
								this.props.todo
								.filter(todo => !todo.isRemoved)
								.filter(todo => !todo.isDone)
								.length
								}
								</strong> Items Left
							</div>

					</div>
					<div className="col-1"></div>
					<div className="col-5 todolist-done">
						<h3>Already Done</h3>
						<table className="table table-hover">
							<tbody>
								{
									this.props.todo.length > 0 && 
									this.props.todo
									.filter(todo => todo.isDone)
									.filter(todo => !todo.isRemoved)
									.map(todo => (
										<tr key={todo.id}>
											<td>
											<Checkbox
															onChange={(e) => this.checkTodo(todo.id, e)} 
															checked={todo.isDone} 
															color="primary"
															className="checkBox"
												/>
												&nbsp;&nbsp;{todo.title} 
												<IconButton aria-label="Delete" style={{float:"right"}} onClick={() => this.removeTodo(todo.id)} className="delete_btn"> 
													<DeleteIcon fontSize="small" />
												</IconButton>
											</td>
										</tr>
									))
								}
								</tbody>
							</table>
							<br></br><br></br>
								<div className="todo-footer">
									<strong>
									{
										this.props.todo
										.filter(todo => todo.isDone)
										.length
									}
									</strong> Items Left
								</div>
							</div>
						</div>
				</div> //Containe Div Closed
        );
    }
}
const mapStateToProps = (state) => ({
	todo:state.todo.todo,
	});

	const mapDispatchToProps = dispatch => ({
		addTodo: title => dispatch(actions.addTodo(title)),
		removeTodo: id => dispatch(actions.removeTodo(id)),
		checkTodo:(id, checked)=>dispatch(actions.checkTodo(id, checked)),
	});



export default connect(mapStateToProps,mapDispatchToProps)(Todo);