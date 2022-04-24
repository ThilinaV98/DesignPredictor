import React from "react";

export default function FileUploader() {
  return (
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <div class="input-group image-preview">
              <input
                type="text"
                class="form-control image-preview-filename"
                disabled="disabled"
              />
              <span class="input-group-btn">
                <button
                  type="button"
                  class="btn btn-default image-preview-clear"
                //   style="display:none;"
                >
                  <span class="glyphicon glyphicon-remove"></span> Clear
                </button>

                <div class="btn btn-default image-preview-input">
                  <span class="glyphicon glyphicon-folder-open"></span>
                  <span class="image-preview-input-title">Browse</span>
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/gif"
                    name="input-file-preview"
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
  );
}
