import React from "react";

const ProcessBar = () => {
  return (
    <div className="process-bar">
      <div className="flex-box">
        <div className="top">
          <span className="not" />
          <a className="step-01" onclick="window.history.go(-3)">
            <p>1</p>
            <img
              className="check"
              src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/10/pink-check.svg"
            />
          </a>
          <span className="dash" />
          <a className="step-02" onclick="window.history.go(-2)">
            <p>2</p>
            <img
              className="check"
              src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/10/pink-check.svg"
            />
          </a>
          <span className="dash" />
          <a className="step-03" onclick="window.history.go(-1)">
            <p>3</p>
            <img
              className="check"
              src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/10/pink-check.svg"
            />
          </a>
          <span className="dash" />
          <a className="step-04" href="/checkout">
            <p>4</p>
            <img
              className="check"
              src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/10/pink-check.svg"
            />
          </a>
          <span className="not" />
        </div>
        <div className="bottom">
          <a className="step-01" onclick="window.history.go(-3)">
            <h3>אָז מָה חוֹגְגִים?</h3>
            <p>בוחרים את סוג האירוע וממשיכים בהזמנה</p>
          </a>
          <a className="step-02" onclick="window.history.go(-2)">
            <h3>עִצוב הַזְמָנָה</h3>
            <p>בוחרים את העיצוב שאהבתם וממשיכים בהזמנה</p>
          </a>
          <a className="step-03" onclick="window.history.go(-1)">
            <h3>הֲזָנַת פרָטִים</h3>
            <p>בחרו שיר והזינו את פרטי האירוע</p>
          </a>
          <a className="step-04" href="/checkout">
            <h3>תַּשְׁלוּם מְאֻבְטָח</h3>
            <p>PCI DSS תשלום מאובטח בתקן</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProcessBar;
