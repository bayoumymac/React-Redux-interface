import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

class ManageCoursePage extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state = {
      course: Object.assign({}, props.course),
      errors: {},
      saving: false
    };
    this.addCourseEvent = this.addCourseEvent.bind(this);
    this.saveCourse = this.saveCourse.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    if(this.props.course.id !== nextProps.course.id) {
      this.setState({course: Object.assign({},nextProps.course)})
    }
  }
  addCourseEvent (event){
    const field = event.target.name;
    const course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course});
  }
  saveCourse(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course).then(() => {
      this.setState({saving:false})
      toastr.success('course is saved')
      browserHistory.push('/courses');}).catch(error => {
        this.setState({saving:false})
        toastr.error(error)
      });
  }
  render() {
    return(
      <div>
          <CourseForm
            course={this.state.course}
            allAuthors={this.props.authors}
            onSave={this.saveCourse}
            errors={this.state.errors}
            onChange={this.addCourseEvent}
            saving={this.state.saving}
           />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const getCourseById = (courses, courseId) => {
  const course = courses.filter(course => course.id === courseId);
  return course ? course[0]: null;
}

const mapStateToProps = (state, ownProps) => {
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  course = ownProps.params.id && state.courses.length > 0 ? getCourseById(state.courses, ownProps.params.id):course;
  const formattedAuthorData = state.authors.map(author => ({
    value: author.id,
    text: author.firstName + ' ' + author.lastName
  }));

  return {
    course,
    authors: formattedAuthorData
  };
};

const mapDispatchToProps = (dispatch) => (
  {actions: bindActionCreators(courseActions, dispatch)}
);

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
