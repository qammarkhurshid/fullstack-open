import { Header } from './Header';
import { Content } from './Content';
import { Total } from './Total';

export const Course = ({ courses }) => {
  return courses.map((course, idx) => {
    return (
      <div key={idx * idx}>
        <Header headerText={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    );
  });
};
