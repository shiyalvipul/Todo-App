import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/action';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles(theme => ({
	margin: {
	  margin: theme.spacing(1),
	},
	extendedIcon: {
	  marginRight: theme.spacing(1),
	},
  }));
  

class Todo extends Component {
	
    state = {
        	title: "",
			}
	
    onInputChange = (e) => {
        this.setState({
            title: e.target.value,
          });
    
		}

		onInputKeyUp = (e) => {
			if (e.keyCode === 13) {
				this.props.addTodo(this.state.title)
				this.setState({
					title: "",
				});
			};
			if (e.keyCode === 27) {
				this.setState({
					title: "",
				});
			};
		}
		btnClick = (e) => {
			this.props.addTodo(this.state.title)
				this.setState({
					title: "",
				});
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
						<h1>TODOS</h1>
							<input type="text"
								placeholder="Add todo"
								value={this.state.title}
								onChange={this.onInputChange}
								onKeyUp={this.onInputKeyUp}
								className="form-control add-todo" 
								/>
								<br></br>
								<table className="table table-hover">
								<tbody>
									{
									this.props.todo.length > 0 && 
									this.props.todo
									.filter(todo => !todo.isRemoved)
									.filter(todo => !todo.isDone)
									.map(todo => (
										<tr>
											<td>
											<div key={todo.id} style={{height: 20}}>
											<input 
												type="checkbox" 
												onChange={(e) => this.checkTodo(todo.id, e)} 
												checked={todo.isDone} 
												className="checkbox"
												/>
												&nbsp;&nbsp;&nbsp;
											   <label contentEditable="true">{todo.title}</label>
											  
											   <IconButton aria-label="Delete" style={{float:"right"}}>
													<DeleteIcon fontSize="small" 
													onClick={() => this.removeTodo(todo.id)}
													/>
												</IconButton>
												{/* <button 
													onClick={() => this.removeTodo(todo.id)} 
													className="btn-xs pull-right">
												</button> */}
											</div>
											</td>
										</tr>
										
									))
								}
								</tbody>
								</table>


								<br></br>
								{/* {
									this.props.todo.length > 0 && 
									this.props.todo
									.filter(todo => !todo.isRemoved)
									.filter(todo => !todo.isDone)
									.map(todo => (
										<div key={todo.id} style={{height: 40}}>
											<hr></hr>
											<div >
											<ul className="list-unstyled">
												<li className="ui-state-default">
													<label>
														<input 
															type="checkbox" 
															onChange={(e) => this.checkTodo(todo.id, e)} 
															checked={todo.isDone} 
															className="checkbox"
															/>
															&nbsp;&nbsp;&nbsp;
															<label contentEditable="true">{todo.title}</label>
															&nbsp;&nbsp;&nbsp;
															<button 
																onClick={() => this.removeTodo(todo.id)} 
																className="remove-item btn btn-default btn-xs pull-right">Delete
															</button>
													</label>
												</li>
											</ul>
											</div>
										</div>
									))
								} */}
								<br></br><br></br>
							<div class="todo-footer">
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
						<h1>Already Done</h1>
								{
									this.props.todo.length > 0 && 
									this.props.todo
									.filter(todo => todo.isDone)
									.map(todo => (
										<div key={todo.id}>
											<ul className="list-unstyled done-items">
												<li>
												<input type="checkbox" onChange={(e) => this.checkTodo(todo.id, e)} checked={todo.isDone} />
												&nbsp;&nbsp;{todo.title} 
												</li>
											</ul>
										</div>
									))
								}
								<div class="todo-footer">
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