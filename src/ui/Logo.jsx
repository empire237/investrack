import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <NavLink to="/" className={'mr-auto block'}>
      <svg width="144" height="49" viewBox="0 0 144 49" fill="none">
        <path
          d="M5.53977 5.54545V23H1.32102V5.54545H5.53977ZM12.3558 15.5341V23H8.18821V9.90909H12.1513V12.3125H12.2962C12.5859 11.5114 13.0803 10.8835 13.7791 10.429C14.478 9.96875 15.3104 9.73864 16.2763 9.73864C17.1967 9.73864 17.995 9.94602 18.6712 10.3608C19.353 10.7699 19.8814 11.3437 20.2564 12.0824C20.6371 12.8153 20.8246 13.6733 20.8189 14.6562V23H16.6513V15.4744C16.657 14.7472 16.4723 14.179 16.0973 13.7699C15.728 13.3608 15.2138 13.1562 14.5547 13.1562C14.1172 13.1562 13.7308 13.2528 13.3956 13.446C13.0661 13.6335 12.8104 13.9034 12.6286 14.2557C12.4524 14.608 12.3615 15.0341 12.3558 15.5341ZM35.6293 9.90909L31.1378 23H26.3651L21.8821 9.90909H26.2713L28.6832 18.9261H28.8196L31.2401 9.90909H35.6293ZM42.9247 23.2472C41.5554 23.2472 40.3736 22.9773 39.3793 22.4375C38.3906 21.892 37.6293 21.1165 37.0952 20.1108C36.5668 19.0994 36.3026 17.8977 36.3026 16.5057C36.3026 15.1534 36.5696 13.9716 37.1037 12.9602C37.6378 11.9432 38.3906 11.1534 39.3622 10.5909C40.3338 10.0227 41.4787 9.73864 42.7969 9.73864C43.7287 9.73864 44.581 9.88352 45.3537 10.1733C46.1264 10.4631 46.794 10.892 47.3565 11.4602C47.919 12.0284 48.3565 12.7301 48.669 13.5653C48.9815 14.3949 49.1378 15.3466 49.1378 16.4205V17.4602H37.7599V15.0398H45.2599C45.2543 14.5966 45.1491 14.2017 44.9446 13.8551C44.7401 13.5085 44.4588 13.2386 44.1009 13.0455C43.7486 12.8466 43.3423 12.7472 42.8821 12.7472C42.4162 12.7472 41.9986 12.8523 41.6293 13.0625C41.2599 13.267 40.9673 13.5483 40.7514 13.9062C40.5355 14.2585 40.4219 14.6591 40.4105 15.108V17.571C40.4105 18.1051 40.5156 18.5739 40.7259 18.9773C40.9361 19.375 41.2344 19.6847 41.6207 19.9062C42.0071 20.1278 42.4673 20.2386 43.0014 20.2386C43.3707 20.2386 43.706 20.1875 44.0071 20.0852C44.3082 19.983 44.5668 19.8324 44.7827 19.6335C44.9986 19.4347 45.1605 19.1903 45.2685 18.9006L49.0952 19.0114C48.9361 19.8693 48.5866 20.6165 48.0469 21.2528C47.5128 21.8835 46.8111 22.375 45.9418 22.7273C45.0724 23.0739 44.0668 23.2472 42.9247 23.2472ZM62.6953 13.9062L58.8686 14.0085C58.8288 13.7358 58.7209 13.4943 58.5447 13.2841C58.3686 13.0682 58.1385 12.9006 57.8544 12.7812C57.576 12.6562 57.2521 12.5938 56.8828 12.5938C56.3999 12.5938 55.9879 12.6903 55.647 12.8835C55.3118 13.0767 55.147 13.3381 55.1527 13.6676C55.147 13.9233 55.2493 14.1449 55.4595 14.3324C55.6754 14.5199 56.0589 14.6705 56.6101 14.7841L59.1328 15.2614C60.4396 15.5114 61.4112 15.9261 62.0476 16.5057C62.6896 17.0852 63.0135 17.8523 63.0192 18.8068C63.0135 19.7045 62.7464 20.4858 62.218 21.1506C61.6953 21.8153 60.9794 22.3324 60.0703 22.7017C59.1612 23.0653 58.1214 23.2472 56.951 23.2472C55.0817 23.2472 53.6072 22.8636 52.5277 22.0966C51.4538 21.3239 50.8402 20.2898 50.6868 18.9943L54.8033 18.892C54.8942 19.3693 55.13 19.733 55.5107 19.983C55.8913 20.233 56.3771 20.358 56.968 20.358C57.5021 20.358 57.9368 20.2585 58.272 20.0597C58.6072 19.8608 58.7777 19.5966 58.7834 19.267C58.7777 18.9716 58.647 18.7358 58.3913 18.5597C58.1357 18.3778 57.7351 18.2358 57.1896 18.1335L54.9055 17.6989C53.593 17.4602 52.6158 17.0199 51.9737 16.3778C51.3317 15.7301 51.0135 14.9062 51.0192 13.9062C51.0135 13.0312 51.2464 12.2841 51.718 11.6648C52.1896 11.0398 52.8601 10.5625 53.7294 10.233C54.5987 9.90341 55.6243 9.73864 56.8061 9.73864C58.5788 9.73864 59.9766 10.1108 60.9993 10.8551C62.022 11.5937 62.5874 12.6108 62.6953 13.9062ZM62.7188 8.97159V5.54545H77.4716V8.97159H72.179V23H68.0199V8.97159H62.7188ZM78.1726 23V9.90909H82.2209V12.2955H82.3572C82.5959 11.4318 82.9851 10.7898 83.5249 10.3693C84.0646 9.94318 84.6925 9.73011 85.4084 9.73011C85.6016 9.73011 85.8004 9.74432 86.005 9.77273C86.2095 9.79545 86.3999 9.83239 86.576 9.88352V13.5057C86.3771 13.4375 86.1158 13.3835 85.7919 13.3438C85.4737 13.304 85.1896 13.2841 84.9396 13.2841C84.4453 13.2841 83.9993 13.3949 83.6016 13.6165C83.2095 13.8324 82.8999 14.1364 82.6726 14.5284C82.451 14.9148 82.3402 15.3693 82.3402 15.892V23H78.1726ZM91.4723 23.2216C90.6371 23.2216 89.8956 23.0824 89.2479 22.804C88.6058 22.5199 88.0973 22.0937 87.7223 21.5256C87.353 20.9517 87.1683 20.233 87.1683 19.3693C87.1683 18.642 87.2962 18.0284 87.5518 17.5284C87.8075 17.0284 88.1598 16.6222 88.6087 16.3097C89.0575 15.9972 89.5746 15.7614 90.1598 15.6023C90.745 15.4375 91.37 15.3267 92.0348 15.2699C92.7791 15.2017 93.3786 15.1307 93.8331 15.0568C94.2876 14.9773 94.6172 14.8665 94.8217 14.7244C95.032 14.5767 95.1371 14.3693 95.1371 14.1023V14.0597C95.1371 13.6222 94.9865 13.2841 94.6854 13.0455C94.3842 12.8068 93.978 12.6875 93.4666 12.6875C92.9155 12.6875 92.4723 12.8068 92.1371 13.0455C91.8018 13.2841 91.5888 13.6136 91.4979 14.0341L87.6541 13.8977C87.7678 13.1023 88.0604 12.392 88.532 11.767C89.0092 11.1364 89.6626 10.642 90.4922 10.2841C91.3274 9.92045 92.3303 9.73864 93.5007 9.73864C94.3359 9.73864 95.1058 9.83807 95.8104 10.0369C96.5149 10.2301 97.1286 10.5142 97.6513 10.8892C98.174 11.2585 98.5774 11.7131 98.8615 12.2528C99.1513 12.7926 99.2962 13.4091 99.2962 14.1023V23H95.3757V21.1761H95.2734C95.0405 21.6193 94.7422 21.9943 94.3786 22.3011C94.0206 22.608 93.5973 22.8381 93.1087 22.9915C92.6257 23.1449 92.0803 23.2216 91.4723 23.2216ZM92.7592 20.4943C93.2081 20.4943 93.6115 20.4034 93.9695 20.2216C94.3331 20.0398 94.6229 19.7898 94.8388 19.4716C95.0547 19.1477 95.1626 18.7727 95.1626 18.3466V17.1023C95.0433 17.1648 94.8984 17.2216 94.728 17.2727C94.5632 17.3239 94.3814 17.3722 94.1825 17.4176C93.9837 17.4631 93.7791 17.5028 93.5689 17.5369C93.3587 17.571 93.157 17.6023 92.9638 17.6307C92.5717 17.6932 92.2365 17.7898 91.9581 17.9205C91.6854 18.0511 91.4751 18.2216 91.3274 18.4318C91.1854 18.6364 91.1143 18.8807 91.1143 19.1648C91.1143 19.5966 91.2678 19.9261 91.5746 20.1534C91.8871 20.3807 92.282 20.4943 92.7592 20.4943Z"
          fill="url(#paint0_linear_2_42)"
          fillOpacity="0.59"
        />
        <path
          d="M116 46C113.605 46 111.241 45.2272 109.082 43.7387C106.922 42.2502 105.023 40.0839 103.524 37.3995C102.024 34.7152 100.963 31.5813 100.419 28.2289C99.8745 24.8766 99.8605 21.3913 100.378 18.0301C100.895 14.669 101.931 11.5177 103.409 8.80859C104.886 6.09952 106.768 3.90181 108.915 2.37753C111.063 0.853257 113.421 0.0412974 115.815 0.00153435C118.21 -0.0382287 120.58 0.695219 122.751 2.14779L122.073 4.2421C120.12 2.93542 117.988 2.27564 115.834 2.3114C113.68 2.34717 111.559 3.07758 109.627 4.44877C107.695 5.81995 106.003 7.79693 104.673 10.2339C103.344 12.6709 102.412 15.5057 101.947 18.5293C101.482 21.5529 101.494 24.6881 101.984 27.7038C102.474 30.7194 103.428 33.5386 104.777 35.9533C106.125 38.368 107.834 40.3168 109.777 41.6558C111.719 42.9948 113.846 43.69 116 43.69V46Z"
          fill="url(#paint1_linear_2_42)"
          fillOpacity="0.62"
        />
        <path
          d="M121 0L125.588 21.5424L144 5.8893L129.033 23.0923L142.449 38.7454L125.588 25.9555L121 42V0Z"
          fill="#FAAC14"
          fillOpacity="0.7"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_42"
            x1="0"
            y1="25"
            x2="111"
            y2="25"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FD9B08" />
            <stop offset="0.275" stopColor="#FFDD2D" />
            <stop offset="0.514" stopColor="#FFDA55" />
            <stop offset="0.78" stopColor="#F4B770" />
            <stop offset="1" stopColor="#EBEF14" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2_42"
            x1="116"
            y1="3.25543e-07"
            x2="101.287"
            y2="40.7068"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E1B20D" />
            <stop offset="0.465" stopColor="#B7910B" />
            <stop offset="1" stopColor="#B59E49" />
          </linearGradient>
        </defs>
      </svg>
    </NavLink>
  );
}

export default Logo;
