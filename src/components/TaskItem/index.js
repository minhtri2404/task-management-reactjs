import React from "react";

function TaskItem(tasks) {
  let { task, index } = tasks;

  const onUpdateStatus = () => {
    // console.log(tasks.task.id);
    tasks.onUpdateStatus(tasks.task.id);
  };

  return (
    <tr>
      <td>{index}</td>
      <td>{task.name}</td>
      <td className="text-center">
        <span
          className={
            task.status === true ? "label label-danger" : "label label-success"
          }
          onClick={onUpdateStatus}
        >
          {task.status === true ? "Đang thực hiện" : "Ẩn"}
        </span>
      </td>
      <td className="text-center">
        <button type="button" className="btn btn-warning">
          <span className="fa fa-pencil mr-5"></span>Sửa
        </button>
        &nbsp;
        <button type="button" className="btn btn-danger">
          <span className="fa fa-trash mr-5"></span>Xóa
        </button>
      </td>
    </tr>
  );
}

export default TaskItem;
