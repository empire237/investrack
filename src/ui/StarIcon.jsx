import { useState } from 'react';

function StarIcon({
  onClick,
  size = [20, 20],
  hoverMsg = 'Not starred yet',
  starredMsg = 'Already starred',
  strokeWidth = 2,
}) {
  // First color represent fill, second color represent stroke
  const [star, setStar] = useState(['#FFF', '#DAD8D8']);
  const [tempStar, setTempStar] = useState(['', '']);
  const starred = star[1] === star[0];

  // #EEBD0D gold
  function handleClick() {
    if (star[0] === '#FFF') {
      setStar((star) => (star = ['#EEBD0D', '#EEBD0D']));
    } else {
      setStar((star) => {
        const newStar = ['#FFF', '#EEBD0D'];
        return newStar;
      });
    }
  }

  function handleMouse() {
    // Starred star return nothing
    if (star[0] === '#EEBD0D') {
      return;
    }

    //  Mousein in  if condition
    // Mouseout for in else condition
    if (star[1] === '#DAD8D8') {
      setTempStar((temp) => {
        const newTemp = ['#FFF', '#EEBD0D'];
        setStar(newTemp);
        return newTemp;
      });
    } else {
      setTempStar((temp) => {
        const newTemp = ['#FFF', '#DAD8D8'];
        setStar(newTemp);
        return newTemp;
      });
    }
  }

  return (
    <button onClick={onClick} className="group relative">
      <svg
        width={size[0]}
        height={size[1]}
        viewBox="0 0 25 23"
        onClick={handleClick}
        className={'z-50 hover:cursor-pointer'}
        onMouseEnter={handleMouse}
        onMouseLeave={handleMouse}
      >
        <path
          d="M12.5 2.42705L14.5931 8.86905L14.7615 9.38729H15.3064H22.0799L16.6001 13.3687L16.1592 13.689L16.3276 14.2072L18.4207 20.6492L12.9408 16.6678L12.5 16.3475L12.0592 16.6678L6.57927 20.6492L8.6724 14.2072L8.84079 13.689L8.39995 13.3687L2.92006 9.38729H9.69357H10.2385L10.4069 8.86905L12.5 2.42705Z"
          fill={`${star[0]}`}
          stroke={`${star[1]}`}
          strokeWidth={strokeWidth}
        />
      </svg>

      <p className="absolute left-[175%] top-[50%] hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-slate-400 px-1.5 py-1 text-xs before:absolute before:left-[-14px]  before:top-1 before:border-[8px] before:border-y-transparent before:border-l-transparent before:border-r-slate-400 before:content-[''] group-hover:block ">
        {starred ? starredMsg : hoverMsg}
      </p>
    </button>
  );
}

export default StarIcon;
