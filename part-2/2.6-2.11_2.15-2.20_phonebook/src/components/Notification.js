export const Notification = ({ message }) => {
  const messageStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16,
    margin: 10,
    padding: 10,
    borderStyle: 'solid',
    borderColor: 'green',
  };
  if (!message) return null;
  return <div style={messageStyle}>{message}</div>;
};
