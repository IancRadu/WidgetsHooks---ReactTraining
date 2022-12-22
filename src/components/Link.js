import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // if statement use is to allow the browser to open the link in a new page when the user press ctrl and click on a link. This behavior is removed when event.preventDefault() is used.
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    // To stop the browser to do a hard reload on the page
    event.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};
export default Link;
