import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, failedAjaxCall} from './ajaxStatusActions';
// in es6 {course: course} is equivalent to {course}
export const loadCoursesSuccess = (courses) => ({type: types.LOAD_COURSES_SUCCESS, courses});

export const loadCourses = () => (
  (dispatch) => {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(
      courses => {dispatch(loadCoursesSuccess(courses));
      }).catch(error => {dispatch(failedAjaxCall());});
    }
);

export const saveCourseSuccess = (course) => {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
};

export const createCourseSuccess = (course) => (
  {type: types.CREATE_COURSE_SUCCESS, course}
);

export const saveCourse = (course) => (
  (dispatch, getState) => {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(saveCourseSuccess(savedCourse)):dispatch(createCourseSuccess(savedCourse))
    }).catch(error => {dispatch(failedAjaxCall());throw(error)});
  }
);
