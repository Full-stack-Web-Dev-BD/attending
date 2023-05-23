import React from "react";
import ProcessBar from "./Components/ProcessBar"
const Pay = () => {
  return (
    <>
      <ProcessBar/>
      <main id="primary" className="site-main">
        <article
          id="post-15"
          className="post-15 page type-page status-publish hentry"
        >
          <div className="entry-content">
            <div className="woocommerce">
              <div className="woocommerce-notices-wrapper" />
              <ul className="order_details">
                <li className="order">
                  מספר הזמנה: <strong>6482</strong>
                </li>
                <li className="date">
                  תאריך: <strong>23/05/2023</strong>
                </li>
                <li className="total">
                  סך הכל:{" "}
                  <strong>
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        ₪
                      </span>
                      308
                    </span>
                  </strong>
                </li>
                <li className="method">
                  אמצעי תשלום:{" "}
                  <strong>
                    תשלום בכרטיס אשראי (לעת עתה, אנו לא מקבלים כרטיס דיינרס)
                  </strong>
                </li>
              </ul>
              <div id="gobit-iframe-pay">
                <h3 className="gobit-iframe-pay-title" />
                <div id="gobit-iframe-div">
                  <iframe
                    name="gobitpaymentgateway-iframe"
                    style={{
                      width: "100%",
                      height: "625px",
                      paddingTop: "24px",
                    }}
                    id="gobitpaymentgateway-iframe"
                    src
                    scrolling="yes"
                  />
                </div>
              </div>
              {/* End gobit-iframe-pay */}
              <form
                action="https://direct.tranzila.com/attending/iframenew.php"
                target="gobitpaymentgateway-iframe"
                id="gobitpaymentgateway-form-to-tranzila"
                style={{ display: "none", visibility: "hidden" }}
                method="post"
              >
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="sum"
                  defaultValue={308}
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="supplier"
                  defaultValue="attending"
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="success_url_address"
                  defaultValue="https://attending.co.il/wc-api/WC_GATEWAY_GOBIT_R"
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="fail_url_address"
                  defaultValue="https://attending.co.il/wc-api/WC_GATEWAY_GOBIT_R"
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="notify_url_address"
                  defaultValue="https://attending.co.il/wc-api/WC_GATEWAY_GOBIT_N"
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="currency"
                  defaultValue={1}
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="lang"
                  defaultValue="il"
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="contact"
                  defaultValue="Alamin%20Alamin"
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="company"
                  defaultValue
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="email"
                  defaultValue="almin2%40gmail.com"
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="phone"
                  defaultValue={"01722906894"}
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="address"
                  defaultValue
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="address1"
                  defaultValue
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="city"
                  defaultValue
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="country"
                  defaultValue
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="zip"
                  defaultValue
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="Ilang"
                  defaultValue="HEB"
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="cred_type"
                  defaultValue={8}
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="maxpay"
                  defaultValue={3}
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="new_process"
                  defaultValue={1}
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="thtk"
                  defaultValue="tadcd9644cd9d1ef52d5b89ba848eaf82"
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="u71"
                  defaultValue={1}
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="json_purchase_data"
                  defaultValue="%5B%7B%22product_name%22%3A%22%D7%94%D7%96%D7%9E%D7%A0%D7%94%20%D7%9C%D7%97%D7%AA%D7%95%D7%A0%D7%94%22%2C%22product_quantity%22%3A1%2C%22product_price%22%3A263.25%7D%5D"
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="gobit_order_id"
                  defaultValue={6482}
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="gobit_user_id"
                  defaultValue={0}
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="gobit_nonce"
                  defaultValue="b6bc17cbf7"
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="gobit_verify"
                  defaultValue="iWhfJhiR"
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="gobit_success_id"
                  defaultValue={702}
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="gobit_failure_id"
                  defaultValue={14}
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="nologo"
                  defaultValue={1}
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="apple_pay"
                  defaultValue={1}
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="trBgColor"
                  defaultValue="f4fafc"
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="trTextColor"
                  defaultValue="0e0f24"
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="trButtonColor"
                  defaultValue="ee2767"
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="gobit_tran_mode"
                  defaultValue="A"
                />
                <input
                  style={{ display: "none", visibility: "hidden" }}
                  type="hidden"
                  name="tranmode"
                  defaultValue="A"
                />
              </form>
              <div className="clear" />
            </div>
          </div>
          {/* .entry-content */}
        </article>
        {/* #post-15 */}
      </main>
    </>
  );
};

export default Pay;
