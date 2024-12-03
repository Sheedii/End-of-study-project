import React, { useState, useEffect } from 'react';
import './loading.css'; // Import the CSS file for styling
import { useNavigate} from 'react-router-dom';

const Loading = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showSecondSvg, setShowSecondSvg] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const firstTimer = setTimeout(() => {
            setShowSecondSvg(true);
        }, 1500);

        const fetchData = async () => {
            // Simulate a data fetch with a timeout
            setTimeout(() => {
                const fakeData = {
                    name: "John Doe",
                    age: 30,
                    occupation: "Software Developer",
                    location: "San Francisco, CA",
                };
                setData(fakeData);
                setLoading(false);
            }, 2000); // Simulate a 2-second delay
        };

        fetchData();

        // Clean up the timeout if the component is unmounted
        return () => clearTimeout(firstTimer);
    }, []);

    return (
        <div className="loading-container">
            
                <div className="loading">

                    {/* SVG code for the ellipse with animation */}
                    <svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_2417_558)">
                            <path d="M48.1452 37.0297L41.5753 58.2076C41.5452 58.3263 41.4849 58.4152 41.4247 58.5042L40.8822 60.6102C40.189 63.4873 38.7726 64.9407 36.6027 64.9407C34.4329 64.9407 32.9562 63.5466 32.1123 60.8178L25.4822 38.75C25.3315 38.3644 25.3315 37.9788 25.1808 37.6525C25.0603 37.0593 25 36.4364 25 35.8136C25 33.7373 25.7836 32.0763 27.9233 31.483C28.3151 31.3347 28.7671 31.2754 29.189 31.2754C31.1781 31.2754 32.5644 32.7585 33.3178 35.7542L36.5123 48.0636L40.8521 34.1525L40.9425 34.1822C41.1534 34.2712 41.3644 34.3305 41.5753 34.3305H41.6356L39.1041 42.5169L39.6466 44.2669L41.0932 39.5805C41.2137 39.6398 41.3342 39.6695 41.4548 39.6695H41.4849L39.8274 44.9788L40.4603 46.9661L43.1726 38.1864C43.3836 38.2754 43.5945 38.3347 43.8055 38.3347H43.8658L40.8521 48.1525L41.6055 50.4958L44.2274 42.0424C44.3178 42.1017 44.4384 42.1017 44.5288 42.1314H44.5589V42.161L41.7863 51.089L42.4192 53.0466L47.4521 36.8814C47.663 36.9703 47.874 37.0297 48.0849 37.0297H48.1452Z" fill="#08074E"/>
                            <path d="M60.9532 33.1144H61.0134C61.4052 33.1144 61.797 32.9661 62.0682 32.6992C62.3696 32.4025 62.5504 32.0169 62.5805 31.6017C62.6107 31.1864 62.46 30.8008 62.1586 30.4746C61.8874 30.178 61.4956 30 61.0737 29.9703C60.6518 29.9703 60.26 30.1186 59.9586 30.3856C59.7477 30.5636 59.597 30.8008 59.5367 31.0678C59.5066 31.1864 59.4764 31.3347 59.4764 31.483C59.4463 31.8983 59.597 32.3136 59.8984 32.6102C60.0189 32.7585 60.1696 32.8475 60.3504 32.9364C60.5312 33.0551 60.7422 33.1144 60.9532 33.1144ZM60.4107 32.1356C60.0792 31.7797 60.1093 31.2754 60.471 30.9492C60.6216 30.8008 60.8627 30.7119 61.0737 30.7119C61.2847 30.7119 61.4956 30.8008 61.6463 30.9788C61.797 31.1271 61.8874 31.3644 61.8573 31.572C61.8573 31.6314 61.8573 31.7203 61.8271 31.7797C61.797 31.928 61.7066 32.0466 61.586 32.1356C61.4353 32.2839 61.1942 32.3729 60.9833 32.3729C60.7723 32.4025 60.5614 32.2839 60.4107 32.1356Z" fill="#08074E"/>
                            <path d="M55.4685 48.3305L60.3206 32.6695C60.3809 32.4619 60.5918 32.3136 60.8028 32.3432C61.0138 32.4025 61.1644 32.6102 61.1343 32.8178C61.1343 32.8475 61.1343 32.8771 61.1042 32.8771L56.2521 48.5381C56.1918 48.7458 55.9809 48.8941 55.7699 48.8644C55.559 48.8051 55.4083 48.5975 55.4384 48.3898C55.4384 48.3898 55.4384 48.3602 55.4685 48.3305Z" fill="#08074E"/>
                            <path d="M63.2442 37.1186H63.3044C63.6962 37.1186 64.0579 36.9703 64.3592 36.7034C64.9921 36.1102 65.0524 35.1314 64.4496 34.5085C64.1784 34.2119 63.7866 34.0339 63.3647 34.0042C62.9428 34.0042 62.551 34.1525 62.2496 34.4195C62.0387 34.5975 61.888 34.8348 61.8277 35.1017C61.7976 35.2203 61.7675 35.3686 61.7675 35.517C61.7373 35.9322 61.888 36.3475 62.1894 36.6441C62.3099 36.7924 62.4606 36.8814 62.6414 36.9703C62.8223 37.0593 63.0332 37.089 63.2442 37.1186ZM62.7017 36.1102C62.3702 35.7542 62.4003 35.25 62.762 34.9237C62.9127 34.7754 63.1236 34.6864 63.3647 34.7161C63.5757 34.7161 63.7866 34.8051 63.9373 34.9831C64.088 35.1314 64.1784 35.3686 64.1784 35.5763C64.1784 35.6356 64.1483 35.7246 64.1483 35.7839C64.1181 35.9322 64.0277 36.0509 63.9072 36.1398C63.7565 36.2881 63.5154 36.3771 63.3044 36.3771C63.0633 36.3771 62.8524 36.2881 62.7017 36.1102Z" fill="#08074E"/>
                            <path d="M58.3317 50.7034L62.7015 36.6144C62.7317 36.4068 62.9426 36.2881 63.1235 36.3178C63.3344 36.3475 63.455 36.5551 63.4248 36.7331C63.4248 36.7627 63.4248 36.7924 63.3947 36.7924L59.0248 50.8814C58.9646 51.0593 58.7837 51.178 58.5728 51.1483C58.3618 51.1187 58.2714 50.911 58.3015 50.7034C58.3317 50.7331 58.3317 50.7331 58.3317 50.7034Z" fill="#08074E"/>
                            <path d="M63.9372 40.9153H63.9673C64.1481 40.9153 64.3289 40.8559 64.4796 40.7076C64.6303 40.5593 64.7207 40.3814 64.7207 40.1737C64.7207 39.9661 64.6604 39.7882 64.5098 39.6398C64.3892 39.4915 64.1782 39.4026 63.9974 39.4026C63.7865 39.4026 63.6056 39.4619 63.455 39.6102C63.3646 39.6992 63.2741 39.8178 63.244 39.9365C63.2139 39.9958 63.2139 40.0551 63.2139 40.1441C63.2139 40.3517 63.2741 40.5297 63.4248 40.678C63.4851 40.7373 63.5454 40.7966 63.6358 40.8263C63.7262 40.8856 63.8467 40.9153 63.9372 40.9153ZM63.6961 40.4407C63.5454 40.2627 63.5454 40.0254 63.7262 39.8771C63.8166 39.7882 63.907 39.7585 64.0276 39.7585C64.1481 39.7585 64.2385 39.8178 64.2988 39.8771C64.4495 40.0551 64.4495 40.2924 64.2687 40.4407C64.1783 40.5297 64.0878 40.5593 63.9673 40.5593C63.8467 40.5593 63.7563 40.5297 63.6961 40.4407Z" fill="#08074E"/>
                            <path d="M59.5372 53.9958L63.6358 40.856C63.6961 40.678 63.8167 40.5297 63.9071 40.5593C63.9975 40.589 64.0276 40.767 63.9674 40.9449L59.8687 54.0848C59.8084 54.2627 59.6879 54.411 59.5975 54.3814C59.5071 54.3517 59.4769 54.1737 59.5372 53.9958Z" fill="#08074E"/>
                            <path d="M60.6217 39.1652H60.6519C60.8327 39.1652 61.0135 39.1059 61.1642 38.9576C61.4656 38.661 61.4957 38.1864 61.1943 37.8898C61.0738 37.7415 60.8628 37.6525 60.682 37.6525C60.471 37.6525 60.2902 37.7118 60.1395 37.8602C60.0491 37.9491 59.9587 38.0678 59.9286 38.1864C59.8984 38.2457 59.8984 38.3051 59.8984 38.3941C59.8984 38.6017 59.9587 38.7796 60.1094 38.928C60.1697 38.9873 60.2299 39.0466 60.3204 39.0763C60.4108 39.1356 60.5012 39.1652 60.6217 39.1652ZM60.3505 38.6907C60.1998 38.5127 60.1998 38.2754 60.3806 38.1271C60.5313 37.9788 60.7724 37.9788 60.9532 38.1271C61.0436 38.2161 61.0738 38.3051 61.0738 38.4237C61.0738 38.4534 61.0738 38.483 61.0436 38.5127C61.0135 38.572 60.9834 38.6313 60.9231 38.6907C60.8327 38.75 60.7423 38.8093 60.6217 38.8093C60.5313 38.8093 60.4108 38.75 60.3505 38.6907Z" fill="#08074E"/>
                            <path d="M57.1864 49.161L60.3508 39.017C60.3809 38.8687 60.5014 38.7797 60.5918 38.8093C60.6823 38.839 60.7124 38.9873 60.6823 39.1356L57.5179 49.2797C57.4877 49.428 57.3672 49.517 57.2768 49.4873C57.1864 49.4576 57.1261 49.3093 57.1864 49.161Z" fill="#08074E"/>
                            <path d="M67.4629 35.8432H67.5232C67.915 35.8432 68.2766 35.6949 68.578 35.428C68.8794 35.1314 69.0602 34.7458 69.0903 34.3305C69.1205 33.9153 68.9698 33.5297 68.6684 33.2034C68.3972 32.9068 68.0054 32.7288 67.5835 32.6992C67.1616 32.6992 66.7698 32.8475 66.4684 33.1144C66.2574 33.2924 66.1068 33.5297 66.0465 33.7966C66.0163 33.9153 65.9862 34.0636 65.9862 34.2119C65.9561 34.6271 66.1068 35.0424 66.4081 35.339C66.5287 35.4873 66.6794 35.5763 66.8602 35.6653C67.041 35.7839 67.252 35.8432 67.4629 35.8432ZM66.9205 34.8348C66.5889 34.4788 66.6191 33.9746 66.9807 33.6483C67.3122 33.3517 67.8246 33.3517 68.1561 33.678C68.3068 33.8263 68.3972 34.0636 68.367 34.2712C68.367 34.3602 68.3369 34.4195 68.3369 34.4788C68.3068 34.6271 68.2163 34.7458 68.0958 34.8348C67.9451 34.9831 67.704 35.072 67.4931 35.072C67.2821 35.1017 67.0711 35.0127 66.9205 34.8348Z" fill="#08074E"/>
                            <path d="M60.2907 56.7839L66.8907 35.5763C66.9811 35.2797 67.2222 35.072 67.403 35.1314C67.5839 35.1907 67.6743 35.4873 67.5839 35.7839L60.9839 56.9915C60.8935 57.2881 60.6524 57.4958 60.4715 57.4364C60.2907 57.3771 60.1702 57.0805 60.2907 56.7839Z" fill="#08074E"/>
                            <path d="M56.7341 44.089C55.3478 48.5381 53.9314 53.0466 53.9314 53.0466C53.3286 54.9449 51.5505 56.1907 49.5314 56.161C48.3861 56.1313 47.3012 55.8051 46.367 55.1525L47.9341 59.75C49.1094 63.161 51.0985 64.8813 53.9916 64.8813C56.8848 64.8813 58.8738 63.161 60.0492 59.75L60.9231 57.1991L56.7341 44.089ZM50.4656 41.6864L48.567 35.5466C47.9341 33.6186 46.8492 31.2161 44.3779 31.2161C41.9067 31.2161 40.2793 33.2924 40.2793 35.6356V36.4958C40.3998 37.3856 40.6108 38.2754 40.9724 39.1356L45.3724 52.1864C45.945 53.9068 47.2711 54.7373 48.5971 54.7373C51.5204 54.7373 52.4848 51.7712 52.8766 49.3983C52.4848 48.3305 51.5505 44.8898 50.4656 41.6864Z" fill="#08074E"/>
                        </g>

                        <svg className="ellipse" width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M45.441 89.9717C39.7979 89.767 34.2503 88.4528 29.1151 86.1041C23.9799 83.7554 19.3576 80.4183 15.512 76.2832C11.6665 72.1482 8.67309 67.2962 6.7027 62.0043C4.73231 56.7123 3.82354 51.0841 4.02827 45.441C4.233 39.7979 5.54722 34.2503 7.8959 29.1151C10.2446 23.9799 13.5817 19.3576 17.7168 15.512C21.8518 11.6665 26.7038 8.67308 31.9958 6.7027C37.2877 4.73231 42.9159 3.82354 48.559 4.02827C54.2021 4.233 59.7497 5.54722 64.8849 7.8959C70.0201 10.2446 74.6424 13.5817 78.488 17.7168C82.3335 21.8518 85.3269 26.7038 87.2973 31.9958C89.2677 37.2877 90.1765 42.9159 89.9717 48.559C89.767 54.2021 88.4528 59.7497 86.1041 64.8849C83.7554 70.0201 80.4183 74.6425 76.2832 78.488C72.1482 82.3335 67.2962 85.3269 62.0042 87.2973C56.7123 89.2677 51.0841 90.1765 45.441 89.9717L45.441 89.9717Z" stroke="#08074E" strokeWidth="8" strokeLinecap="round"/>
                        </svg>
                            <defs>
                                <clipPath id="clip0_2417_558">
                                    <rect width="44" height="35" fill="white" transform="translate(25 30)"/>
                                </clipPath>
                            </defs>

                        </svg>
                </div>
       



        </div>
    );
};

export default Loading;
