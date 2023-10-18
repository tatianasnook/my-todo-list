import { Component } from 'react';

export class List extends Component{
  state = {
    userInput: '',
    toDoList: []
  }
  handleChange(e){
    this.setState({userInput: e})
  }

  addItem(input){
    if(!input){
      alert('Please enter a task')
    } else {
      let listArray = this.state.toDoList;
      listArray.push(input);
      this.setState({toDoList: listArray, userInput: ''})
    }
  }

  deleteItem(){
    let listArray = this.state.toDoList;
    listArray = [];
    this.setState({toDoList: listArray})
  }

  crossedWord(event){
    const listItem = event.target;
    listItem.classList.toggle('crossed')
  }

  onFormSubmit(e){
    e.preventDefault();
  }
  render(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
        <input  type='text' 
                placeholder='Enter here'
                onChange={(e) => this.handleChange(e.target.value)}
                value={this.state.userInput}/>

        <button className='btn add' onClick={() => this.addItem(this.state.userInput)}>Add</button>

        <div className='container'>
          <ul>
          {this.state.toDoList.map((item, index) => (
            <li onClick={this.crossedWord} key={index}>
              {item}
            </li>
          ))}
          
        </ul>
        </div>
        

        <button className='btn delete' onClick={() => this.deleteItem()}>Delete All</button>
      </form>
      </div>
    )
  }
}