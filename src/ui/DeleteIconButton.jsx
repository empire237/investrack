function DeleteIconButton({ fill = false, color = 'red' }) {
  return (
    <span>
      <svg
        width="28"
        height="25"
        viewBox="0 0 15 15"
        className={`hover:cursor-pointer`}
      >
        <path
          d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z"
          fill={color}
          fillRule={fill ? '' : 'evenodd'}
          clipRule={fill ? '' : 'evenodd'}
        ></path>
      </svg>
    </span>
  );
}

export default DeleteIconButton;