import React, { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  console.log(file)

  const handleUpload = async () => {
    console.log("hii thre")
    if (!file) {
      alert("Please select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("File uploaded successfully");
      } else {
        alert("Failed to upload file");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred while uploading the file");
    }
  };

  return (
     <div className="flex items-center justify-center">

        <label htmlFor="uploadFile1" className="cursor-pointer">
        <svg
          width="181"
          height="39"
          viewBox="0 0 181 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        > 
          <rect
            x="0.595703"
            y="0.5"
            width="179"
            height="38"
            rx="7.5"
            stroke="black"
          />
          <g clip-path="url(#clip0_6_743)">
            <path
              d="M46 27.875C50.3492 27.875 53.875 24.3492 53.875 20C53.875 15.6508 50.3492 12.125 46 12.125C41.6508 12.125 38.125 15.6508 38.125 20C38.125 24.3492 41.6508 27.875 46 27.875Z"
              stroke="black"
              stroke-width="0.875"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M42.625 20H49.375"
              stroke="black"
              stroke-width="0.875"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M46 16.625V23.375"
              stroke="black"
              stroke-width="0.875"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <path
            d="M74.4226 15.3182H76.267V21.9702C76.267 22.6993 76.0947 23.3407 75.75 23.8942C75.4086 24.4477 74.928 24.8802 74.3082 25.1918C73.6884 25.5 72.9643 25.6541 72.1357 25.6541C71.3037 25.6541 70.5779 25.5 69.9581 25.1918C69.3383 24.8802 68.8577 24.4477 68.5163 23.8942C68.175 23.3407 68.0043 22.6993 68.0043 21.9702V15.3182H69.8487V21.8161C69.8487 22.2403 69.9415 22.6181 70.1271 22.9496C70.3161 23.281 70.5812 23.5412 70.9226 23.7301C71.264 23.9157 71.6683 24.0085 72.1357 24.0085C72.603 24.0085 73.0073 23.9157 73.3487 23.7301C73.6934 23.5412 73.9586 23.281 74.1442 22.9496C74.3298 22.6181 74.4226 22.2403 74.4226 21.8161V15.3182ZM78.1923 28.3636V17.8636H79.9622V19.1264H80.0666C80.1594 18.9408 80.2903 18.7436 80.4593 18.5348C80.6284 18.3227 80.8571 18.142 81.1454 17.9929C81.4338 17.8404 81.8017 17.7642 82.2491 17.7642C82.8391 17.7642 83.371 17.915 83.845 18.2166C84.3223 18.5149 84.7001 18.9574 84.9785 19.544C85.2602 20.1274 85.4011 20.8433 85.4011 21.6918C85.4011 22.5303 85.2636 23.2429 84.9885 23.8295C84.7134 24.4162 84.3388 24.8636 83.8649 25.1719C83.3909 25.4801 82.854 25.6342 82.2541 25.6342C81.8166 25.6342 81.4537 25.5613 81.1653 25.4155C80.877 25.2696 80.6449 25.094 80.4693 24.8885C80.2969 24.6797 80.1627 24.4825 80.0666 24.2969H79.992V28.3636H78.1923ZM79.9572 21.6818C79.9572 22.1757 80.0268 22.6082 80.166 22.9794C80.3085 23.3506 80.5124 23.6406 80.7775 23.8494C81.046 24.0549 81.3708 24.1577 81.752 24.1577C82.1497 24.1577 82.4828 24.0516 82.7512 23.8395C83.0197 23.6241 83.2219 23.3307 83.3578 22.9595C83.497 22.585 83.5666 22.1591 83.5666 21.6818C83.5666 21.2079 83.4986 20.7869 83.3627 20.419C83.2269 20.0511 83.0247 19.7628 82.7562 19.554C82.4877 19.3452 82.153 19.2408 81.752 19.2408C81.3675 19.2408 81.041 19.3419 80.7725 19.544C80.5041 19.7462 80.3002 20.0296 80.161 20.3942C80.0252 20.7588 79.9572 21.188 79.9572 21.6818ZM88.742 15.3182V25.5H86.9423V15.3182H88.742ZM93.9237 25.6491C93.1779 25.6491 92.5316 25.4851 91.9847 25.157C91.4379 24.8288 91.0136 24.3698 90.712 23.7798C90.4137 23.1899 90.2646 22.5005 90.2646 21.7116C90.2646 20.9228 90.4137 20.2318 90.712 19.6385C91.0136 19.0452 91.4379 18.5845 91.9847 18.2564C92.5316 17.9283 93.1779 17.7642 93.9237 17.7642C94.6694 17.7642 95.3157 17.9283 95.8626 18.2564C96.4094 18.5845 96.832 19.0452 97.1303 19.6385C97.4319 20.2318 97.5827 20.9228 97.5827 21.7116C97.5827 22.5005 97.4319 23.1899 97.1303 23.7798C96.832 24.3698 96.4094 24.8288 95.8626 25.157C95.3157 25.4851 94.6694 25.6491 93.9237 25.6491ZM93.9336 24.2074C94.3379 24.2074 94.676 24.0964 94.9478 23.8743C95.2196 23.6489 95.4218 23.3473 95.5543 22.9695C95.6902 22.5916 95.7582 22.1707 95.7582 21.7067C95.7582 21.2393 95.6902 20.8168 95.5543 20.4389C95.4218 20.0578 95.2196 19.7545 94.9478 19.5291C94.676 19.3037 94.3379 19.1911 93.9336 19.1911C93.5193 19.1911 93.1746 19.3037 92.8995 19.5291C92.6277 19.7545 92.4239 20.0578 92.288 20.4389C92.1554 20.8168 92.0891 21.2393 92.0891 21.7067C92.0891 22.1707 92.1554 22.5916 92.288 22.9695C92.4239 23.3473 92.6277 23.6489 92.8995 23.8743C93.1746 24.0964 93.5193 24.2074 93.9336 24.2074ZM101.308 25.6541C100.824 25.6541 100.388 25.5679 100 25.3956C99.6157 25.2199 99.3108 24.9614 99.0854 24.62C98.8633 24.2786 98.7523 23.8577 98.7523 23.3572C98.7523 22.9264 98.8319 22.5701 98.9909 22.2884C99.15 22.0066 99.3671 21.7812 99.6422 21.6122C99.9173 21.4432 100.227 21.3156 100.572 21.2294C100.92 21.1399 101.28 21.0753 101.651 21.0355C102.098 20.9891 102.461 20.9477 102.74 20.9112C103.018 20.8714 103.22 20.8118 103.346 20.7322C103.475 20.6494 103.54 20.5218 103.54 20.3494V20.3196C103.54 19.9451 103.429 19.6551 103.207 19.4496C102.985 19.2441 102.665 19.1413 102.247 19.1413C101.807 19.1413 101.457 19.2375 101.198 19.4297C100.943 19.6219 100.771 19.849 100.681 20.1108L99.0009 19.8722C99.1335 19.4081 99.3522 19.0204 99.6571 18.7088C99.9621 18.3939 100.335 18.1586 100.776 18.0028C101.217 17.8438 101.704 17.7642 102.237 17.7642C102.605 17.7642 102.972 17.8073 103.336 17.8935C103.701 17.9796 104.034 18.1222 104.335 18.321C104.637 18.5166 104.879 18.7834 105.061 19.1214C105.247 19.4595 105.34 19.8821 105.34 20.3892V25.5H103.61V24.451H103.55C103.441 24.6631 103.286 24.862 103.088 25.0476C102.892 25.2299 102.645 25.3774 102.347 25.4901C102.052 25.5994 101.705 25.6541 101.308 25.6541ZM101.775 24.3317C102.136 24.3317 102.45 24.2604 102.715 24.1179C102.98 23.9721 103.184 23.7798 103.326 23.5412C103.472 23.3026 103.545 23.0424 103.545 22.7607V21.8608C103.489 21.9072 103.392 21.9503 103.257 21.9901C103.124 22.0298 102.975 22.0646 102.809 22.0945C102.643 22.1243 102.479 22.1508 102.317 22.174C102.155 22.1972 102.014 22.2171 101.894 22.2337C101.626 22.2701 101.386 22.3298 101.173 22.4126C100.961 22.4955 100.794 22.6115 100.671 22.7607C100.549 22.9065 100.487 23.0954 100.487 23.3274C100.487 23.6589 100.608 23.9091 100.85 24.0781C101.092 24.2472 101.401 24.3317 101.775 24.3317ZM109.983 25.6342C109.383 25.6342 108.846 25.4801 108.372 25.1719C107.898 24.8636 107.524 24.4162 107.249 23.8295C106.974 23.2429 106.836 22.5303 106.836 21.6918C106.836 20.8433 106.975 20.1274 107.254 19.544C107.535 18.9574 107.915 18.5149 108.392 18.2166C108.869 17.915 109.401 17.7642 109.988 17.7642C110.436 17.7642 110.803 17.8404 111.092 17.9929C111.38 18.142 111.609 18.3227 111.778 18.5348C111.947 18.7436 112.078 18.9408 112.171 19.1264H112.245V15.3182H114.05V25.5H112.28V24.2969H112.171C112.078 24.4825 111.944 24.6797 111.768 24.8885C111.592 25.094 111.36 25.2696 111.072 25.4155C110.784 25.5613 110.421 25.6342 109.983 25.6342ZM110.485 24.1577C110.866 24.1577 111.191 24.0549 111.46 23.8494C111.728 23.6406 111.932 23.3506 112.071 22.9794C112.21 22.6082 112.28 22.1757 112.28 21.6818C112.28 21.188 112.21 20.7588 112.071 20.3942C111.935 20.0296 111.733 19.7462 111.465 19.544C111.2 19.3419 110.873 19.2408 110.485 19.2408C110.084 19.2408 109.749 19.3452 109.481 19.554C109.213 19.7628 109.01 20.0511 108.874 20.419C108.739 20.7869 108.671 21.2079 108.671 21.6818C108.671 22.1591 108.739 22.585 108.874 22.9595C109.014 23.3307 109.218 23.6241 109.486 23.8395C109.758 24.0516 110.091 24.1577 110.485 24.1577ZM119.52 25.5V15.3182H123.338C124.12 15.3182 124.777 15.464 125.307 15.7557C125.84 16.0473 126.243 16.4484 126.515 16.9588C126.79 17.4659 126.928 18.0426 126.928 18.6889C126.928 19.3419 126.79 19.9219 126.515 20.429C126.24 20.9361 125.834 21.3355 125.297 21.6271C124.76 21.9155 124.099 22.0597 123.313 22.0597H120.783V20.5433H123.065C123.522 20.5433 123.897 20.4638 124.188 20.3047C124.48 20.1456 124.695 19.9268 124.835 19.6484C124.977 19.37 125.048 19.0502 125.048 18.6889C125.048 18.3277 124.977 18.0095 124.835 17.7344C124.695 17.4593 124.478 17.2455 124.183 17.093C123.892 16.9373 123.515 16.8594 123.055 16.8594H121.364V25.5H119.52ZM131.98 25.5H128.53V15.3182H132.05C133.06 15.3182 133.929 15.522 134.655 15.9297C135.384 16.334 135.944 16.9157 136.335 17.6747C136.726 18.4337 136.922 19.3419 136.922 20.3991C136.922 21.4598 136.724 22.3712 136.33 23.1335C135.939 23.8958 135.374 24.4808 134.635 24.8885C133.899 25.2962 133.014 25.5 131.98 25.5ZM130.374 23.9041H131.89C132.6 23.9041 133.191 23.7749 133.665 23.5163C134.139 23.2545 134.496 22.8651 134.734 22.348C134.973 21.8277 135.092 21.178 135.092 20.3991C135.092 19.6203 134.973 18.974 134.734 18.4602C134.496 17.9432 134.143 17.5571 133.675 17.3018C133.211 17.0433 132.635 16.9141 131.945 16.9141H130.374V23.9041ZM138.674 25.5V15.3182H145.197V16.8643H140.519V19.6286H144.749V21.1747H140.519V25.5H138.674Z"
            fill="black"
          />
          <defs>
            <clipPath id="clip0_6_743">
              <rect
                width="18"
                height="18"
                fill="white"
                transform="translate(37 11)"
              />
            </clipPath>
          </defs>
        </svg>
       </label>
        <input
        type="file"
        id="uploadFile1"
        className="hidden"
        onChange={handleFileChange}
      />
       <button onClick={handleUpload} className="ml-4 px-4 py-2 bg-slate-800 text-zinc-50 rounded-md">Send</button>
     

    </div>

        
       
    
  );
};

export default Upload;