import { Part } from './Part';

export const Content = ({ parts }) => {
  return parts.map((p, idx) => {
    return <Part part={p} key={idx * idx} />;
  });
};
