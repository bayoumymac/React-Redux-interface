import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

class CoursePageTest extends React.Component{
  constructor(props, context){
    super(props,context);
    this.state = {
      course: {
        title: "djfgjnfdg"
      }
    }
    this.onTitleChange = this.onTitleChange.bind(this);
  }
  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course});
    console.log(this.state.course);
  }
  render(){
    return (
      <div>
        <h1>Manage course</h1>
        <TextInput
          name="title"
          label="title"
          onChange={this.onTitleChange}
           />
      </div>
    )
  }
}


export default CoursePageTest;
