
import "./uploadImage.css";
import axios from "axios";

function handleSubmit(e) {
  e.preventDefault();
  const { File } = e.target.elements;
  
   console.log({ File: File.value});
  axios.post("http://localhost:5000/upload", {
    File: File.value
  });
}
export default function uploadImage() {
  return (
    <div class="uploadImage">
      <div className="uploadImageTitleContainer">Report</div>
      <div className="uploadImageAdd">
          <span className="uploadImageAddTitle">Add Image</span>
          <form className="uploadImageAddForm" onSubmit={handleSubmit} action="POST" >
              <div className="uploadImageAddLeft">
                  <div className="uploadImageAddItem">
                      <label>Image add</label>
                      <input id="File" type="file" className="uploadImageInputs" />
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
        Search Result
      </div>
    </div>
  );
}
