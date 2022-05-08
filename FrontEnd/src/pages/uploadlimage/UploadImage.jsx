
import "./uploadImage.css";
import axios from "axios";

import React,{ useState } from "react";

// function handleSubmit(e) {
//   e.preventDefault();
//   const { File } = e.target.elements;
//   // let [file,setFile] = useState({});
//   //  console.log({ File: File.value});
//   //  setFile(File.value)
//   //  console.log({ File: file});
//    const data = new FormData() 

//   axios.post("http://localhost:5000/upload", {
//     File: File.value
//   });
// }



const UploadImage=()=> {
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData();
    formData.append("File", selectedFile);
    try {
      const response =  axios({
        method: "post",
        url: "http://localhost:5000/upload",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
    }
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  return (
    <div className="uploadImage">
      <div className="uploadImageTitleContainer">Report</div>
      <div className="uploadImageAdd">
          <span className="uploadImageAddTitle">Add Image</span>
          <form className="uploadImageAddForm" onSubmit={handleSubmit} action="POST" >
              <div className="uploadImageAddLeft">
                  <div className="uploadImageAddItem">
                      <label>Image add</label>
                      <input id="File" type="file" className="uploadImageInputs" onChange={handleFileSelect} />
                  </div>
              </div>
              <div className="uploadImageAddRight">
            <div className="uploadImageAddItem"></div>
            <button className="uploadImageAddButton">Submit The Image</button>
            {/* <input className="uploadImageAddButton" type="submit" value="Submit The Image" /> */}
          </div>
          </form>
      </div>
      <div>
        {/* Search Result */}
      </div>
    </div>
  );
}

export default UploadImage;