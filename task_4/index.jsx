import { useState } from "react";

export const Block = (props) => {
  const [isActive, setActive] = useState(false);
  const {mouseEnterCallbak} = props
  
  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };
  
  const renderContent = (props) => {
    const {imgSrc, imgAlt, content, userData} = props
  
    if (imgSrc && imgAlt) {
      return (
        <img src={imgSrc} alt={imgAlt}/>
      );
    }
    if (content) {
      return (
        <p>{content}</p>
      );
    }
    if (userData) {
      return (
        <address>
          country: {userData.country}, street: {userData.street}
        </address>
      );
    }
    return null
  }
  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {renderContent()}
    </div>
  )
}
