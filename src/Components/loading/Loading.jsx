import "./loading.scss";

const Loading = () => {
  return (
    <div className="demo-container">
      <h1 className="title">Uploading...</h1>
      <div className="progress-bar">
        <div className="progress-bar-value"></div>
      </div>
    </div>
  )
}

export default Loading