import { useState } from "react";


const ReadMore = ( {children} ) => {
  const [readMore, setReadMore] = useState(true);
  const text = children;
  // console.log(children.toString());
  console.log(text);
  // console.log(children);
  const togBtn = () => {
    setReadMore(!readMore);
  };

  return (
    <div>
      {readMore ? text : `${text.slice(0, 245)}`}
      <button onClick={togBtn}>
        {readMore ? "Read Less" : "...Read More"}
      </button>
    </div>
  );
};

export default ReadMore;
