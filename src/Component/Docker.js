import React from 'react'

export default function Docker() {
  return (
    
    <div>
<div class="navbar-top">
    <nav id="top-nav">
      <h1 id="logo-txt">
        Container Management Tool
        <i class="fa-brands fa-docker" id="logo"></i>
      </h1>
    </nav>
  </div>
  <div class="container">
    <div class="side-navbar">
      <div class="navbar">
        <nav id="side-nav">
          <ul>
            <li class="selectedLink" name="container">
              <i class="fa-solid fa-box"></i> Containers
            </li>
            <li name="images"><i class="fa-solid fa-atom"></i> Images</li>
            <li name="terminal">
              <i class="fa-solid fa-terminal"></i> Terminal
            </li>
            <li name="dockerfile">
              <i class="fa-solid fa-file"></i> Dockerfile
            </li>
            
          </ul>
        </nav>
      </div>
    </div>
   
      <div class="card active container" data-container>
        <div class="title">Containers</div>
        <div class="buttons">
          <button class="addbtn" onclick="displayPopup()">
            <i class="fa-solid fa-plus"></i> Create Container
          </button>
          <button class="addbtn" onclick="start_container()">
            <i class="fa-solid fa-circle-play"></i> Start
          </button>
          <button class="addbtn" onclick="stop_container()">
            <i class="fa-solid fa-ban"></i> Stop
          </button>
          <button class="addbtn" onclick="ps_code()">
            <i class="fa-solid fa-list"></i> List
          </button>
          <button class="addbtn" onclick="psall_code()">
            <i class="fa-solid fa-list-ol"></i> List all
          </button>
    
          <button class="addbtn" onclick="delete_container()">
            <i class="fa-solid fa-trash-can"></i> Delete
          </button>
          <button class="addbtn" onclick="delete_all_container()">
            <i class="fa-solid fa-trash-can"></i> Delete All
          </button>
        </div>
        <div class="formContainer" id="formContainer">
          <form>
            <div class="form-group">
              <label for="name">Container Name</label>

            

              <input type="text" name="container_name" class="form-control" id="containerName"
                aria-describedby="emailHelp" placeholder="Enter Container Name" required />
            </div>
            <div class="form-group">
              <label for="name">Image Name</label>
              <select name="container_image" id="containerImage" class="form-control form-control-lg" required>
                <option>ubuntu</option>
                <option>centos</option>
              </select>
            </div>
            <div class="form-group">
              <label for="name">Exposed Port</label>
              <input name="container_port" type="text" class="form-control" id="containerPort"
                aria-describedby="emailHelp" placeholder="Enter Exposed Port Number eg. 8080:80" />
            </div>

            <div class="btn">
              <button type="submit" class="submit-btn btn-same" onclick="drun_code()">
                Run
              </button>
              <button type="cancel" class="cancel-btn btn-same" onclick="cancelPopup()">
                cancel
              </button>
            </div>
          </form>
        </div>

     
        <div id="startContainerMainBox">
          <div class="input">
            <label for="imageName">Enter image name to start</label>
            <input type="text" name="container_name" id="start_container" required />
          </div>
          <div id="btn-flex">
            <button id="startContainer" class="btnContainer" onclick="start_code()">
              Start
            </button>
            <button id="cancelContainer" class="btnContainer" onclick="cancelContainer()">
              Cancel
            </button>
          </div>
        </div>

       
        <div id="stopContainerMainBox">
          <div class="input">
            <label for="containerStop">Enter container name to Stop</label>
            <input type="text" name="containerNameToStop" id="containerNameToStop" required />
          </div>
          <div id="btn-flex">
            <button id="stopContainer" class="btnContainer" onclick="stop_code()">
              Stop
            </button>
            <button id="cancelStopContainer" class="btnContainer" onclick="cancelStopContainer()">
              Cancel
            </button>
          </div>
        </div>
       
        <div id="deleteContainerMainBox">
          <div class="input">
            <label for="containerDelete">Enter container name to delete</label>
            <input type="text" name="containerNameToDelete" id="containerNameToDelete" required />
          </div>
          <div id="btn-flex">
            <button id="deleteContainer" class="btnContainer" onclick="delete_container_code()">
              Delete
            </button>
            <button id="canceldeleteContainer" class="btnContainer" onclick="canceldeleteContainer()">
              Cancel
            </button>
          </div>
        </div>

       
        <div id="deleteAllContainerMainBox">
          <div class="input">
            <p>
              This button will delete all stopped containers. Don't proceed
              until you are 100% sure.To delete runnning containers first stop
              them
            </p>

            <label for="containerDelete">Type <b>Delete </b> to delete</label>
            <input type="text" name="containerAllToDelete" id="containerAllToDelete" required />
          </div>
          <div id="btn-flex">
            <button id="deleteAllContainer" class="btnContainer" onclick="delete_all_container_code()">
              Delete
            </button>
            <button id="cancelAlldeleteContainer" class="btnContainer" onclick="canceldeleteAllContainer()">
              Cancel
            </button>
          </div>
        </div>

        <div class="content">
          <table class="table-style">
            <tr>
              <th>Container ID</th>
              <th>Image Name</th>
              <th>Command</th>
              <th>Container name</th>
            </tr>
          </table>
        
          <div id="container_content" ></div>
          <div id="container_content2" ></div>
        </div>
      </div>

      
      <div class="card images" data-images>
        <div class="title">Images</div>
        <div class="buttons-images">
          <div>
            <button class="addbtn-img" onclick="downloadImagePopup()">
              <i class="fa-solid fa-download"></i> Download
            </button>
           
            <div id="startContainerMainBox">
              <div class="input">
                <label for="imageName">Download Image</label>
                <input type="text" name="imageName" id="downloadImageName" required />
              </div>
              <div id="btn-flex">
                <button id="startContainer" class="btnContainer" onclick="download_Container()">
                  Start
                </button>
              </div>
            </div>

           
            <div id="deleteImageBox">
              <div class="input">
                <label for="containerDelete">Enter image name to delete</label>
                <input type="text" name="imageNameToDelete" id="imageNameToDelete" required />
              </div>
              <div id="btn-flex">
                <button id="deleteImage" class="btnContainer" onclick="delete_image_ajax()">
                  Delete
                </button>
                <button id="canceldeleteImage" class="btnContainer" onclick="canceldeleteImage()">
                  Cancel
                </button>
              </div>
            </div>
            
              <div id="deleteImageBox">
                <div class="input">
                  <label for="containerDelete">Enter image name to delete</label>
                  <input type="text" name="imageNameToDelete" id="imageNameToDelete" required />
                </div>
                <div id="btn-flex">
                  <button id="deleteImage" class="btnContainer" onclick="delete_image_ajax()">
                    Delete
                  </button>
                  <button id="canceldeleteImage" class="btnContainer" onclick="canceldeleteImage()">
                    Cancel
                  </button>
                </div>
              </div>
              
              <div id="downloadImageBox">
                <div class="input">
                  <label for="containerDownload">Enter image name to download</label>
                  <input type="text" name="imageNameToDownload" id="imageNameToDownload" required />
                </div>
                <div id="btn-flex">
                  <button id="downloadImage" class="btnContainer" onclick="download_image_ajax()">
                    Download
                  </button>
                  <button id="cancelDownloadImage" class="btnContainer" onclick="cancelDownloadImage()">
                    Cancel
                  </button>
                </div>
              </div>
              

  <div id="searchPopup">
  <div>
   <h1 >Work in progress</h1>
  </div>
    <div id="btn-flex">
     
      <button id="canceldeleteImage" class="btnContainer" onclick="cancelSearchPopup()">
        Cancel
      </button>
    </div>
  </div>
  
            
            <button class="addbtn-img"  onclick="deleteImagePopup()">
              <i class="fa-solid fa-trash-can"></i> Delete
            </button>

            <button class="addbtn-img" onclick="dimage_code()">
              <i class="fa-solid fa-display"></i> Display Images
            </button>
          </div>
          <form action="">
            <input type="text" placeholder="Search Images" name="search" class="image-search" />
            <button type="submit" class="image-btns" onclick="searchPopup()" id="submit">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>

        <div id="table-style-2">
          <table>
            <tr>
              <th>Name</th>
              <th>Version</th>
              <th>Container ID</th>
              <th>Image Size</th>
            </tr>
          </table>
          
          <div id="content">


          </div>
        </div>
      </div>
    </div>
   </div>
  )
}


