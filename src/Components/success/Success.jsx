import { FcApproval } from "react-icons/fc";
import "./success.scss";

const Success = ({ url }) => {

  const handleClick = () => {
    navigator.clipboard.writeText(url);
  }

  return (
    <div className="success-container">
      <FcApproval className="icon" />
      <div className="title">
        Uploaded Successfully!
      </div>
      <img src={`${url}`} alt="" className="image" />
      <div className="link-container">
        <div className="link">
          https://images.pexels.com/photos/3742854/pexels-photo-3742854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
        </div>
        <button className="copy-button" onClick={handleClick}>
          Copy Link
        </button>
      </div>
    </div>
  )
}

export default Success