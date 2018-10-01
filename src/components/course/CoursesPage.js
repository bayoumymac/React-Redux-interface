import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseAction from '../../actions/courseActions';
import { bindActionCreators } from '../../../node_modules/redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component{
  constructor(props, context){
    super(props, context);
    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onClickSave = this.onClickSave.bind(this);
  }
  // onTitleChange(event){
  //   const course = this.state.course;
  //   course.title = event.target.value;
  //   this.setState({course: course});
  // }

  // onClickSave(){
  //   // this.props.dispatch(courseAction.createCourse(this.state.course))
  //   this.props.actions.createCourse(this.state.course);
  // }

  // courseRow(course, index){
  //   return <div key={index}>{course.title}</div>;
  // }
  redirectToCoursePage () {
    browserHistory.push('/course');
  }
  render(){
    const {courses} = this.props;
    return(
      <div>
        <h1>Courses</h1>
        <input
          type="submit"
          value="Add Course"
          onClick={this.redirectToCoursePage}
          className="btn btn-primary" />
        <CourseList courses={courses}/>
        {/* <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} /> */}
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// state.courses here calls the courseReducer but since
// we defined it as courses, we use state.courses
// instead of state.courseReducer
const mapStateToProps = (state, ownProps) => {
  return {courses: state.courses};
};
const mapDispatchToProps = (dispatch) => (
  {
    // createCourse: course => dispatch(courseAction.createCourse(course))
    actions: bindActionCreators(courseAction, dispatch)
  }
);


// in case of elminating the mapDispatchToProps from connect
// parameters, react-redux attaches a dispatch property function
// to your component

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
