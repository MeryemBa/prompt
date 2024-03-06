import PropTypes from "prop-types";

import "@styles/globals.css";

export const metaData = {
  title: "Prompt",
  description: "Prompt is a simple and easy to search fo ai prompts",
};
const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app">{children}</div>
      </body>
    </html>
  );
};

Layout.prototype = {
  children: PropTypes.node,
};
export default Layout;
