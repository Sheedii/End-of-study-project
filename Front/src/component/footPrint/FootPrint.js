import React from 'react'
import './footPrint.css'
import selectIcon from "../../assets/footPrint.svg";

const FootPrint = () => {
    return (
        <div className='footPrint'>
            <div className='footTitle'>
                <div className='PrintHeatmapIcon'>
                    <img src={selectIcon} alt="selectIcon" />
                    <div className='PrintHeatmap'>Foot print Heatmap</div>
                </div>
                <div className='footPrintDate'>February 20, 2024 12:35 PM</div>
            </div>

            <div className='weekSelection'>
                <select >
                    <option value="lastWeek">Last Week</option>
                    <option value="lastWeek">Last Week</option>
                    <option value="lastWeek">Last Week</option>
                </select>
            </div>
            <div className='footPrintModel'>
                <div className='footPrintTime'>
                    <div>7 PM</div>
                    <div>5 PM</div>
                    <div>3 PM</div>
                    <div>1 PM</div>
                    <div>11 AM</div>
                    <div>9 AM</div>
                </div>
                <svg width="393" height="407" viewBox="0 0 393 407" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="51.6006" height="51.6006" rx="10" fill="#FEB700" />
                    <rect x="56.7607" width="51.6006" height="51.6006" rx="10" fill="#FEB700" />
                    <rect x="113.521" width="51.6006" height="51.6006" rx="10" fill="#FEB700" />
                    <rect x="170.282" width="51.6006" height="51.6006" rx="10" fill="#FEB700" />
                    <rect x="227.043" width="51.6006" height="51.6006" rx="10" fill="#FEB700" />
                    <rect x="283.804" width="51.6006" height="51.6006" rx="10" fill="#FF6B00" />
                    <rect x="340.564" width="51.6006" height="51.6006" rx="10" fill="#FEB700" />
                    <rect y="56.7607" width="51.6006" height="51.6006" rx="10" fill="#FEB700" />
                    <rect x="56.7607" y="56.7607" width="51.6006" height="51.6006" rx="10" fill="#FF6B00" />
                    <rect x="113.521" y="56.7607" width="51.6006" height="51.6006" rx="10" fill="#FF6B00" />
                    <rect x="170.282" y="56.7607" width="51.6006" height="51.6006" rx="10" fill="#FF6B00" />
                    <rect x="227.043" y="56.7607" width="51.6006" height="51.6006" rx="10" fill="#AAD696" />
                    <rect x="283.804" y="56.7607" width="51.6006" height="51.6006" rx="10" fill="#9E1421" />
                    <rect x="340.564" y="56.7607" width="51.6006" height="51.6006" rx="10" fill="#AAD696" />
                    <rect y="113.521" width="51.6006" height="51.6006" rx="10" fill="#C7CFE6" />
                    <rect x="56.7607" y="113.521" width="51.6006" height="51.6006" rx="10" fill="#AAD696" />
                    <rect x="113.521" y="113.521" width="51.6006" height="51.6006" rx="10" fill="#FF6B00" />
                    <rect x="170.282" y="113.521" width="51.6006" height="51.6006" rx="10" fill="#9E1421" />
                    <rect x="227" y="114" width="51.6006" height="51.6006" rx="10" fill="#9E1421" />
                    <rect x="283.804" y="113.521" width="51.6006" height="51.6006" rx="10" fill="#9E1421" />
                    <rect x="340.564" y="113.521" width="51.6006" height="51.6006" rx="10" fill="#AAD696" />
                    <rect y="170.282" width="51.6006" height="51.6006" rx="10" fill="#FF6B00" />
                    <rect x="56.7607" y="170.282" width="51.6006" height="51.6006" rx="10" fill="#FF6B00" />
                    <rect x="113.521" y="170.282" width="51.6006" height="51.6006" rx="10" fill="#9E1421" />
                    <rect x="170.282" y="170.282" width="51.6006" height="51.6006" rx="10" fill="#FF6B00" />
                    <rect x="227.043" y="170.282" width="51.6006" height="51.6006" rx="10" fill="#FF6B00" />
                    <rect x="283.804" y="170.282" width="51.6006" height="51.6006" rx="10" fill="#FF6B00" />
                    <rect x="340.564" y="170.282" width="51.6006" height="51.6006" rx="10" fill="#AAD696" />
                    <rect y="227.043" width="51.6006" height="51.6006" rx="10" fill="#C7CFE6" />
                    <rect x="56.7607" y="227.043" width="51.6006" height="51.6006" rx="10" fill="#FEB700" />
                    <rect x="113.521" y="227.043" width="51.6006" height="51.6006" rx="10" fill="#FF6B00" />
                    <rect x="170.282" y="227.043" width="51.6006" height="51.6006" rx="10" fill="#FEB700" />
                    <rect x="227.043" y="227.043" width="51.6006" height="51.6006" rx="10" fill="#FEB700" />
                    <rect x="283.804" y="227.043" width="51.6006" height="51.6006" rx="10" fill="#FEB700" />
                    <rect x="340.564" y="227.043" width="51.6006" height="51.6006" rx="10" fill="#AAD696" />
                    <rect y="283.803" width="51.6006" height="51.6006" rx="10" fill="#C7CFE6" />
                    <rect x="56.7607" y="283.803" width="51.6006" height="51.6006" rx="10" fill="#AAD696" />
                    <rect x="113.521" y="283.803" width="51.6006" height="51.6006" rx="10" fill="#C7CFE6" />
                    <rect x="170.282" y="283.803" width="51.6006" height="51.6006" rx="10" fill="#AAD696" />
                    <rect x="227.043" y="283.803" width="51.6006" height="51.6006" rx="10" fill="#AAD696" />
                    <rect x="283.804" y="283.803" width="51.6006" height="51.6006" rx="10" fill="#AAD696" />
                    <rect x="340.564" y="283.803" width="51.6006" height="51.6006" rx="10" fill="#FEB700" />
                    <rect x="106" y="381" width="25.8003" height="25.8003" rx="10" fill="#C7CFE6" />
                    <rect x="136.96" y="381" width="25.8003" height="25.8003" rx="10" fill="#AAD696" />
                    <rect x="167.921" y="381" width="25.8003" height="25.8003" rx="10" fill="#FEB700" />
                    <rect x="198.881" y="381" width="25.8003" height="25.8003" rx="10" fill="#FEB700" />
                    <rect x="229.842" y="381" width="25.8003" height="25.8003" rx="10" fill="#FF6B00" />
                    <rect x="260.802" y="381" width="25.8003" height="25.8003" rx="10" fill="#9E1421" />
                    <path d="M13.106 355V345.242H14.926L17.992 352.956H17.768L20.834 345.242H22.64V355H21.408V346.67L21.506 346.684L18.482 354.174H17.278L14.24 346.684L14.338 346.67V355H13.106ZM27.7901 355.112C27.1461 355.112 26.5675 354.963 26.0541 354.664C25.5501 354.356 25.1535 353.931 24.8641 353.39C24.5748 352.849 24.4301 352.233 24.4301 351.542C24.4301 350.851 24.5701 350.24 24.8501 349.708C25.1395 349.167 25.5361 348.747 26.0401 348.448C26.5535 348.14 27.1368 347.986 27.7901 347.986C28.4435 347.986 29.0175 348.14 29.5121 348.448C30.0161 348.747 30.4128 349.167 30.7021 349.708C30.9915 350.24 31.1361 350.851 31.1361 351.542C31.1361 352.233 30.9915 352.849 30.7021 353.39C30.4128 353.922 30.0161 354.342 29.5121 354.65C29.0081 354.958 28.4341 355.112 27.7901 355.112ZM27.7901 354.062C28.2288 354.062 28.6068 353.959 28.9241 353.754C29.2508 353.539 29.5028 353.245 29.6801 352.872C29.8575 352.489 29.9461 352.046 29.9461 351.542C29.9461 351.029 29.8575 350.585 29.6801 350.212C29.5028 349.829 29.2508 349.535 28.9241 349.33C28.6068 349.125 28.2288 349.022 27.7901 349.022C27.3421 349.022 26.9548 349.129 26.6281 349.344C26.3015 349.549 26.0495 349.839 25.8721 350.212C25.6948 350.585 25.6061 351.029 25.6061 351.542C25.6061 352.046 25.6948 352.489 25.8721 352.872C26.0495 353.245 26.3015 353.539 26.6281 353.754C26.9548 353.959 27.3421 354.062 27.7901 354.062ZM32.8322 355V348.098H34.0222V349.568L33.7422 349.666C33.8729 349.311 34.0502 349.013 34.2742 348.77C34.4982 348.518 34.7689 348.327 35.0862 348.196C35.4036 348.056 35.7536 347.986 36.1362 347.986C36.8922 347.986 37.4849 348.21 37.9142 348.658C38.3436 349.097 38.5582 349.75 38.5582 350.618V355H37.3682V351.052C37.3682 350.352 37.2376 349.839 36.9762 349.512C36.7242 349.176 36.3369 349.008 35.8142 349.008C35.4316 349.008 35.1049 349.097 34.8342 349.274C34.5729 349.451 34.3722 349.731 34.2322 350.114C34.0922 350.487 34.0222 350.968 34.0222 351.556V355H32.8322Z" fill="#8E98A8" />
                    <path d="M71.6305 355V346.348H68.3545V345.242H76.1385V346.348H72.8765V355H71.6305ZM78.3945 355.112C77.8998 355.112 77.4705 355.014 77.1065 354.818C76.7425 354.613 76.4625 354.314 76.2665 353.922C76.0798 353.53 75.9865 353.045 75.9865 352.466V348.098H77.1625V352.046C77.1625 352.503 77.2185 352.886 77.3305 353.194C77.4518 353.493 77.6292 353.717 77.8625 353.866C78.0958 354.006 78.3852 354.076 78.7305 354.076C79.1132 354.076 79.4352 353.987 79.6965 353.81C79.9672 353.623 80.1725 353.343 80.3125 352.97C80.4525 352.597 80.5225 352.116 80.5225 351.528V348.098H81.6985V355H80.5225V353.53H80.8165C80.6205 354.043 80.3078 354.435 79.8785 354.706C79.4492 354.977 78.9545 355.112 78.3945 355.112ZM86.6388 355.112C86.0974 355.112 85.6214 355.023 85.2108 354.846C84.8094 354.659 84.4734 354.403 84.2028 354.076C83.9414 353.749 83.7408 353.376 83.6008 352.956C83.4701 352.527 83.4048 352.074 83.4048 351.598C83.4048 351.122 83.4701 350.669 83.6008 350.24C83.7314 349.801 83.9228 349.414 84.1748 349.078C84.4361 348.742 84.7628 348.476 85.1548 348.28C85.5468 348.084 86.0041 347.986 86.5268 347.986C87.0588 347.986 87.5161 348.079 87.8988 348.266C88.2908 348.443 88.6081 348.691 88.8508 349.008C89.1028 349.325 89.2894 349.68 89.4108 350.072C89.5321 350.464 89.5928 350.87 89.5928 351.29C89.5928 351.327 89.5881 351.416 89.5788 351.556C89.5788 351.687 89.5694 351.803 89.5508 351.906H84.5808C84.6088 352.578 84.8048 353.101 85.1688 353.474C85.5328 353.847 86.0274 354.034 86.6528 354.034C87.0541 354.034 87.4041 353.969 87.7028 353.838C88.0014 353.707 88.2814 353.497 88.5428 353.208L89.3688 353.936C89.1168 354.207 88.8508 354.431 88.5708 354.608C88.2908 354.776 87.9921 354.902 87.6748 354.986C87.3668 355.07 87.0214 355.112 86.6388 355.112ZM88.4168 351.304C88.4354 351.229 88.4448 351.155 88.4448 351.08C88.4541 351.005 88.4588 350.931 88.4588 350.856C88.4588 350.632 88.4168 350.408 88.3328 350.184C88.2581 349.96 88.1414 349.759 87.9828 349.582C87.8334 349.395 87.6374 349.251 87.3948 349.148C87.1614 349.036 86.8814 348.98 86.5548 348.98C86.1534 348.98 85.8081 349.073 85.5188 349.26C85.2294 349.447 85.0054 349.694 84.8468 350.002C84.6881 350.31 84.5948 350.651 84.5667 351.024H88.8088L88.4168 351.304ZM93.5693 355.112C93.1026 355.112 92.6826 355.042 92.3093 354.902C91.936 354.762 91.614 354.575 91.3433 354.342C91.082 354.109 90.872 353.861 90.7133 353.6L91.5393 352.9C91.7166 353.255 91.978 353.549 92.3233 353.782C92.678 354.006 93.098 354.118 93.5833 354.118C94.022 354.118 94.372 354.025 94.6333 353.838C94.8946 353.651 95.0253 353.399 95.0253 353.082C95.0253 352.821 94.946 352.615 94.7873 352.466C94.6286 352.317 94.4186 352.195 94.1573 352.102C93.896 352.009 93.6113 351.925 93.3033 351.85C93.042 351.785 92.776 351.705 92.5053 351.612C92.244 351.519 92.006 351.402 91.7913 351.262C91.5766 351.122 91.404 350.94 91.2733 350.716C91.1426 350.492 91.0773 350.217 91.0773 349.89C91.0773 349.321 91.2966 348.863 91.7353 348.518C92.1833 348.163 92.7666 347.986 93.4853 347.986C94.008 347.986 94.484 348.098 94.9133 348.322C95.352 348.537 95.6926 348.863 95.9353 349.302L95.1793 349.862C94.9926 349.535 94.7453 349.302 94.4373 349.162C94.1386 349.013 93.8073 348.938 93.4433 348.938C93.0793 348.938 92.776 349.013 92.5333 349.162C92.2906 349.311 92.1693 349.517 92.1693 349.778C92.1693 349.974 92.2253 350.133 92.3373 350.254C92.4493 350.375 92.6126 350.478 92.8273 350.562C93.0513 350.646 93.322 350.725 93.6393 350.8C93.9286 350.865 94.2226 350.945 94.5213 351.038C94.82 351.131 95.0953 351.253 95.3473 351.402C95.5993 351.551 95.8 351.752 95.9493 352.004C96.108 352.247 96.1873 352.564 96.1873 352.956C96.1873 353.385 96.08 353.763 95.8653 354.09C95.6506 354.417 95.3473 354.669 94.9553 354.846C94.5633 355.023 94.1013 355.112 93.5693 355.112Z" fill="#8E98A8" />
                    <path d="M127.439 355L124.583 345.242H125.871L128.125 353.138L130.351 345.774H131.583L133.809 353.138L136.049 345.242H137.337L134.481 355H133.263L130.869 347.244H131.065L128.671 355H127.439ZM140.882 355.112C140.341 355.112 139.865 355.023 139.454 354.846C139.053 354.659 138.717 354.403 138.446 354.076C138.185 353.749 137.984 353.376 137.844 352.956C137.713 352.527 137.648 352.074 137.648 351.598C137.648 351.122 137.713 350.669 137.844 350.24C137.975 349.801 138.166 349.414 138.418 349.078C138.679 348.742 139.006 348.476 139.398 348.28C139.79 348.084 140.247 347.986 140.77 347.986C141.302 347.986 141.759 348.079 142.142 348.266C142.534 348.443 142.851 348.691 143.094 349.008C143.346 349.325 143.533 349.68 143.654 350.072C143.775 350.464 143.836 350.87 143.836 351.29C143.836 351.327 143.831 351.416 143.822 351.556C143.822 351.687 143.813 351.803 143.794 351.906H138.824C138.852 352.578 139.048 353.101 139.412 353.474C139.776 353.847 140.271 354.034 140.896 354.034C141.297 354.034 141.647 353.969 141.946 353.838C142.245 353.707 142.525 353.497 142.786 353.208L143.612 353.936C143.36 354.207 143.094 354.431 142.814 354.608C142.534 354.776 142.235 354.902 141.918 354.986C141.61 355.07 141.265 355.112 140.882 355.112ZM142.66 351.304C142.679 351.229 142.688 351.155 142.688 351.08C142.697 351.005 142.702 350.931 142.702 350.856C142.702 350.632 142.66 350.408 142.576 350.184C142.501 349.96 142.385 349.759 142.226 349.582C142.077 349.395 141.881 349.251 141.638 349.148C141.405 349.036 141.125 348.98 140.798 348.98C140.397 348.98 140.051 349.073 139.762 349.26C139.473 349.447 139.249 349.694 139.09 350.002C138.931 350.31 138.838 350.651 138.81 351.024H143.052L142.66 351.304ZM148.344 355.112C147.719 355.112 147.168 354.958 146.692 354.65C146.226 354.333 145.862 353.903 145.6 353.362C145.339 352.821 145.208 352.214 145.208 351.542C145.208 350.814 145.348 350.184 145.628 349.652C145.908 349.12 146.286 348.709 146.762 348.42C147.238 348.131 147.766 347.986 148.344 347.986C148.783 347.986 149.175 348.075 149.52 348.252C149.866 348.42 150.155 348.653 150.388 348.952C150.631 349.241 150.799 349.568 150.892 349.932L150.556 350.156V345.242H151.732V355H150.556V352.942L150.948 353.068C150.827 353.469 150.645 353.824 150.402 354.132C150.16 354.44 149.866 354.683 149.52 354.86C149.175 355.028 148.783 355.112 148.344 355.112ZM148.54 354.02C148.96 354.02 149.329 353.917 149.646 353.712C149.964 353.497 150.211 353.203 150.388 352.83C150.566 352.457 150.654 352.027 150.654 351.542C150.654 351.057 150.566 350.627 150.388 350.254C150.211 349.881 149.964 349.591 149.646 349.386C149.329 349.171 148.96 349.064 148.54 349.064C148.12 349.064 147.747 349.171 147.42 349.386C147.103 349.591 146.851 349.881 146.664 350.254C146.487 350.627 146.398 351.057 146.398 351.542C146.398 352.027 146.487 352.457 146.664 352.83C146.851 353.203 147.103 353.497 147.42 353.712C147.747 353.917 148.12 354.02 148.54 354.02Z" fill="#8E98A8" />
                    <path d="M186.721 355V346.348H183.445V345.242H191.229V346.348H187.967V355H186.721ZM192.46 355V345.242H193.65V349.568L193.356 349.68C193.487 349.325 193.669 349.022 193.902 348.77C194.135 348.518 194.411 348.327 194.728 348.196C195.045 348.056 195.391 347.986 195.764 347.986C196.52 347.986 197.113 348.21 197.542 348.658C197.971 349.097 198.186 349.75 198.186 350.618V355H196.996V351.052C196.996 350.352 196.865 349.839 196.604 349.512C196.352 349.176 195.965 349.008 195.442 349.008C194.873 349.008 194.429 349.213 194.112 349.624C193.804 350.025 193.65 350.669 193.65 351.556V355H192.46ZM202.44 355.112C201.946 355.112 201.516 355.014 201.152 354.818C200.788 354.613 200.508 354.314 200.312 353.922C200.126 353.53 200.032 353.045 200.032 352.466V348.098H201.208V352.046C201.208 352.503 201.264 352.886 201.376 353.194C201.498 353.493 201.675 353.717 201.908 353.866C202.142 354.006 202.431 354.076 202.776 354.076C203.159 354.076 203.481 353.987 203.742 353.81C204.013 353.623 204.218 353.343 204.358 352.97C204.498 352.597 204.568 352.116 204.568 351.528V348.098H205.744V355H204.568V353.53H204.862C204.666 354.043 204.354 354.435 203.924 354.706C203.495 354.977 203 355.112 202.44 355.112Z" fill="#8E98A8" />
                    <path d="M245.478 355V345.242H251.876V346.348H246.71V349.47H251.19V350.576H246.71V355H245.478ZM252.777 355V348.098H253.967V349.946L253.659 350.016C253.724 349.605 253.878 349.251 254.121 348.952C254.373 348.644 254.662 348.406 254.989 348.238C255.325 348.07 255.651 347.986 255.969 347.986C256.183 347.986 256.389 348.009 256.585 348.056C256.781 348.103 256.981 348.182 257.187 348.294L256.599 349.358C256.487 349.302 256.351 349.255 256.193 349.218C256.043 349.181 255.899 349.162 255.759 349.162C255.535 349.162 255.311 349.204 255.087 349.288C254.872 349.372 254.676 349.503 254.499 349.68C254.321 349.857 254.186 350.095 254.093 350.394C254.055 350.525 254.023 350.697 253.995 350.912C253.976 351.117 253.967 351.402 253.967 351.766V355H252.777ZM258.464 355V348.098H259.64V355H258.464ZM258.352 346.852V345.242H259.752V346.852H258.352Z" fill="#8E98A8" />
                    <path d="M303.437 355.154C302.457 355.154 301.654 354.897 301.029 354.384C300.403 353.871 300.021 353.189 299.881 352.34L301.085 352.046C301.187 352.699 301.453 353.199 301.883 353.544C302.321 353.88 302.853 354.048 303.479 354.048C303.843 354.048 304.169 353.978 304.459 353.838C304.748 353.698 304.977 353.502 305.145 353.25C305.313 352.989 305.397 352.695 305.397 352.368C305.397 352.023 305.303 351.738 305.117 351.514C304.93 351.29 304.669 351.094 304.333 350.926C304.006 350.758 303.623 350.59 303.185 350.422C302.643 350.217 302.167 349.993 301.757 349.75C301.355 349.507 301.043 349.218 300.819 348.882C300.595 348.537 300.483 348.117 300.483 347.622C300.483 347.127 300.604 346.689 300.847 346.306C301.089 345.923 301.43 345.625 301.869 345.41C302.307 345.186 302.816 345.074 303.395 345.074C304.011 345.074 304.557 345.214 305.033 345.494C305.509 345.774 305.891 346.189 306.181 346.74L305.201 347.342C304.986 346.959 304.725 346.67 304.417 346.474C304.109 346.269 303.754 346.166 303.353 346.166C303.035 346.166 302.751 346.227 302.499 346.348C302.256 346.469 302.065 346.637 301.925 346.852C301.785 347.067 301.715 347.314 301.715 347.594C301.715 347.893 301.799 348.149 301.967 348.364C302.135 348.569 302.377 348.751 302.695 348.91C303.012 349.069 303.395 349.232 303.843 349.4C304.412 349.615 304.902 349.848 305.313 350.1C305.723 350.352 306.041 350.655 306.265 351.01C306.498 351.355 306.615 351.785 306.615 352.298C306.615 352.849 306.479 353.339 306.209 353.768C305.938 354.197 305.565 354.538 305.089 354.79C304.613 355.033 304.062 355.154 303.437 355.154ZM312.795 355L312.711 353.614V350.674C312.711 350.142 312.562 349.731 312.263 349.442C311.974 349.153 311.54 349.008 310.961 349.008C310.588 349.008 310.238 349.087 309.911 349.246C309.584 349.395 309.267 349.652 308.959 350.016L308.105 349.288C308.488 348.84 308.926 348.513 309.421 348.308C309.916 348.093 310.457 347.986 311.045 347.986C311.95 347.986 312.65 348.219 313.145 348.686C313.64 349.153 313.887 349.815 313.887 350.674V355H312.795ZM310.513 355.112C309.99 355.112 309.533 355.023 309.141 354.846C308.758 354.659 308.46 354.403 308.245 354.076C308.04 353.749 307.937 353.371 307.937 352.942C307.937 352.559 308.012 352.237 308.161 351.976C308.32 351.705 308.52 351.495 308.763 351.346C309.006 351.187 309.281 351.08 309.589 351.024C309.906 350.959 310.238 350.926 310.583 350.926H312.823V351.822H310.751C310.546 351.822 310.331 351.841 310.107 351.878C309.883 351.915 309.687 351.995 309.519 352.116C309.398 352.209 309.3 352.326 309.225 352.466C309.16 352.606 309.127 352.769 309.127 352.956C309.127 353.32 309.262 353.609 309.533 353.824C309.804 354.039 310.168 354.146 310.625 354.146C311.008 354.146 311.353 354.057 311.661 353.88C311.978 353.703 312.23 353.46 312.417 353.152C312.613 352.835 312.711 352.48 312.711 352.088L313.201 352.592C313.145 353.087 312.996 353.525 312.753 353.908C312.51 354.291 312.198 354.589 311.815 354.804C311.442 355.009 311.008 355.112 310.513 355.112ZM318.116 355.112C317.789 355.112 317.49 355.051 317.22 354.93C316.958 354.799 316.753 354.594 316.604 354.314C316.454 354.034 316.38 353.675 316.38 353.236V346.25L317.584 345.578V352.928C317.584 353.311 317.644 353.609 317.766 353.824C317.887 354.029 318.106 354.132 318.424 354.132C318.517 354.132 318.629 354.123 318.76 354.104C318.89 354.076 319.03 354.043 319.18 354.006V354.93C319.002 354.995 318.82 355.042 318.634 355.07C318.456 355.098 318.284 355.112 318.116 355.112ZM314.952 349.022V348.098H319.18V349.022H314.952Z" fill="#8E98A8" />
                    <path d="M358.481 355.154C357.501 355.154 356.698 354.897 356.073 354.384C355.447 353.871 355.065 353.189 354.925 352.34L356.129 352.046C356.231 352.699 356.497 353.199 356.927 353.544C357.365 353.88 357.897 354.048 358.523 354.048C358.887 354.048 359.213 353.978 359.503 353.838C359.792 353.698 360.021 353.502 360.189 353.25C360.357 352.989 360.441 352.695 360.441 352.368C360.441 352.023 360.347 351.738 360.161 351.514C359.974 351.29 359.713 351.094 359.377 350.926C359.05 350.758 358.667 350.59 358.229 350.422C357.687 350.217 357.211 349.993 356.801 349.75C356.399 349.507 356.087 349.218 355.863 348.882C355.639 348.537 355.527 348.117 355.527 347.622C355.527 347.127 355.648 346.689 355.891 346.306C356.133 345.923 356.474 345.625 356.913 345.41C357.351 345.186 357.86 345.074 358.439 345.074C359.055 345.074 359.601 345.214 360.077 345.494C360.553 345.774 360.935 346.189 361.225 346.74L360.245 347.342C360.03 346.959 359.769 346.67 359.461 346.474C359.153 346.269 358.798 346.166 358.397 346.166C358.079 346.166 357.795 346.227 357.543 346.348C357.3 346.469 357.109 346.637 356.969 346.852C356.829 347.067 356.759 347.314 356.759 347.594C356.759 347.893 356.843 348.149 357.011 348.364C357.179 348.569 357.421 348.751 357.739 348.91C358.056 349.069 358.439 349.232 358.887 349.4C359.456 349.615 359.946 349.848 360.357 350.1C360.767 350.352 361.085 350.655 361.309 351.01C361.542 351.355 361.659 351.785 361.659 352.298C361.659 352.849 361.523 353.339 361.253 353.768C360.982 354.197 360.609 354.538 360.133 354.79C359.657 355.033 359.106 355.154 358.481 355.154ZM365.627 355.112C365.132 355.112 364.703 355.014 364.339 354.818C363.975 354.613 363.695 354.314 363.499 353.922C363.312 353.53 363.219 353.045 363.219 352.466V348.098H364.395V352.046C364.395 352.503 364.451 352.886 364.563 353.194C364.684 353.493 364.862 353.717 365.095 353.866C365.328 354.006 365.618 354.076 365.963 354.076C366.346 354.076 366.668 353.987 366.929 353.81C367.2 353.623 367.405 353.343 367.545 352.97C367.685 352.597 367.755 352.116 367.755 351.528V348.098H368.931V355H367.755V353.53H368.049C367.853 354.043 367.54 354.435 367.111 354.706C366.682 354.977 366.187 355.112 365.627 355.112ZM370.959 355V348.098H372.149V349.568L371.869 349.666C372 349.311 372.177 349.013 372.401 348.77C372.625 348.518 372.896 348.327 373.213 348.196C373.531 348.056 373.881 347.986 374.263 347.986C375.019 347.986 375.612 348.21 376.041 348.658C376.471 349.097 376.685 349.75 376.685 350.618V355H375.495V351.052C375.495 350.352 375.365 349.839 375.103 349.512C374.851 349.176 374.464 349.008 373.941 349.008C373.559 349.008 373.232 349.097 372.961 349.274C372.7 349.451 372.499 349.731 372.359 350.114C372.219 350.487 372.149 350.968 372.149 351.556V355H370.959Z" fill="#8E98A8" />
                </svg>
            </div>
        </div>
    )
}

export default FootPrint