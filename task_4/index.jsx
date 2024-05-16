import { useState } from "react";

export const Block = ({ mouseEnterCallbak, children }) => {
  
  const [isActive, setActive] = useState(false);
  
  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };
  
  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {children}
    </div>
  )
}

export const Block1 = ({ imgSrc, imgAlt }) => {
  
  return (
    <Block>
      <img src={imgSrc} alt={imgAlt} />
    </Block>
  );
};

export const Block2 = ({ content }) => {

  return (
    <Block>
      <p>{content}</p>
    </Block>
  );
};

export const Block3 = ({ userData }) => {

  return (
    <Block>
      <address>
        country: {userData.country}, street: {userData.street}
      </address>
    </Block>
  );
};
