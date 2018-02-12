import React, { PropTypes } from "react";
class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { item } = this.props;
    return <div className="TodoListItem">{item}</div>;
  }
}
TodoListItem.propTypes = {
  item: PropTypes.string
};
TodoListItem.defaultProps = {
  item: ""
};
export default TodoListItem;
