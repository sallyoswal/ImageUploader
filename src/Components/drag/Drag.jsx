import { useEffect, useState } from "react";
import { GrDownload } from "react-icons/gr";

import Loading from "../loading/Loading.jsx";
import Success from "../success/Success.jsx";

import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import "./drag.scss";

const Drag = () => {

  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");

  useEffect(() => {
      const uploadFile = () => {
      const name = new Date().getTime() + file?.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed',
        (snapshot) => {
          setLoading(true);
          switch (snapshot.state) {
            case 'paused':
              break;
            case 'running':
              break;
            default:
              break;
          }
        }, 
        (error) => {
          console.log(error.code);
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUploadSuccess(true);
            setLoading(false);
            setDownloadUrl(downloadURL);
          });
        }
      );
    }

    file && uploadFile()
  }, [file])

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  }

  const handleChange = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  }

  if (loading) return <Loading />;
  
  if (uploadSuccess) return <Success url={downloadUrl} />;

  return (
    <div className="drag-container">
      <h1 className="title">Upload your image</h1>
      <h4 className="sub-title">File should be Jpeg, Png,...</h4>
      <div className="drag-area" onDragOver={handleDragOver} onDrop={handleDrop}>
        <GrDownload className='icon' />
        <h4 className='drag-title'>Drag & Drop your image here</h4>
      </div>
      <h4 className='or'>or</h4>
      <form>
        <div className="label">
          <label htmlFor="file" className='label-text'>
            Choose a file
          </label>
        </div>
        <input type="file" id="file" style={{ display: "none" }} onChange={handleChange} />
      </form>
    </div>
  )
}

export default Drag