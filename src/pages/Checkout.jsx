import React from "react";
import ProcessBar from "./Components/ProcessBar";

const Checkout = () => {
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
              <div className="woocommerce-form-coupon-toggle">
                <div className="woocommerce-info">
                  יש לך קופון?{" "}
                  <a href="#" className="showcoupon">
                    לחצ.י כאן כדי להזין את קוד הקופון
                  </a>{" "}
                </div>
              </div>
              <form
                className="checkout_coupon woocommerce-form-coupon"
                method="post"
                style={{ display: "none" }}
              >
                <p>אם יש לך קוד קופון, יש לציין אותו למטה.</p>
                <p className="form-row form-row-first">
                  <label htmlFor="coupon_code" className="screen-reader-text">
                    קופון:
                  </label>
                  <input
                    type="text"
                    name="coupon_code"
                    className="input-text"
                    placeholder="קוד קופון"
                    id="coupon_code"
                    defaultValue
                  />
                </p>
                <p className="form-row form-row-last">
                  <button
                    type="submit"
                    className="button wp-element-button"
                    name="apply_coupon"
                    value="החלת קופון"
                  >
                    החלת קופון
                  </button>
                </p>
                <div className="clear" />
              </form>
              <div className="woocommerce-notices-wrapper" />
              <form
                name="checkout"
                method="post"
                className="checkout woocommerce-checkout"
                action="/checkout"
                encType="multipart/form-data"
              >
                <div className="col2-set" id="customer_details">
                  <div className="col-1">
                    <div className="woocommerce-billing-fields">
                      <h3>פרטי חיוב‫</h3>
                      <div className="woocommerce-billing-fields__field-wrapper">
                        <p
                          className="form-row form-row-first validate-required"
                          id="billing_first_name_field"
                          data-priority={10}
                        >
                          <label htmlFor="billing_first_name" className>
                            שם פרטי&nbsp;
                            <abbr className="required" title="נדרש">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type="text"
                              className="input-text "
                              name="billing_first_name"
                              id="billing_first_name"
                              placeholder
                              defaultValue
                              autoComplete="given-name"
                            />
                          </span>
                        </p>
                        <p
                          className="form-row form-row-last validate-required"
                          id="billing_last_name_field"
                          data-priority={20}
                        >
                          <label htmlFor="billing_last_name" className>
                            שם משפחה&nbsp;
                            <abbr className="required" title="נדרש">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type="text"
                              className="input-text "
                              name="billing_last_name"
                              id="billing_last_name"
                              placeholder
                              defaultValue
                              autoComplete="family-name"
                            />
                          </span>
                        </p>
                        <p
                          className="form-row form-row-wide validate-required validate-phone"
                          id="billing_phone_field"
                          data-priority={100}
                        >
                          <label htmlFor="billing_phone" className>
                            טלפון&nbsp;
                            <abbr className="required" title="נדרש">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type="tel"
                              className="input-text "
                              name="billing_phone"
                              id="billing_phone"
                              placeholder
                              defaultValue
                              autoComplete="tel"
                            />
                          </span>
                        </p>
                        <p
                          className="form-row form-row-wide validate-required validate-email"
                          id="billing_email_field"
                          data-priority={110}
                        >
                          <label htmlFor="billing_email" className>
                            כתובת אימייל&nbsp;
                            <abbr className="required" title="נדרש">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type="email"
                              className="input-text "
                              name="billing_email"
                              id="billing_email"
                              placeholder
                              defaultValue
                              autoComplete="email"
                            />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="woocommerce-shipping-fields"></div>
                    <div className="woocommerce-additional-fields"></div>
                  </div>
                </div>
                <div
                  id="order_review"
                  className="woocommerce-checkout-review-order"
                >
                  <div className="shop_table woocommerce-checkout-review-order-table"></div>
                  <div id="payment" className="woocommerce-checkout-payment">
                    <h3>פרטי תשלום</h3>
                    <ul className="wc_payment_methods payment_methods methods">
                      <li className="wc_payment_method payment_method_gobitpaymentgateway">
                        <input
                          id="payment_method_gobitpaymentgateway"
                          type="radio"
                          className="input-radio"
                          name="payment_method"
                          defaultValue="gobitpaymentgateway"
                          defaultChecked="checked"
                          data-order_button_text
                        />
                        <label htmlFor="payment_method_gobitpaymentgateway">
                          תשלום בכרטיס אשראי (לעת עתה, אנו לא מקבלים כרטיס
                          דיינרס){" "}
                        </label>
                        <div className="payment_box payment_method_gobitpaymentgateway">
                          <p className="gb-payment-method-description">
                            תשלום מאובטח בכרטיס אשראי
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="form-row place-order">
                      <noscript>
                        הדפדפן אינו תומך ב JavaScript, או שהוא מכובה, נא לוודא
                        שאתה לוחץ על &lt;em&gt;עדכן סכום&lt;/em&gt; לפני ביצוע
                        ההזמנה. אתה עשוי להיות מחויב יותר מהסכום האמור לעיל, אם
                        לא תצליח לעשות זאת. &lt;br /&gt;&lt;button type="submit"
                        class="button alt"
                        name="woocommerce_checkout_update_totals" value="עדכן
                        סכום"&gt;עדכן סכום&lt;/button&gt;
                      </noscript>
                      <div className="woocommerce-terms-and-conditions-wrapper">
                        <div className="woocommerce-privacy-policy-text" />
                        <div
                          className="woocommerce-terms-and-conditions"
                          style={{
                            display: "none",
                            maxHeight: "200px",
                            overflow: "auto",
                          }}
                        >
                          <h1>תקנון שימוש ומדיניות פרטיות</h1>
                          <p>עדכון אחרון: 23/08/2022</p>
                          <p>{/*[if gte mso 9]&gt;*/}</p>
                          <p>{/*[if gte mso 9]&gt;*/}</p>
                          <p>
                            {" "}
                            Normal
                            <br />0
                          </p>
                          <p>
                            {" "}
                            false
                            <br />
                            false
                            <br />
                            false
                          </p>
                          <p>
                            {" "}
                            EN-US
                            <br />
                            X-NONE
                            <br />
                            HE
                          </p>
                          <p>{/*[if gte mso 9]&gt;*/}</p>
                          <p>{/*[if gte mso 10]&gt;*/}</p>
                          <p>
                            {" "}
                            /* Style Definitions */
                            <br />
                            table.MsoNormalTable
                            <br />
                            {"{"}mso-style-name:”טבלה רגילה”;
                            <br />
                            mso-tstyle-rowband-size:0;
                            <br />
                            mso-tstyle-colband-size:0;
                            <br />
                            mso-style-noshow:yes;
                            <br />
                            mso-style-priority:99;
                            <br />
                            mso-style-parent:””;
                            <br />
                            mso-padding-alt:0in 5.4pt 0in 5.4pt;
                            <br />
                            mso-para-margin-top:0in;
                            <br />
                            mso-para-margin-right:0in;
                            <br />
                            mso-para-margin-bottom:8.0pt;
                            <br />
                            mso-para-margin-left:0in;
                            <br />
                            line-height:107%;
                            <br />
                            mso-pagination:widow-orphan;
                            <br />
                            font-size:11.0pt;
                            <br />
                            font-family:”Calibri”,sans-serif;
                            <br />
                            mso-ascii-font-family:Calibri;
                            <br />
                            mso-ascii-theme-font:minor-latin;
                            <br />
                            mso-hansi-font-family:Calibri;
                            <br />
                            mso-hansi-theme-font:minor-latin;
                            <br />
                            mso-bidi-font-family:Arial;
                            <br />
                            mso-bidi-theme-font:minor-bidi;{"}"}
                            <br />
                            table.MsoTableGrid
                            <br />
                            {"{"}mso-style-name:”רשת טבלה”;
                            <br />
                            mso-tstyle-rowband-size:0;
                            <br />
                            mso-tstyle-colband-size:0;
                            <br />
                            mso-style-priority:39;
                            <br />
                            mso-style-unhide:no;
                            <br />
                            border:solid windowtext 1.0pt;
                            <br />
                            mso-border-alt:solid windowtext .5pt;
                            <br />
                            mso-padding-alt:0in 5.4pt 0in 5.4pt;
                            <br />
                            mso-border-insideh:.5pt solid windowtext;
                            <br />
                            mso-border-insidev:.5pt solid windowtext;
                            <br />
                            mso-para-margin:0in;
                            <br />
                            mso-pagination:widow-orphan;
                            <br />
                            font-size:11.0pt;
                            <br />
                            font-family:”Calibri”,sans-serif;
                            <br />
                            mso-ascii-font-family:Calibri;
                            <br />
                            mso-ascii-theme-font:minor-latin;
                            <br />
                            mso-hansi-font-family:Calibri;
                            <br />
                            mso-hansi-theme-font:minor-latin;
                            <br />
                            mso-bidi-font-family:Arial;
                            <br />
                            mso-bidi-theme-font:minor-bidi;{"}"}
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "center", lineHeight: "150%" }}
                            align="center"
                          >
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "center", lineHeight: "150%" }}
                            align="center"
                          >
                            <b>
                              <u>תנאי שימוש</u>
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            <b>
                              <u>מבוא</u>
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "115%" }}
                          >
                            <b>
                              תנאי שימוש אלה מהווים הסכם משפטי
                              <br />
                              מחייב. אנא קרא/י תנאי שימוש אלה בעיון ובקפידה.
                              את/ה לא חייב/ת להסכים לאמור בהם,
                              <br />
                              וככל שאינך מסכים/ה, את/ה נדרש/ת לעזוב את האתר
                              לאלתר ולא לעשות בו כל שימוש.{" "}
                              <u>
                                שימוש באתר וצפייה בתכניו מעיד כי קראת, הבנת
                                ואישרת
                                <br />
                                את האמור בתנאי שימוש אלה
                              </u>
                              .&nbsp;{" "}
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "115%" }}
                          >
                            <b>
                              האמור להלן מנוסח בלשון נקבה יחידה
                              <br />
                              מטעמי נוחות בלבד, אולם הוא מתייחס לשני המינים,
                              לתאגידים ולגופים משפטיים אחרים
                              <br />
                              באופן דומה.
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "115%" }}
                          >
                            ברוכה הבאה לאתר
                            <a href="/">
                              /
                            </a>
                            (להלן: “<b>האתר</b>“). האתר מופעל על-ידי שותפות
                            <br />
                            רשומה “<b>אטנדינג</b>” (מס’ 540313335). בכל פעם
                            שנעשה שימוש בגוף
                            <br />
                            ראשון רבים כמו: “<b>אנחנו</b>” או “<b>שלנו</b>“,
                            הכוונה היא
                            <br />
                            ל- “<b>אטנדינג</b>“.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "115%" }}
                          >
                            אטנדינג שומרת על זכותה לשנות תנאי שימוש
                            <br />
                            אלה בכל עת, כאשר כל שינוי כזה ייכנס לתוקף מיד עם
                            הצגתו באתר. השימוש באתר יהיה
                            <br />
                            כפוף לתנאי השימוש שהיו בתוקף בתאריך ובשעה שבהם בוצע
                            השימוש או בוצעה העסקה בפועל,
                            <br />
                            לפי המאוחר.
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "115%" }}
                          >
                            ההוראות שלהלן מתווספות להוראות תנאי
                            <br />
                            שימוש אחרות וספציפיות המצויות באתר ובמקרה של סתירה
                            או אי-התאמה, ההוראה הספציפית
                            <br />
                            תגבור על ההוראה כללית. כמו-כן, יש להתייחס לתנאי
                            השימוש כמתקיימים זה לצד זה ולא כמצמצמים
                            <br />
                            זה את תחולת זה. בכל מקרה של סתירה בין האמור בתנאי
                            השימוש לבין מצג ו/או כל פרסום
                            <br />
                            אחר יגברו ההוראות שבתנאי השימוש.
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "115%" }}
                          >
                            כותרות הפרקים מובאות לשם הנוחות
                            <br />
                            והתמצאות, ולא ישמשו לפרשנות תנאי השימוש.
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "115%" }}
                          >
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            <b>
                              <u>כשירות – זכאות להשתמש באתר ולרכוש מאטנדינג</u>
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; אתר
                            <br />
                            זה נועד לשימושך האישי והפרטי ולצורך המטרות המנויות
                            בו או בתנאי שימוש אלה. כל
                            <br />
                            שימוש אחר, לרבות שימוש מסחרי באתר ו/או בתכניו ללא
                            קבלת הסכמה מראש ובכתב
                            <br />
                            מאטנדינג הינו אסור.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; אין
                            <br />
                            לבצע כל שימוש באתר או בשירותים המוצעים בו שאינו
                            כדין, לרבות שימוש העולה כדי
                            <br />
                            לשון הרע, פגיעה בפרטיות, פגיעה בזכות יוצרים, שימוש
                            שעולה כדי עוולה מסחרית וכל
                            <br />
                            שימוש בלתי חוקי אחר. אטנדינג לא מפקחת, ולא יכולה
                            לפקח, על השימוש באתר או
                            <br />
                            בשירותים המוצעים בו ומשכך מוסכם כי אטנדינג לא תהיה
                            אחראית על כל שימוש שנעשה
                            <br />
                            על-ידי מי מהמשתמשים באתר.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; רשאית
                            <br />
                            להשתמש, להירשם ולרכוש באתר אך ורק מי אשר עומדת
                            בתנאים <u>המצטברים שלהלן</u>:
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: "56.7pt",
                              textAlign: "justify",
                              textIndent: "-38.7pt",
                              lineHeight: "150%",
                            }}
                          >
                            3.1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            בת למעלה מ- 18 שנים וכשירה
                            <br />
                            לבצע פעולות משפטיות מחייבות;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: "56.7pt",
                              textAlign: "justify",
                              textIndent: "-38.7pt",
                              lineHeight: "150%",
                            }}
                          >
                            3.2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            בעלת כרטיס אשראי ישראלי תקף;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: "56.7pt",
                              textAlign: "justify",
                              textIndent: "-38.7pt",
                              lineHeight: "150%",
                            }}
                          >
                            3.3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            בעלת כתובת דואר אלקטרוני
                            <br />
                            פעילה;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: "56.7pt",
                              textAlign: "justify",
                              textIndent: "-38.7pt",
                              lineHeight: "150%",
                            }}
                          >
                            3.4.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            בעלת אמצעי תקשורת טלפוני
                            <br />
                            (נייח/ נייד).
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            4.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; את
                            <br />
                            מצהירה כי את עומדת בכל התנאים שבסעיף 3 לעיל, ותעשי
                            שימוש באמצעי תשלום הרשום על
                            <br />
                            שמך בלבד או באמצעי תשלום אחר שיש לך היתר בכתב מאת
                            הבעלים הרשום של אמצעי התשלום
                            <br />
                            לעשות בו שימוש.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            5.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; בעת
                            <br />
                            השימוש באתר או לצורך קבלת השירותים המסופקים על ידי
                            אטנדינג, ייתכן שנספק לך שם
                            <br />
                            משתמש וסיסמה. שימי לב, כי אין להעביר פרטים אלה לכל
                            צד שלישי, ואנחנו לא נהיה
                            <br />
                            אחראים לכל נזק או הפסד, מכל מין וסוג, שייגרם כתוצאה
                            מקבלת הפרטים שלא מאתנו. את
                            <br />
                            תהיי האחראית הבלעדית על כל מעשה או מחדל שנעשה משם
                            המשתמש שסיפקנו לך. &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            6.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; אטנדינג
                            <br />
                            תהיה רשאית להפסיק ו/או לשנות את שירותי האתר או חלק
                            מהם בכל עת, לרבות את התכנים,
                            <br />
                            המידע והרשאות הגישה הנדרשות, וזאת מבלי הודעה מוקדמת
                            ומבלי שתישא באחריות לנזקים
                            <br />
                            שייגרמו כתוצאה מכך. יובהר, כי במקרה זה את לא תהיי
                            זכאית לפיצוי או החזר כספי
                            <br />
                            כלשהו, באשר כל שימוש באתר, לרבות בשירותים המוצעים
                            בו, מהווה רישיון הניתן לביטול
                            <br />
                            בכל עת ומשכך את לא רשאית לשנות מצבך לרעה בהסתמך על
                            הרישיון.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            7.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            ככל שתפרי תנאי שימוש אלה
                            <br />
                            ו/או ככל שתעשי מעשה או מחדל שהוא בניגוד לתנאים שימוש
                            אלה, את מתחייבת לשפות את
                            <br />
                            אטנדינג בגין כל נזק, הפסד, אבדן-רווח, תשלום או
                            הוצאות מכל מין וסוג שייגרמו לנו
                            <br />
                            בעקבות כך, וזאת באופן מידי עם דרישה ראשונה.
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            <b>
                              <u>&nbsp;</u>
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            <b>
                              <u>אחריות</u>
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            8.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                            <b>
                              אחריות אטנדינג תהיה מוגבלת בכל מקרה ולכל הפסד או
                              נזק, ישירים או
                              <br />
                              עקיפים ומכל מין וסוג שייגרם לך או למי מטעמך,{" "}
                              <u>
                                עד לגובה סכום המוצר או השירות הנרכש
                                <br />
                                בפועל
                              </u>
                              . מעת שהחלטת להשתמש בשירותים או במוצרים של אטנדינג
                              את מביעה הסכמתך
                              <br />
                              לכך.
                            </b>
                            <b />
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            9.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                            <b>
                              אנחנו
                              <br />
                              לא נהייה אחראים לכל נזק ו/או הפסד כלשהו שייגרם לך
                              ו/או לצד שלישי אחר כתוצאה
                              <br />
                              משימוש ו/או רכישה המתבצעת באתר, לרבות, אך מבלי
                              לגרוע מכלליות האמור, במקרה של
                              <br />
                              רכישה המתבצעת באמצעות כרטיס אשראי ללא הסכמת בעליו,
                              כמו גם במקרה של פעולה שבוצעה
                              <br />
                              על ידי צד שלישי כלשהו שיכנס לאתר ויגרום נזק.{" "}
                            </b>
                            <b />
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            10.&nbsp;&nbsp;&nbsp;{" "}
                            <b>
                              אטנדינג
                              <br />
                              לא תישא בכל אחריות לנזק שייגרם במישרין או בעקיפין
                              עקב איחור במועד האספקה ו/או
                              <br />
                              אי-אספקה כלל או אספקת פריטים פגומים או לא תקינים,
                              למעט אם הפגם או היעדר התקינות
                              <br />
                              מקורם באטנדינג בלבד.{" "}
                            </b>
                            <b>
                              <u />
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            11.&nbsp;&nbsp;&nbsp;{" "}
                            <b>
                              השירותים
                              <br />
                              שלנו תלויים בנותני שירות אחרים שהינם צדדים שלישיים
                              (כדוגמת רשתות סלולריות,
                              <br />
                              אינטרנט, יישומון{" "}
                            </b>
                            <b>whatsapp</b>
                            <b>
                              , תוכנות שונות וכד’), ולכן במקרה שהשירות שלנו נמנע
                              בעקבות תקלה,
                              <br />
                              פגם, קלקול, היעדר תקינות ו/או כל סיבה אחרת שמקורה
                              באחד או יותר מאותם צדדים
                              <br />
                              שלישיים, אנחנו לא נהייה אחראים על כל נזק ו/או הפסד
                              שייגרם לך, במישרין או
                              <br />
                              עקיפין, כתוצאה מכך.<u> </u>
                            </b>
                            <b>
                              <u />
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            12.&nbsp;&nbsp;&nbsp;{" "}
                            <b>
                              ככל
                              <br />
                              שהשירות או שהמוצר שלנו ניתן על-ידי צד שלישי או
                              בשיתוף עם צד שלישי, אנחנו לא נהיה
                              <br />
                              אחראים לטיב המוצר או השירות או לכל פעולה או מחדל
                              של הצד השלישי. כל הטענות בקשר
                              <br />
                              עם אותו שירות או מוצר יידונו בינך לבין הצד השלישי
                              בלבד.
                            </b>
                            <b>
                              <u />
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            13.&nbsp;&nbsp;&nbsp;{" "}
                            <b>
                              את
                              <br />
                              תישאי באחריות מלאה לנזק מכל מין וסוג שהוא שיגרם לך
                              ו/או לאתר ו/או לאטנדינג ו/או
                              <br />
                              לצד שלישי כלשהו בגין טעות שביצעת בהקלדת הנתונים או
                              המידע הנדרש או כתוצאה מהם.
                            </b>
                            <b>
                              <u />
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            14.&nbsp;&nbsp;&nbsp;{" "}
                            <b>
                              האתר
                              <br />
                              מוצע לך “כמו שהוא” (
                            </b>
                            <b>As Is</b>
                            <b>
                              ) ואת פוטרת את אטנדינג מכל אחריות במקרה שבו ביצוע
                              עסקה ו/או
                              <br />
                              גלישה באתר לא יבוצעו, בחלקן או במלואן, מכל סיבה
                              שהיא וכן את פוטרת את אותנו מכל
                              <br />
                              אחריות לבעיה טכנית ו/או אחרת הפוגמת ביכולת השימוש
                              באתר ו/או בשירותים המסופקים
                              <br />
                              על-ידנו.
                            </b>
                            <b>
                              <u />
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            15.&nbsp;&nbsp;&nbsp;{" "}
                            <b>
                              התוכן,
                              <br />
                              לרבות התמונות והסרטונים, המופיע באתר הוא להמחשה
                              בלבד ואנחנו לא נהייה אחראים לפער
                              <br />
                              סביר בין הצגת הפריטים באתר לבין הפריט בפועל. יוער,
                              כי ייתכנו הבדלי גוון סבירים
                              <br />
                              בין המוצג בצג אחד לצג אחר ו/או לבין הגוון של הפריט
                              בפועל.
                            </b>
                            <b>
                              <u />
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            16.&nbsp;&nbsp;&nbsp;{" "}
                            <b>
                              אטנדינג
                              <br />
                              לא תהיה אחראית לאי-דיוקים או לטעויות אשר נפלו ביחס
                              לתוכן המוצג באתר. מובהר, כי
                              <br />
                              התוכן הכלול באתר לא מהווה המלצה ו/או חוות דעת ביחס
                              לשירותים או המוצרים המופיעים
                              <br />
                              בו, ועל כן כל הסתמכות על הצהרות, הבעות עמדה, עצות
                              או כל תוכן אחר המוצג באתר,
                              <br />
                              נעשה לפי שיקול דעתך ובאחריותך הבלעדית. שימי לב, כי
                              עלייך לבצע בעצמך את כל
                              <br />
                              הערכות והבדיקות לגבי המוצר או השירות, ואת מוותרת
                              על כל טענה ו/או דרישה ו/או
                              <br />
                              תביעה לגבי הסתמכות על מי מאלה.{" "}
                            </b>
                            <b />
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            17.&nbsp;&nbsp;&nbsp;
                            <br />
                            <b>
                              באתר מופיע מידע פרסומי וכן
                              <br />
                              קישורים לאתרים נוספים. אטנדינג לא תהיה אחראית
                              לתוכן ו/או למידע שמקורם באותם
                              <br />
                              אתרים או באתרים אחרים או של צדדים שלישיים כלשהם.
                            </b>
                            <b>
                              <u />
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            <b>
                              <u>&nbsp;</u>
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            <b>
                              <u>קניין רוחני</u>
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            18.&nbsp;&nbsp;&nbsp; אטנדינג
                            <br />
                            השקיעה ומשקיעה משאבים רבים בזכויות היוצרים והקניין
                            הרוחני המופיעים באתר
                            <br />
                            ובשירותים המוצעים בו והם בבעלותה הבלעדית ו/או של צד
                            שלישי שהעניק לנו הרשאה
                            <br />
                            להשתמש בהם. בכלל זה, אטנדינג היא הבעלים בשמות
                            ובסימנים המסחריים של האתר,
                            <br />
                            בפטנטים ובמדגמים של האתר (בין אם רשומים ובין אם
                            לאו), בסודות מסחריים הכרוכים
                            <br />
                            בהפעלת האתר ובהענקת השירותים, בעיצוב האתר, במידע
                            הטכנולוגי הכרוך בהפעלתו,
                            <br />
                            בתוכנות, יישומים, קבצים גרפים, טקסטים, האודיו, וידאו
                            ו/או כל חומר אחר הכלול בו.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            19.&nbsp;&nbsp;&nbsp; אין
                            <br />
                            להעתיק, לשכפל, להפיץ, להציג בפומבי, לשנות, לפרסם,
                            לשדר, למכור, לעשות שימוש
                            <br />
                            מסחרי מכל מין וסוג, להעביר לרשות הציבור או למסור לצד
                            שלישי את התכנים הנ”ל
                            <br />
                            ו/או כל חלק מהם, אלא בהיתר מראש ובכתב מאת אטנדינג.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            20.&nbsp;&nbsp;&nbsp; את
                            <br />
                            מתחייבת שלא לפגוע בשום דרך שהיא בקניין הרוחני
                            ובזכויות היוצרים של אטנדינג.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            21.&nbsp;&nbsp;&nbsp; כל
                            <br />
                            שימוש הפוגע בקניין הרוחני ו/או בזכויות היוצרים כאמור
                            לעיל, יהווה עילה לתביעה
                            <br />
                            על-פי חוק, ואת תישאי במלוא ההוצאות אשר יגרמו
                            לאטנדינג ו/או ללקוחותיה ו/או לצדדיים
                            <br />
                            שלישיים ו/או לך בעצמך בגין שימוש זה, וזאת מבלי לגרוע
                            מכל סעד אחר העומד לאטנדינג
                            <br />
                            מכוח הסכם ו/או הוראות הדין.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              lineHeight: "150%",
                            }}
                          >
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            <b>
                              <u>מדיניות ביטול </u>
                            </b>
                            <b>
                              <u />
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            22.&nbsp;&nbsp;&nbsp; מעת
                            <br />
                            שרכשת מוצר ו/או אחד או יותר מבין השירותים שלנו, את
                            זכאית להחזיר את המוצר ו/או לבטל
                            <br />
                            את השירות בהתאם להוראות חוק הגנת הצרכן, התשמ”א-1981
                            (להלן: “
                            <b>
                              חוק
                              <br />
                              הגנת הצרכן
                            </b>
                            “), בתוך 14 ימים ממועד עשיית העסקה. אולם במקרה של
                            מוגבלות,
                            <br />
                            אזרחית ותיקה או עולה חדשה (כהגדרתם בחוק הגנת הצרכן),
                            ניתן לבטל את השירות בתוך 4<br />
                            חודשים ממועד עשיית העסקה.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            23.&nbsp;&nbsp;&nbsp; בכל
                            <br />
                            אופן, לא ניתן יהיה לבטל את השירות לאחר מועד תחילת
                            הענקת השירות.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              lineHeight: "150%",
                            }}
                          >
                            “
                            <b>
                              <u>
                                מועד
                                <br />
                                תחילת הענקת השירות
                              </u>
                            </b>
                            ” הוא כל אחד מאלה:
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            4.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            5.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            6.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            7.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            8.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            9.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            10.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            11.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            12.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            13.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            14.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            15.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            16.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            17.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            18.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            19.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            20.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            21.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            22.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            23.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: "56.7pt",
                              textAlign: "justify",
                              textIndent: "-38.7pt",
                              lineHeight: "150%",
                            }}
                          >
                            23.1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            <b>
                              בשירותי ההזמנות הדיגיטליות
                              <br />
                              ובמערכת לניהול מוזמנים
                            </b>
                            – היום שבו קיבלת את ההזמנה הדיגיטלית לאירוע שלך
                            בהתאם
                            <br />
                            לפרטים שהזנת או היום שבו התחלת להעלות נתונים למערכת
                            ניהול מוזמנים של אטנדינג,
                            <br />
                            המוקדם מבין השניים.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: "56.7pt",
                              textAlign: "justify",
                              textIndent: "-38.7pt",
                              lineHeight: "150%",
                            }}
                          >
                            23.2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            <b>בחבילות אישורי הגעה לאירוע</b>– היום שבו התחלנו
                            <br />
                            ליצור קשר עם חלק מהמוזמנים שלך, בכל דרך שהיא, לצורך
                            אישור הגעתם לאירוע שלך.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            24.&nbsp;&nbsp;&nbsp; ביטול
                            <br />
                            כאמור ייעשה באמצעות שליחת הודעת ביטול באחד מאמצעי
                            יצירת הקשר שלנו, כאמור בסעיף 34.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            25.&nbsp;&nbsp;&nbsp; הודעת
                            <br />
                            הביטול תכלול את הפרטים הבאים של מבצע ההזמנה: שם מלא,
                            כתובת דואר אלקטרוני, מספר
                            <br />
                            טלפון ומספר ההזמנה כפי שנמסרה באישור ההזמנה. ככל
                            ששלחת הודעת ביטול, ניצור אתך
                            <br />
                            קשר טלפוני, נאמת אתך את ביטול ההזמנה ונשיב לך את
                            התמורה ששילמת בהתאם להוראות
                            <br />
                            החוק ותנאי שימוש אלה.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            26.&nbsp;&nbsp;&nbsp; בכל
                            <br />
                            מקרה של מתן הודעת ביטול כאמור, תחויבי בדמי ביטול
                            בשיעור שלא יעלה על 5% מעלות
                            <br />
                            העסקה או 100 שקלים, לפי הנמוך מבניהם, והכל בכפוף
                            להוראות חוק הגנת הצרכן.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            27.&nbsp;&nbsp;&nbsp;
                            <br />
                            לשם הגילוי הנאות, יובהר כי רוב
                            <br />
                            המוצרים ו/או השירותים שלנו הם בהזמנה אישית ומיוצרים
                            במיוחד עבורך בעקבות העסקה.
                            <br />
                            כמו כן, רוב המוצרים ו/או השירותים שלנו ניתנים
                            להקלטה, לשעתוק או לשכפול. לפיכך,
                            <br />
                            ככל שבכוונתך לבטל את המוצר או השירות, אנא פני אלינו
                            בהקדם ככל שניתן, לפני
                            <br />
                            שנתחיל בהכנת המוצר או באספקת השירות, שכן לאחר מכן לא
                            תוכלי לבצע את הביטול.
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            <b>
                              <u>
                                <br />
                                מבצעים והטבות
                              </u>
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            ככל שנצא במבצע כלשהו או שניתן הטבה
                            <br />
                            כלשהי בכל דרך שהיא, יחולו התנאים הבאים, אלא אם צוין
                            במפורש אחרת בתנאי המבצע או
                            <br />
                            ההטבה:
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            28.&nbsp;&nbsp;&nbsp; זכאית
                            <br />
                            להשתתף במבצע או בהטבה רק מי שרכשה את השירות במסגרת
                            המבצע או ההטבה ועמדה במלוא
                            <br />
                            תנאי התשלום ובמועדם. אי-עמידה באילו מתנאי התשלום או
                            במועדם תגרור ביטול בדיעבד
                            <br />
                            של כל מבצע או הטבה, וייגבה תשלום מלא בגינם.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            29.&nbsp;&nbsp;&nbsp; הזכאות
                            <br />
                            להטבה או מבצע הינה אישית, לא ניתנת להעברה או המחאה,
                            וכפופה לעמידה בכל התנאים
                            <br />
                            הקבועים בתנאי השימוש ובתקנון הפרטני של המבצע או
                            ההטבה ככל שקיים.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            30.&nbsp;&nbsp;&nbsp; כל
                            <br />
                            תקיפה של איזה מתנאי שימוש אלה, לרבות פעולה בלתי
                            חוקית או מוסרית, מסירת מידע
                            <br />
                            מטעה, כוזב או בחוסר תום לב, או כל פעולה או הימנעות
                            ממנה העשויה לגרום נזק, מכל
                            <br />
                            מין וסוג, לאטנדינג או מי מטעמה, תבטל כל זכאות לכל
                            הטבה שקיבלת או שניתנה לך, ואת
                            <br />
                            מתחייבת להשיב לאטנדינג את השווי של כל הטבה שקיבלת,
                            גם בדיעבד.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            31.&nbsp;&nbsp;&nbsp; אטנדינג
                            <br />
                            רשאית, בהתאם לשיקול דעתה הבלעדי וללא צורך במתן הודעה
                            מראש, לשנות כל תנאי מתנאי כל
                            <br />
                            מבצע או הטבה (לרבות את תוקפם) וכן למנוע השתתפות
                            במבצע או בהטבה ללא הסבר או סיבה,
                            <br />
                            והמשתמשת באתר מוותרת בזה על כל טענה בקשר עם שינוי או
                            מניעה כאמור.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            32.&nbsp;&nbsp;&nbsp; ההשתתפות
                            <br />
                            במבצע או הטבה היא על אחריותך הבלעדית ואת פוטרת בזה
                            את אטנדינג מכל אחריות הקשורה
                            <br />
                            למבצע או להטבה, לרבות לשירות, מוצר או הטבה אחרת
                            שקיבלת.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            33.&nbsp;&nbsp;&nbsp; ככל
                            <br />
                            שההטבה היא מוצר או שירות הניתנים על ידי צד שלישי או
                            בשיתוף עם צד שלישי, אנחנו
                            <br />
                            לא נהייה אחראים לטיב המוצר או השירות או לכל פעולה או
                            מחדל של הצד השלישי וכל טענה
                            <br />
                            בנוגע לכך הינה בין המשתמשת לבין הצד השלישי.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              lineHeight: "150%",
                            }}
                          >
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            <b>
                              <u>
                                יצירת
                                <br />
                                קשר עם אטנדינג
                              </u>
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            <b>
                              אנחנו
                              <br />
                              כאן בשבילך וחשוב לנו לשמוע אותך!
                            </b>
                            <b />
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            34.&nbsp;&nbsp;&nbsp; בכל
                            <br />
                            נושא באפשרותך ליצור אתנו קשר באמצעות לחיצה על “
                            <b>התחילו בצ’אט</b>”<br />
                            באתר, או באמצעות כל אחת מהדרכים הבאות:
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            <b>
                              ü&nbsp;&nbsp;&nbsp;&nbsp;
                              <br />
                            </b>
                            <b>
                              שליחת דואר רשום לכתובתנו
                              <br />
                              הרשומה ברח’ יפו יערי מאיר 15, תל-אביב 6937115;
                            </b>
                            <b />
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            <b>
                              ü&nbsp;&nbsp;&nbsp;&nbsp;
                              <br />
                            </b>
                            <b>טלפון: 054-9112001;</b>
                            <b />
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            <b>
                              ü&nbsp;&nbsp;&nbsp;&nbsp;
                              <br />
                            </b>
                            <b>דוא”ל: </b>
                            <b>info@attending.co.il</b>
                            <b />
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            <b>
                              <u>&nbsp;</u>
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            <b>
                              <u>שונות</u>
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            35.&nbsp;&nbsp;&nbsp; “
                            <b>
                              יום
                              <br />
                              עסקים”
                            </b>{" "}
                            – ימים א’ עד ה’, שאינם ימי חג או שבתון, בין השעות
                            09:00-19:00.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            36.&nbsp;&nbsp;&nbsp; כל
                            <br />
                            ויתור, ארכה או הקלה שניתנו על ידינו לא יהוו תקדים
                            למקרה אחר, ולא יהיה תוקף לשום
                            <br />
                            ויתור, ארכה או הקלה שנעשו בקשר עם תנאי שימוש אלה,
                            אלא אם נעשו בכתב.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            37.&nbsp;&nbsp;&nbsp; עיכוב
                            <br />
                            ו/או השעיה במימוש ו/או בהפעלת זכות שלנו לא יחשבו
                            כוויתור מצדנו ואנחנו נהיה רשאים
                            <br />
                            לממשה ו/או להפעילה בכל עת שנמצא לנכון.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            38.&nbsp;&nbsp;&nbsp; אנחנו
                            <br />
                            רשאים להמחות את זכויותינו וחובותינו על פי תנאי שימוש
                            אלה; את לא רשאית להמחות,
                            <br />
                            להעביר, לשעבד או למשכן, בכל צורה שהיא את זכויותיה.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            39.&nbsp;&nbsp;&nbsp; ככל
                            <br />
                            שייקבע כי סעיף כלשהו בתנאי שימוש אלה הינו מחוסר
                            תוקף, בלתי חוקי, מקפח או בלתי
                            <br />
                            ניתן לאכיפה, לא יהיה בכך כדי להביא לבטלותם של יתר
                            הסעיפים שבתנאי השימוש ו/או
                            <br />
                            להשפיע על תוקפם, חוקיותם או אכיפתם.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            40.&nbsp;&nbsp;&nbsp; דיני
                            <br />
                            מדינת ישראל יחולו על תנאי שימוש אלה. לבתי המשפט
                            בתל-אביב-יפו הסמכות הייחודית
                            <br />
                            לדון בכל עניין הקשור בהם.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              lineHeight: "150%",
                            }}
                          >
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            <b>
                              <u>&nbsp;</u>
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "center", lineHeight: "150%" }}
                            align="center"
                          >
                            <b>
                              <u>
                                תנאי שימוש
                                <br />
                                לשירותים ספציפיים
                              </u>
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            <b>
                              <u>שירותי הזמנות דיגיטלית</u>
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            אטנדינג מספקת שירות התשלום המאפשר
                            <br />
                            לעצב הזמנות דיגיטליות. כדי ליהנות מהשירות, נדרשת
                            המשתמשת באתר לבחור פריט
                            <br />
                            (תבנית), למלא את הפרטים הרלוונטיים ולפעול על-פי
                            ההוראות והדרישות המופיעות באתר.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            41.&nbsp;&nbsp;&nbsp; יש
                            <br />
                            למלא באופן מלא ומדויק את הפרטים והנתונים הנדרשים. את
                            מתחייבת כי כל פרטי ההזמנה שתמלאי
                            <br />
                            הינם נכונים, בבעלותך ו/או יש לך זכות ו/או רישיון
                            להשתמש בהם וכן את מתחייבת כי
                            <br />
                            כל תביעה ו/או נזק ו/או תלונה בנוגע לפרטים אלו יהיו
                            באחריותך בלבד, ואת פוטרת אותנו
                            <br />
                            מכל אחריות בקשר עם האמור.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            42.&nbsp;&nbsp;&nbsp; ככל
                            <br />
                            שקיימת האפשרות להעלות תמונה בתבנית שבחרת, יש להעלות
                            תמונה בקובץ JPG ובאיכות טובה, והכל בהתאם להנחיות
                            הנציגים שלנו ו/או ההנחיות
                            <br />
                            המפורטות באתר. ניתן להעלות לאתר יותר מתמונה אחת,
                            ובמקרה זה אנחנו נבחר את התמונה
                            <br />
                            המתאימה ביותר בהתאם לשיקול דעתנו הבלעדי. &nbsp;ככל
                            שאינך רוצה שאנחנו נבחר עבורך, אנא תעלי לאתר
                            <br />
                            תמונה אחת בלבד.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            43.&nbsp;&nbsp;&nbsp; עד
                            <br />
                            יום עסקים אחד מעת ביצוע הרכישה אנחנו נספק קובץ
                            דיגיטלי (בפורמט JPG או MP4, לפי העניין) שבו
                            <br />
                            ההזמנה הדיגיטלית בהתאם לפרטים שהזנת.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            44.&nbsp;&nbsp;&nbsp; שימי
                            <br />
                            לב, כי ההזמנה הדיגיטלית שנספק, מהווה הזמנה בעיצוב
                            אישי והיא מבוצעת במיוחד עבורך.
                            <br />
                            לפיכך, מעת קבלת ההזמנה הדיגיטלית ובכפוף להוראות חוק
                            הגנת הצרכן, לא תוכלי לבטל
                            <br />
                            את העסקה.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            45.&nbsp;&nbsp;&nbsp; אנחנו
                            <br />
                            לא מתחייבים ולא יכולים להתחייב כי ההזמנה הדיגיטלית
                            שנספק לך תהייה בהתאם
                            <br />
                            לציפיותייך ולשביעות רצונך. ולכן, לפני רכישת השירות
                            את מתבקשת לבחון את הדוגמאות
                            <br />
                            שבאתר. בכל מקרה, מעת שהחלטת לרכוש את השירות שלנו, את
                            מוותרת על כל טענה או דרישה
                            <br />
                            שעניינן אי-התאמה או חוסר שביעות רצון מההזמנה
                            הדיגיטלית שסופקה לך. &nbsp;&nbsp;&nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            46.&nbsp;&nbsp;&nbsp; להזמנה
                            <br />
                            הדיגיטלית יצורף קרדיט משולב בלוגו של אטנדינג יחד עם
                            כתובת האתר. את הקרדיט לא
                            <br />
                            ניתן להסיר ומעת רכישת השירות את מביעה הסכמתך לצירוף
                            הקרדיט והפרסום האמור.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            47.&nbsp;&nbsp;&nbsp; ככל
                            <br />
                            שההזמנה הדיגיטלית תצריך שינוי פרט מפרטיה לאחר שנספק
                            לך אותה, עלויות השינוי
                            <br />
                            יחולו עליך בלבד.{" "}
                            <b>
                              אטנדינג גובה סך של 82 ₪ בעבור כל עריכה נוספת או
                              שינוי של
                              <br />
                              פרט מפרטי ההזמנה הדיגיטלית לאחר שסופקה.
                            </b>{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            48.&nbsp;&nbsp;&nbsp; מובהר,
                            <br />
                            כי אנחנו רשאים לעדכן את מחיר השירות באתר מפעם לפעם
                            ולפי שיקול דעתנו הבלעדי
                            <br />
                            והמחיר שיקבע הוא המחיר שיופיע באתר בעת רכישת השירות
                            בפועל.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            49.&nbsp;&nbsp;&nbsp; אטנדינג
                            <br />
                            שומרת על זכותה שלא לספק את השירות ככל שתחול טעות
                            בתיאור הפריט ו/או במחירו,
                            <br />
                            בתנאי התשלום ו/או בכל נתון אחר.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            50.&nbsp;&nbsp;&nbsp; אטנדינג
                            <br />
                            לא מתחייבת כי התבניות באתר יהיו זמינות להזמנה או
                            אספקה והמשתמשת באתר מוותרת בזה
                            <br />
                            על כל טענה בגין כך. ככל שאספקת ההזמנה הדיגיטלית תהיה
                            בלתי אפשרית מכל סיבה שהיא
                            <br />
                            ובהתאם לקביעת אטנדינג, נודיע לך על כך בהקדם האפשרי
                            ותינתן לך האפשרות לבחור פריט
                            <br />
                            אחר במחיר דומה. ככל שלא תחפצי בפריט אחר, תבוטל
                            הזמנתך וכספך יוחזר, בהתאם
                            <br />
                            להוראות תנאי השימוש וחוק הגנת הצרכן.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            51.&nbsp;&nbsp;&nbsp; מובהר,
                            <br />
                            כי ייתכנו הבדלי גוון, צבע ורזולוציה סבירים בין המוצג
                            במסך או במכשיר אחד לבין המוצג
                            <br />
                            במסך או במכשיר אחר. את מוותרת על כל טענה או דרישה
                            כלפינו שעניינה הבדלי גוון או צבע
                            <br />
                            או רזולוציה כאמור.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            52.&nbsp;&nbsp;&nbsp; מעת
                            <br />
                            רכישת השירות, את מאשרת לנו להעלות ולפרסם באתר
                            וברשתות החברתיות את ההזמנה
                            <br />
                            הדיגיטלית שסופקה לך. ככל שאת לא מעוניינת בכך, אנא
                            תשלחי לנו הודעה בכתב, שלפיה את
                            <br />
                            לא מוכנה לפרסום האמור. מעת שליחת ההודעה, אטנדינג
                            תסיר את הפרסום באתר תוך 7 ימי
                            <br />
                            עסקים.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            53.&nbsp;&nbsp;&nbsp; את
                            <br />
                            מתחייבת לעשות שימוש הוגן וחוקי בהזמנה הדיגיטלית
                            שתסופק לך ואך ורק למטרה שלשמה
                            <br />
                            נרכשה.&nbsp;{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            54.&nbsp;&nbsp;&nbsp; את
                            <br />
                            תישאי באחריות מלאה לכל טענה ו/או דרישה ו/או תביעה של
                            צד שלישי כלשהו אשר נפגע
                            <br />
                            מההזמנה הדיגיטלית שסופקה לך, לרבות מכל רכיב, נתון,
                            תמונה או מידע שבה, ואת פוטרת
                            <br />
                            אותנו מכל טענה או דרישה או תביעה בקשר עם האמור. את
                            מתחייבת כי כל תביעה ו/או נזק
                            <br />
                            ו/או תלונה בנוגע לפרטים אלו יהיו באחריותך בלבד.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            55.&nbsp;&nbsp;&nbsp; למען
                            <br />
                            הסר כל ספק, יצוין כי אנו מספקים שירות של הזמנה{" "}
                            <u>דיגיטלית</u> בקובץ
                            <b>
                              <u>שאינו</u>
                            </b>
                            <br />
                            מותאם להדפסה. <b />
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            56.&nbsp;&nbsp;&nbsp;{" "}
                            <b>
                              ככל
                              <br />
                              שברצונך לקבל את ההזמנה הדיגיטלית בקובץ מסוג{" "}
                            </b>
                            <b>PDF</b>
                            <b>
                              אשר מותאם להדפסה (בגודל
                              <br />
                              12*18) <u>בתשלום נוסף של 60 ₪</u>, אנא תפני אלינו
                              באחת מדרכי יצירת הקשר שבסעיף 34
                              <br />
                              לעיל, וככל שהדבר אפשרי –{" "}
                              <u>בהתאם לשיקול דעתנו המלא והמוחלט</u>, נשלח לך
                              תוך
                              <br />
                              יום עסקים אחד לאחר ביצוע התשלום כאמור את הקובץ
                              המותאם להדפסה כנ”ל.{" "}
                            </b>
                            <b />
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            57.&nbsp;&nbsp;&nbsp; ייתכנו
                            <br />
                            הבדלי גוון, צבע, גודל ורזולוציה סבירים בין ההזמנה
                            הדיגיטלית להזמנה המותאמת
                            <br />
                            להדפסה או להזמנה המודפסת. את מוותרת על כל טענה או
                            דרישה כלפינו שעניינה הבדלי
                            <br />
                            גוון או צבע או גודל או רזולוציה כאמור. <b />
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              lineHeight: "150%",
                            }}
                          >
                            <b>&nbsp;</b>
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            <b>
                              <u>
                                שירות הזמנה דיגיטלית הכוללת תמונה מצוירת – תנאים
                                מיוחדים
                              </u>
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            58.&nbsp;&nbsp;&nbsp; אטנדינג
                            <br />
                            מספקת שירות בתשלום המאפשר לעצב הזמנה דיגיטלית לפי
                            תבניות מוכנות מראש בשילוב ציור
                            <br />
                            של תמונה שתשלחי לנו מראש. כדי ליהנות מהשירות, נדרשת
                            המשתמשת באתר לבחור פריט
                            <br />
                            (תבנית), להעלות תמונה שאותה היא רוצה שנצייר, למלא את
                            הפרטים הרלוונטיים ולפעול
                            <br />
                            על-פי ההוראות והדרישות המופיעות באתר. &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            59.&nbsp;&nbsp;&nbsp; יש
                            <br />
                            להעלות תמונה שאותה תרצי שנצייר. התמונה נדרשת להיות
                            באיכות טובה, בהתאם להנחיות
                            <br />
                            של הנציגים שלנו ו/או ההנחיות המפורטות באתר. ניתן
                            להעלות יותר מתמונה אחת, ובמקרה
                            <br />
                            זה אנחנו נבחר את התמונה המתאימה ביותר שאותה נצייר
                            בהתאם לשיקול דעתנו הבלעדי.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            60.&nbsp;&nbsp;&nbsp; עד
                            <br />
                            שלושה (3) ימי עסקים לאחר ביצוע הרכישה והעלאת התמונה,
                            לרבות העלאת הפרטים
                            <br />
                            והנתונים הנדרשים, אנחנו נספק קובץ דיגיטלי ( בפורמט
                            MP4 בלבד או JPEG) ובו ההזמנה הדיגיטלית בשילוב התמונה
                            המצוירת בהתאם לפרטים שהזנת.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            61.&nbsp;&nbsp;&nbsp; ככל
                            <br />
                            שההזמנה הדיגיטלית תצריך שינוי פרט מפרטיה לאחר שנספק
                            לך אותה, עלויות השינוי
                            <br />
                            יחולו עליך בלבד.{" "}
                            <b>
                              אנחנו גובים סך של 82 ₪ בעבור עריכה או שינוי של פרט
                              מפרטי
                              <br />
                              ההזמנה הדיגיטלית, לרבות התמונה המצוירת, לאחר
                              שסופקה לך. סבב תיקונים נוסף בעלות
                              <br />
                              של 69 ₪.
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            62.&nbsp;&nbsp;&nbsp; ככל
                            <br />
                            שתחליטי לשנות את התמונה שאותה ציירנו, מכל סיבה שהיא,
                            אנחנו נהיה רשאים לגבות
                            <br />
                            תוספת תשלום עד לגובה מחיר של הזמנה חדשה הכוללת תמונה
                            מצוירת.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              lineHeight: "150%",
                            }}
                          >
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            <b>
                              <u>מערכת לניהול מוזמנים</u>
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            אטנדינג מאפשרת למשתמשת באתר שרכשה מוצר או שירות לקבל
                            גישה למערכת
                            <br />
                            ניהול המוזמנים של אטנדינג (להלן: “<b>המערכת</b>“).
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            63.&nbsp;&nbsp;&nbsp; ההרשאה
                            <br />
                            למערכת היא מוגבלת, אישית, לא-בלעדית ובלתי ניתנת
                            להעברה, ויש להשתמש בה אך ורק לצורך
                            <br />
                            ארגון וניהול המוזמנים באירוע.
                            <b>
                              <u />
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            64.&nbsp;&nbsp;&nbsp; המידע
                            <br />
                            המוצג במערכת מתבסס על נתונים שהקלידה המשתמשת. יש
                            למלא באופן מלא ומדויק את
                            <br />
                            הפרטים והנתונים הנדרשים. את מתחייבת כי כל הפרטים
                            שתמלאי הינם נכונים, בבעלותך
                            <br />
                            ו/או יש לך זכות ו/או רישיון להשתמש בהם וכן את
                            מתחייבת כי כל תביעה ו/או נזק ו/או
                            <br />
                            תלונה בנוגע לפרטים אלו יהיו באחריותך בלבד, ואת פוטרת
                            אותנו מכל אחריות בקשר עם האמור.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            65.&nbsp;&nbsp;&nbsp; אנחנו
                            <br />
                            רשאים, לפי שיקול דעתנו הבלעדי וללא כל הודעה מוקדמת,
                            לעדכן ו/או לשנות ו/או
                            <br />
                            להפסיק ו/או לעשות כל פעולה אחרת במערכת, ומעת שהחלטת
                            להשתמש במערכת את מביעה
                            <br />
                            הסכמתך לכך ומוותרת על כל טענה בקשר לכך.{" "}
                            <b>
                              <u />
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            66.&nbsp;&nbsp;&nbsp; אנחנו
                            <br />
                            לא נהייה אחראים לכל נזק שיגרם למשתמשת במערכת כתוצאה
                            מכל מעשה או מחדל בעת השימוש
                            <br />
                            או בהיעדר שימוש במערכת.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            67.&nbsp;&nbsp;&nbsp; המשתמשת
                            <br />
                            במערכת אחראית באופן בלעדי על גיבוי הקבצים והנתונים
                            המופיעים במערכת, והיא פוטרת
                            <br />
                            את אטנדינג מכל אחריות לנזק העלול להיגרם כתוצאה מאבדן
                            נתונים אשר נמחקו מסיבה
                            <br />
                            כלשהי ולא גובו על ידיך.{" "}
                            <b>
                              <u />
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            68.&nbsp;&nbsp;&nbsp; כאמור
                            <br />
                            במדיניות הביטול שלנו, אין כל חובה לעשות שימוש
                            במערכת, אך משהועלו נתונים למערכת,
                            <br />
                            לרבות רשימת מוזמנים, לא ניתן יהיה לבטל את השירות או
                            לקבל החזר כספי.
                            <b>
                              <u />
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            <b>
                              <u>שירות אישורי הגעה לאירוע</u>
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            אטנדינג מספקת חבילות בתשלום לאישור
                            <br />
                            הגעתם של מוזמני האירוע. להלן התנאים הכלליים לשירות,
                            ובהמשך יופיעו פרטי החבילות
                            <br />
                            וההתחייבויות שלנו לפיהן.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            69.&nbsp;&nbsp;&nbsp; שירות
                            <br />
                            אישורי הגעה הינו שירות בתשלום מראש, כאשר גובה התשלום
                            נגזר מהחבילה שבחרה המשתמשת
                            <br />
                            (בפרק זה – “<b>בעלת האירוע</b>“) בעת הרישום לשירות.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            70.&nbsp;&nbsp;&nbsp; לא
                            <br />
                            ניתן להזדכות ו/או להעביר רשומות מוזמנים שלא נוצלו
                            לאחר רכישתן, וככל שיש צורך
                            <br />
                            בהוספת רשומות מעבר לחבילה שנרכשה, תידרשי להוסיף
                            תשלום בגין כך כתנאי למתן
                            <br />
                            השירות, אך אין בכך משום ויתור מצדנו ככל שהתשלום לא
                            שולם מראש ו/או במלואו.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            71.&nbsp;&nbsp;&nbsp; לצורך
                            <br />
                            מתן שירות אישורי הגעה לאירוע תידרש בעלת האירוע להזין
                            במקום המיועד לכך ו/או להעלות
                            <br />
                            לאתר קובץ אקסל (EXCEL) הכולל את הפרטים
                            <br />
                            הבאים של כל מוזמנת מבין המוזמנות שלה, כדלקמן:{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            24.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            25.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            26.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            27.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            28.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            29.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            30.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            31.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            32.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            33.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            34.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            35.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            36.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            37.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            38.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            39.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            40.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            41.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            42.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            43.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            44.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            45.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            46.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            47.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            48.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            49.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            50.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            51.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            52.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            53.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            54.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            55.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            56.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            57.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            58.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            59.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: "56.7pt",
                              textAlign: "justify",
                              textIndent: "-38.7pt",
                              lineHeight: "150%",
                            }}
                          >
                            <b>
                              59.1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <br />
                            </b>
                            <b>שם מלא (שם פרטי ושם משפחה);</b>
                            <b />
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: "56.7pt",
                              textAlign: "justify",
                              textIndent: "-38.7pt",
                              lineHeight: "150%",
                            }}
                          >
                            <b>
                              59.2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <br />
                            </b>
                            <b>
                              מספר טלפון נייד שהונפק
                              <br />
                              בישראל;{" "}
                            </b>
                            <b />
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: "56.7pt",
                              textAlign: "justify",
                              textIndent: "-38.7pt",
                              lineHeight: "150%",
                            }}
                          >
                            <b>
                              59.3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <br />
                            </b>
                            <b>
                              כמות המוזמנים הצפויים להגיע
                              <br />
                              מהמספר טלפון שצוין.
                            </b>
                            <b />
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              lineHeight: "150%",
                            }}
                          >
                            <b>&nbsp;</b>(להלן: “<b>רשומה</b>“)
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            72.&nbsp;&nbsp;&nbsp; כל
                            <br />
                            פרט נוסף שבעלת האירוע תעלה, יהיה מרצונה החופשי בלבד
                            ואינו נדרש לצורך מתן
                            <br />
                            השירות.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            73.&nbsp;&nbsp;&nbsp; אטנדינג
                            <br />
                            לא תהיה אחראית על הנתונים שנמסרו לה על-ידי בעלת
                            האירוע, לרבות אם הם עולים כדי
                            <br />
                            לשון הרע או פגיעה בפרטיות או מפרים את הוראות הדין
                            בכל דרך אחרת. יובהר, כי על
                            <br />
                            בעלת האירוע מלוא האחריות לכך. מבלי לגרוע מכלליות
                            האמור, בעלת האירוע מתחייבת
                            <br />
                            להעלות רשומות אך ורק של מוזמנים פרטיים לאירוע שלה או
                            גורמים אשר אישרו קבלת
                            <br />
                            הודעה לפי כל דין. מובהר, כי אסור להשתמש בשירות
                            לשליחת חומרי פרסומת שלא כדין
                            <br />
                            (ספאם).
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            74.&nbsp;&nbsp;&nbsp; יש
                            <br />
                            לשים לב כי השירות ניתן רק למוזמנות שלהן מספר טלפון
                            נייד שהונפק בישראל והן
                            <br />
                            שוהות, בעת מתן השירות, בתחומי מדינת ישראל. אין באמור
                            כדי לאפשר זיכוי או העברה
                            <br />
                            של רשומה כלשהי שלא קיבלה את פנייתנו לצורך אישור
                            הגעתה.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            75.&nbsp;&nbsp;&nbsp; ייתכן
                            <br />
                            כי בעלת האירוע תידרש לבחור את המועדים שבהם היא תרצה
                            שנתחיל במתן השירות. לאחר
                            <br />
                            רכישת השירות, וככל שבעלת האירוע לא תבחר מועדים
                            כאמור, אטנדינג תבחר את המועדים
                            <br />
                            על-פי שיקול דעתה הבלעדי ובעלת האירוע מוותרת על כל
                            טענה בגין כך.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            76.&nbsp;&nbsp;&nbsp; אין
                            <br />
                            לבצע כל שימוש בשירות אישורי הגעה לאירוע שהינו שימוש
                            מסחרי ו/או שנוגד את חוק התקשורת
                            <br />
                            (בזק ושידורים), תשמ”ב-1982, ובעלת האירוע תישא במלוא
                            האחריות ככל שתשתמש
                            <br />
                            בשירות שלא למטרה שלשמה נועד.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            77.&nbsp;&nbsp;&nbsp; הודעה
                            <br />
                            לרשומה תכלול קישור אינטרנטי באמצעותו תוכל מקבלת
                            ההודעה לעדכן את סטטוס הגעתה
                            <br />
                            לאירוע וכן את מספר האנשים שיגיעו עמה.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            78.&nbsp;&nbsp;&nbsp; יובהר,
                            <br />
                            כי חלק מההודעות יכללו קישורים לאתרים או יישומון
                            חיצוני, ואנחנו לא מתחייבים כי
                            <br />
                            אותם קישורים יפעלו ובעלת האירוע פוטרת אותנו מכל טענה
                            בקשר לכך.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            79.&nbsp;&nbsp;&nbsp; הקישור
                            <br />
                            ליישומון WAZE תואם לכתובת
                            <br />
                            שבעלת האירוע הזינה בעת מילוי הפרטים. בעלת האירוע
                            מוותרת על כל טענה שעניינה טעות
                            <br />
                            בכתובת האירוע.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            80.&nbsp;&nbsp;&nbsp; אטנדינג
                            <br />
                            לא מבטיחה, ולא יכולה להבטיח, כי כל פניה או הודעה
                            תגיע ליעדה וכי המוזמנות ישיבו
                            <br />
                            לפניות או להודעות או יעדכנו את סטטוס הגעתן. בעלת
                            האירוע מוותרת על כל טענה בגין
                            <br />
                            כך.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            81.&nbsp;&nbsp;&nbsp; אטנדינג
                            <br />
                            גם לא מבטיחה, ולא יכולה להבטיח, כי כל מוזמנת אשר
                            סימנה את סטטוס הגעתה, אכן תפעל
                            <br />
                            על-פי אותו סטטוס, ובעלת האירוע פוטרת את אטנדינג
                            ומוותרת על כל טענה בגין כך.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            82.&nbsp;&nbsp;&nbsp; נוסח
                            <br />
                            ההודעה שתשלח לרשומה קבוע מראש ואינו ניתן לשינוי או
                            עריכה על ידי בעלת האירוע.
                            <br />
                            שיגור ההודעות יכול שיימשך מספר שעות ולא ייעשה באופן
                            מידי לכל הרשומות הכלולות
                            <br />
                            ברשימת המוזמנים.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            83.&nbsp;&nbsp;&nbsp; אטנדינג
                            <br />
                            רשאית להימנע, על-פי שיקול דעתה הבלעדי, מיצירת קשר,
                            בכל דרך שהיא, לכל אחת
                            <br />
                            מהרשומות או המוזמנות של בעלת האירוע. במקרה זה, נשיב
                            את התשלום היחסי ששילמת עבור
                            <br />
                            אותה רשומה או מוזמנת.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            84.&nbsp;&nbsp;&nbsp; למען
                            <br />
                            הסר ספק, ככל שלא ניתן יהיה לספק את השירות בשל נסיבות
                            שאינן בשליטתנו, אטנדינג
                            <br />
                            תחייב את המשתמשת במחיר מלא, והמשתמשת מוותרת על כל
                            טענה בקשר לכך.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            85.&nbsp;&nbsp;&nbsp; בעלת
                            <br />
                            האירוע מאשרת לאטנדינג להעביר לאולם או לכל גורם אחר
                            את הפרטים שסופקו על-ידה,
                            <br />
                            לרבות מספר המוזמנים שאישרו הגעתם.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".25in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            86.&nbsp;&nbsp;&nbsp;
                            <br />
                            להלן תיאור החבילות שלנו
                            <br />
                            לשירות אישורי הגעה לאירוע:
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            <b>
                              <u>&nbsp;</u>
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            <b>
                              <u>חבילת אישורי הגעה ב-</u>
                            </b>
                            <b>
                              <u>SMS</u>
                            </b>
                            <b>
                              <u>/</u>
                            </b>
                            <b>
                              <u>WhatsApp</u>
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            <b>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b>
                            <b>
                              <u>
                                תמצית
                                <br />
                                החבילה
                              </u>
                            </b>
                            <b>
                              :<br />
                              חבילה הכוללת עד 3 סבבים של הודעות למוזמנות של בעלת
                              האירוע: 2 הודעות לצורך קבלת
                              <br />
                              סטטוס הגעה והודעה נוספת ביום האירוע לרשומה אשר
                              אישרה הגעתה.
                            </b>
                            <b />
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            <b>
                              <u>מחיר החבילה</u>
                            </b>
                            : המחיר משתנה בהתאם
                            <br />
                            לכמות הרשומות ובאמצעי לשליחת ההודעה.
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            עד
                            <br />
                            100 רשומות | SMS- 59 ₪ | WhatsApp- 159 ₪;
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            עד
                            <br />
                            200 רשומות | SMS- 99 ₪ | WhatsApp- 249 ₪;
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            עד
                            <br />
                            300 רשומות | SMS- 119 ₪ | WhatsApp- 319 ₪;
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            עד
                            <br />
                            400 רשומות | SMS- 149 ₪ | WhatsApp- 419 ₪;
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            עד
                            <br />
                            500 רשומות | SMS- 179 ₪ | WhatsApp- 529 ₪;
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            עד
                            <br />
                            600 רשומות | SMS- 199 ₪ | WhatsApp- 639 ₪;
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            עד
                            <br />
                            700 רשומות | SMS- 239 ₪ | WhatsApp- 749 ₪;
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            עד
                            <br />
                            800 רשומות | SMS- 299 ₪ | WhatsApp- 859 ₪;
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            עד
                            <br />
                            900 רשומות | SMS- 319 ₪ | WhatsApp- 969 ₪;
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            עד
                            <br />
                            1,000 רשומות | SMS- 349 ₪ | WhatsApp- 999 ₪.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            <b>
                              <u>פרטי החבילה</u>
                            </b>
                            :
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".75in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            –&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            במועד תחילת הענקת השירות
                            <br />
                            נשלח הודעה באמצעות SMS או באמצעות
                            <br />
                            יישומון WhatsApp אל כל רשומה מהרשומות
                            <br />
                            של בעלת האירוע. ההודעה תכלול לינק שבו כל רשומה תוכל
                            לעדכן את סטטוס ההגעה ואת
                            <br />
                            מספר המגיעים עמה.{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".75in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            –&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            ההודעה השנייה תשלח לרשומה
                            <br />
                            אשר סימנה את סטטוס הגעתה כ”אולי” וכן לרשומה אשר לא
                            עדכנה כלל את סטטוס
                            <br />
                            ההגעה שלה. בדומה להודעה הראשונה, גם ההודעה השנייה
                            תכלול לינק שבו כל רשומה תוכל
                            <br />
                            לעדכן את סטטוס ההגעה ואת מספר המגיעים.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".75in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            –&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            ההודעה השלישית תשלח ביום
                            <br />
                            האירוע אך ורק לרשומה אשר אישרה את סטטוס הגעתה. הודעה
                            זאת תכלול תזכורת בדבר
                            <br />
                            האירוע, דרכי הגעה וכן בדבר האפשרות לתת מתנה באמצעות
                            כרטיס אשראי באירוע (ככל
                            <br />
                            שהשירות של אטנדינג זמין ונרכש על ידי בעלת האירוע).{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            <b>
                              <u>מועדים</u>
                            </b>
                            : ככלל, מיד לאחר
                            <br />
                            טעינת קובץ ה-EXCEL על ידי בעלת
                            <br />
                            האירוע, נשלח את ההודעה הראשונה לכלל הרשומות. כ-48
                            שעות לאחר מכן נשלח את ההודעה
                            <br />
                            השנייה. ביום האירוע תשלח ההודעה השלישית. *לאטנדינג
                            שיקול דעת מלא לשנות את
                            <br />
                            המועדים הנ”ל מבלי לעדכן את בעלת האירוע בדבר השינוי.
                            ככל שבעלת האירוע
                            <br />
                            מעוניינת במועדים אחרים, יש ליצור אתנו קשר לפני העלאת
                            קובץ EXCEL או פרטי הרשומות.<u> </u>
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".5in",
                              textAlign: "justify",
                              lineHeight: "150%",
                            }}
                          >
                            &nbsp;
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            <b>
                              <u>חבילת הודעות ושיחות </u>
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            <b>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b>
                            <b>
                              <u>
                                תמצית
                                <br />
                                החבילה
                              </u>
                            </b>
                            <b>
                              :<br />
                              חבילה הכוללת עד 3 סבבים של שיחות למוזמנות של בעלת
                              האירוע כדי לברר סטטוס הגעתן.
                              <br />
                              בנוסף, החבילה כוללת סבב הודעות{" "}
                            </b>
                            <b>SMS</b>
                            <b>
                              {" "}
                              לעדכון סטטוס ההגעה באופן יזום למוזמנות אשר לא
                              הצלחנו לברר את
                              <br />
                              סטטוס הגעתן באופן טלפוני.
                            </b>
                            <b>
                              <u />
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            <b>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b>
                            <b>
                              <u>
                                מחיר
                                <br />
                                החבילה
                              </u>
                            </b>
                            :<br />
                            המחיר משתנה בהתאם למועד רכישת השירות.{" "}
                            <b>
                              <u />
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            ככל
                            <br />
                            שבמועד רכישת השירות נותרו{" "}
                            <u>7 ימים או יותר לתאריך האירוע</u> | המחיר הוא{" "}
                            <b>
                              2.34
                              <br />₪ לכל רשומה{" "}
                            </b>
                            (2 ₪ לפני מע”מ);
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            ככל
                            <br />
                            שבמועד רכישת השירות נותרו{" "}
                            <u>6 ימים או פחות לתאריך האירוע</u> | המחיר הוא{" "}
                            <b>
                              3.51
                              <br />₪ לכל רשומה
                            </b>{" "}
                            (3 ₪ לפני מע”מ).{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            <b>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b>
                            <b>
                              <u>
                                פרטי
                                <br />
                                החבילה:
                              </u>
                            </b>
                            <b>
                              <u />
                            </b>
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".75in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            –&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            במועד תחילת הענקת השירות
                            <br />
                            נחייג לכל רשומה של בעלת האירוע כדי לברר את סטטוס
                            הגעתה באופן טלפוני. ככל שלא
                            <br />
                            נצליח לקבל את סטטוס ההגעה של הרשומה בניסיון השיחה
                            הראשון, נמשיך לנסות ולברר את
                            <br />
                            סטטוס ההגעה באופן טלפוני בין שתי שיחות לשלוש שיחות
                            שונות.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              marginRight: ".75in",
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            –&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            ככל שבתום הניסיונות
                            <br />
                            הנ”ל לא נצליח לברר את סטטוס ההגעה של הרשומה באופן
                            טלפוני כאמור, נשלח הודעת
                            <br />
                            SMS הכוללת לינק שבו
                            <br />
                            ניתן לעדכן את סטטוס ההגעה ואת מספר המגיעות באופן
                            יזום.
                          </p>
                          <p
                            dir="RTL"
                            style={{
                              textAlign: "justify",
                              textIndent: "-.25in",
                              lineHeight: "150%",
                            }}
                          >
                            ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            <b>
                              <u>מועדים</u>
                            </b>
                            : המועדים ליצירת קשר
                            <br />
                            יהיו בהתאם לשיקול דעתנו הבלעדי, אולם השירות יינתן
                            בימים א’-ה’ בין השעות
                            <br />
                            08:00-22:00; ביום ו’ ובערבי חג בין השעות 08:00 ועד
                            שעתיים לפני כניסת השבת/ החג.
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            <b>
                              <u>
                                לפרטים
                                <br />
                                נוספים ולרכישת השירות יש ליצור קשר
                              </u>
                            </b>{" "}
                          </p>
                          <p
                            dir="RTL"
                            style={{ textAlign: "justify", lineHeight: "150%" }}
                          >
                            &nbsp;
                          </p>
                          <h2>
                            מדיניות פרטיות
                            <br />
                          </h2>
                          <p>
                            <b>הפרטיות שלך חשובה לנו! </b>
                          </p>
                          <p>
                            <b>
                              אנא קרא/י מדיניות פרטיות בעיון ובקפידה. את/ה לא
                              חייב/ת להסכים לאמור בהם, וככל שאינך מסכים/ה, את/ה
                              נדרש/ת לעזוב את האתר לאלתר ולא לעשות בו כל שימוש.{" "}
                            </b>
                            <b>
                              שימוש באתר וצפייה בתכניו מעיד כי קראת, הבנת ואישרת
                              את האמור במדיניות פרטיות זו.
                            </b>
                          </p>
                          <p>
                            <b>
                              האמור להלן מנוסח בלשון נקבה יחידה מטעמי נוחות
                              בלבד, אולם הוא מתייחס לשני המינים, לתאגידים
                              ולגופים משפטיים אחרים באופן דומה.
                            </b>
                          </p>
                          <p>
                            ברוכה הבאה לאתר{" "}
                            <a href="/">
                              /
                            </a>
                            (להלן: “<b>האתר</b>“). האתר מופעל על-ידי שותפות
                            רשומה “<b>אטנדינג</b>” (מס’ 540313335). בכל פעם
                            שנעשה שימוש בגוף ראשון רבים כמו: “<b>אנחנו</b>” או “
                            <b>שלנו</b>“, הכוונה היא ל- “<b>אטנדינג</b>“.{" "}
                          </p>
                          <p>
                            התנאים שלהלן ילמדו אותך, בין היתר, כיצד אנחנו עשויים
                            לשמור, לעבד ולשתף עם אחרים את המידע הנמסר לנו או
                            הנאסף עליך בעת השימוש באתר או בשירותים הניתנים על
                            ידינו.{" "}
                          </p>
                          <p>
                            בכל שאלה או הערה בנושא מדיניות זו אנא פני לשירות
                            הלקוחות שלנו בדוא”ל : info@attending.co.il{" "}
                          </p>
                          <p>
                            “אטנדינג” שומרת על זכותה לשנות מדיניות פרטיות זו בכל
                            עת, כאשר כל שינוי כזה ייכנס לתוקף מיד עם הצגתו באתר.
                            השימוש באתר יהיה כפוף למדיניות הפרטיות שהייתה בתוקף
                            בתאריך ובשעה שבהם בוצע השימוש בפועל.
                          </p>
                          <p>
                            <b>הצורך באיסוף המידע</b>
                          </p>
                          <p>
                            “אטנדינג” אוספת את המידע כדי: למדוד את השימוש באתר;
                            לשפר, לתפעל ולפתח את השירותים הניתנים על ידינו;
                            לזהות אותך ולהציג לך תוכן רלוונטי ומותאם אישית;
                            ליצור קשר עם המשתמשת, ולשלוח לה מבצעי קידום מכירות
                            ופרסומים רלוונטיים באתר ומאתרים אחרים או באתרים
                            אחרים; להתגונן מפני תביעות, דרישות וטענות בקשר עם
                            מתן השירותים וכן לצורך כל מטרה אחרת הנדרשת לשם
                            פעילותנו.
                          </p>
                          <p>
                            <b>
                              חשוב לציין, כי אין עליך כל חובה חוקית למסור לנו
                              מידע אישי אודותיך. אך ללא מסירת המידע ייתכן ולא
                              תוכלי להירשם לאתר, לקבל שירותים שונים הניתנים בו
                              או לצפות בתכניו. בעת השימוש באתר ובשירותים המוצעים
                              בו, את מצהירה שידוע לך שלא חלה עליך כל חובה חוקית
                              למסור את הפרטים שיימסרו על ידיך, וכי מסירת המידע
                              נעשית בהסכמתך המלאה ומרצונך החופשי
                            </b>
                            .
                          </p>
                          <ul>
                            <li>
                              <b>המידע הנאסף</b>
                            </li>
                          </ul>
                          <p>
                            מידע הנמסר מרצון: כשאת נרשמת לשימוש בשירותים מסוימים
                            שלנו הטעונים רישום, או יוצרת אתנו קשר באופן מזהה,
                            אנחנו אוספים פרטים אישיים דהנמסרים על ידיך, הנדרשים
                            על מנת שנוכל להציע את אותם שירותים. פרטים אלו עשויים
                            לכלול את שמך המלא, כתובת דוא”ל, תאריך, מקום וסוג
                            האירוע שלך, מספר המוזמנים לאירוע, פרטים מזהים של
                            המוזמנים (לרבות פרטי קשר שלהם), פרטי חשבונות בנק
                            (פרטי בעלי חשבון הבנק, פרטיים המצויים בתעודת זהות של
                            בעל חשבון הבנק, פרטי הבנק, הסניף ומספר חשבון וכן
                            מסמכים בנקאיים המאשרים את קיומו של חשבון הבנק),
                            נתונים לגבי מתנות שניתנו ועוד.
                          </p>
                          <p>
                            פרטי הלקוחות שלנו: במידה והנך לקוחה שלנו, כלומר:
                            רכשת מאתנו מוצר או שירות, אנחנו נשמור את כלל הפרטים
                            הנדרשים במסגרת העסקה. פרטים אלו כוללים את כתובת
                            אספקת השירות, פרטי יצירת קשר אתך, פרטי התשלום שלך
                            וכדומה. בימים אלה “אטנדינג” עומלת על רישום מאגר מידע
                            ייעודי של לקוחותיה בפנקס מאגרי המידע.{" "}
                          </p>
                          <p>
                            נתוני שימוש: אנחנו אוספים פרטים על אודות השימוש של
                            כלל הגולשות באתר. אנחנו שומרים את מזהה המכשיר, את
                            סוג הדפדפן שאת עושה בו שימוש, מאיזה אתר אינטרנט הגעת
                            ל”אטנדינג”, באיזה עמודים ביקרת, כמה זמן שהית באתר
                            בממוצע וכמה פעמים חזרת לבקר באתר בממוצע. בנוסף,
                            במסגרת השימוש שלך בשירותים המוצעים באתר, ייתכן
                            ותמסרי לנו או שייאסף על ידינו מידע הנוגע להעדפותייך
                            האישיות, לרבות הרגלי צריכה והתנהגות. ייתכן ש
                            “אטנדינג” תקשר את הנתונים למשתמשת רשומה ולמידע האישי
                            שמסרה לנו כדי להציע לה תכנים המותאמים לה באופן אישי,
                            הטבות מיוחדות וכדומה.{" "}
                          </p>
                          <ul>
                            <li>
                              <b>העברה של מידע</b>
                            </li>
                          </ul>
                          <p>
                            המידע הנאסף אצלנו יכול ויימסר לצדדים שלישיים. יצוין
                            שחלק מהשירותים שלנו הם בתשלום מופחת משמעותית בשל
                            העובדה שכתוצאה מהם נאגר מידע או נמסר מידע לצד שלישי
                            ומעת שהחלטת להשתמש באתר ו/או בשירותים שלנו את מביעה
                            הסכמתך לכך.{" "}
                          </p>
                          <p>
                            מבלי לגרוע מהאמור, אנחנו משתפים את המידע שלך עם{" "}
                            <b>ספקי שירות</b>
                            העובדים אתנו, וזאת במידה הדרושה לתפעול האתר ולאספקת
                            השירותים שאנחנו מציעים. כמו-כן, אנחנו משתפים מידע על
                            אודות הפעילות שלך עם
                            <b>מפרסמים</b> ופלטפורמות פרסום ברשת.{" "}
                          </p>
                          <p>
                            אנחנו עושים שימוש ב”משוואות רשת” כדי לחלוק עם
                            מפרסמים מידע סטטיסטי כדי שיוכלו להציג לך פרסומות
                            רלוונטיות יותר הן באתר והן באתרים אחרים. ככל הניתן,
                            העברת המידע לצדדים שלישיים תכלול מידע רלוונטי בלבד
                            שאינו חורג מהמטרות שלשמן מועבר המידע ותתבצע באופן
                            מידתי למטרה מוגדרת, מפורשת ולגיטימית.
                          </p>
                          <p>
                            בנוסף, אנחנו עשויים להעביר את המידע לצדדים שלישיים
                            נוספים גם בהתקיים אחד או יותר מהמקרים הבאים: אם
                            יתקבל צו שיפוטי המורה לנו למסור את המידע, בהתאם
                            להוראות כל דין; בכל מחלוקת, טענה, דרישה, תביעה או
                            הליכים משפטיים כלשהם בינך או מי מטעמך לבין “אטנדינג”
                            או מי מטעמה ו/או לבין צדדים שלישיים כלשהם; במקרה של
                            העברה ו/או מכירה ו/או המחאה ו/או רכישה, של מפעילת
                            האתר ו/או נכסיה ו/או כל חלק מהם, בתמורה או שלא
                            בתמורה, בין היתר במקרים אשר במסגרתם תועבר הבעלות
                            באתר ו/או בתכניו, כולם או חלקם, לצדדים שלישיים,
                            לרבות במקרה של שינויים אחרים במפעילת האתר; בכל מקרה
                            שמפעילת האתר תסבור כי מסירת המידע נדרשת כדי למנוע
                            נזק לה או לרכושה, לך או לצד שלישי כלשהו.{" "}
                          </p>
                          <ul>
                            <li>
                              <b>שמירת המידע ואבטחתו</b>
                            </li>
                          </ul>
                          <p>
                            “אטנדינג” עושה מאמצים רבים על מנת להגן על שלמות
                            המידע ואבטחתו מפני גישה של צדדים שלישיים. עם זאת,
                            וכידוע, שמירת המידע ואבטחתו באמצעים אלקטרוניים לעולם
                            לא יכולה להיות בטוחה לחלוטין ובכל עת שבה את מוסרת
                            מידע כאמור, את עושה זאת בידיעה של הסכנות הכרוכות
                            בכך.
                          </p>
                          <p>
                            אם יש לך סיבה להאמין שהעברת המידע אלינו לא בטוחה
                            עוד, את נדרשת לעדכן אותנו לאלתר באמצעות פנייה לשירות
                            הלקוחות שלנו בדוא”ל : info@attending.co.il{" "}
                          </p>
                          <p>
                            {" "}
                            אנחנו לא נהייה אחראים על כל נזק שייגרם לך כתוצאה
                            מדבר מה עליו ידעת, או היה עלייך לדעת, ולא עדכנת
                            אותנו.{" "}
                          </p>
                          <ul>
                            <li>
                              <b>Cookies</b>
                            </li>
                          </ul>
                          <p>
                            ייתכן שהאתר ישתמש ב”עוגיות” (Cookies) לצורך תפעולו
                            השוטף והתקין, ובכלל זה כדי לאסוף נתונים סטטיסטיים
                            אודות השימוש באתר, לאימות פרטים, להתאים את האתר
                            להעדפותיך ואף לצרכי אבטחת המידע. בשימוש באתר, את
                            מסכימה לשימוש בקבצי Cookies.{" "}
                          </p>
                          <p>
                            יצוין שחלק מדפדפני האינטרנט כוללים אפשרות לחסום קבלת
                            Cookies, אך חסימה כאמור יכול שתמנע שימוש באתר כשורה.
                            אם אינך יודעת כיצד לחסום קבצי Cookies, תוכלי לבדוק
                            זאת בקובץ העזרה של הדפדפן בו את משתמשת.
                          </p>
                          <ol>
                            <li style={{ fontWeight: 400 }}>
                              <b>מחיקת מידע, עיון בו והסרת פרטים אישיים</b>:
                            </li>
                          </ol>
                          <p>
                            “אטנדינג” תשמור את המידע אודותיך לפרק הזמן הדרוש לפי
                            שיקול דעתה, והיא עשויה למחוק את המידע גם ללא כל
                            דרישה. את מוותרת בזה על כל טענה או תביעה כנגד
                            “אטנדינג” בגין איסוף המידע, העברתו, שמירתו או
                            מחיקתו.{" "}
                          </p>
                          <p>
                            את רשאית בכל עת לפנות אלינו ולבקש לדעת איזה מידע
                            אישי שמור אודותיך, לעיין בו, לתקנו וככל שהדבר אפשרי,
                            את רשאית לדרוש מחיקתו. יובהר, כי מחיקת מידע כאמור
                            עשויה לפגוע בשירותים הניתנים למשתמשת והמשתמשת מוותרת
                            על כל טענה בקשר לכך.
                          </p>
                          <p>
                            על מנת להסיר את פרטיך, יש לפנות לשירות הלקוחות שלנו
                            בדוא”ל : info@attending.co.il{" "}
                          </p>
                          <p />
                        </div>
                        <p className="form-row validate-required">
                          <label className="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox">
                            <input
                              type="checkbox"
                              className="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox"
                              name="terms"
                              id="terms"
                            />
                            <span className="woocommerce-terms-and-conditions-checkbox-text">
                              קראתי ואני מאשר/ת את{" "}
                              <a
                                href="/terms/"
                                className="woocommerce-terms-and-conditions-link"
                                target="_blank"
                              >
                                תנאי שימוש
                              </a>{" "}
                              של האתר
                            </span>
                            &nbsp;
                            <abbr className="required" title="נדרש">
                              *
                            </abbr>
                          </label>
                          <input
                            type="hidden"
                            name="terms-field"
                            defaultValue={1}
                          />
                        </p>
                      </div>
                      <button
                        type="submit"
                        className="button alt"
                        name="woocommerce_checkout_place_order"
                        id="place_order"
                        value="שליחת הזמנה"
                        data-value="שליחת הזמנה"
                      >
                        שליחת הזמנה
                      </button>
                      <input
                        type="hidden"
                        id="woocommerce-process-checkout-nonce"
                        name="woocommerce-process-checkout-nonce"
                        defaultValue="c1a5846a21"
                      />
                      <input
                        type="hidden"
                        name="_wp_http_referer"
                        defaultValue="/checkout"
                      />
                    </div>
                  </div>
                </div>
              </form>
              <div className="order_review_summery">
                <div className="edit-header">
                  <h3 id="order_review_heading">פרטי ההזמנה</h3>
                  <p>
                    <a className="edit-order" onclick="window.history.go(-1)">
                      עריכת הזמנה
                    </a>
                  </p>
                </div>
                <table>
                  <tbody>
                    <tr className="cart_item">
                      <td className="product-thumbnail">
                        <img
                          width={150}
                          height={150}
                          src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/woocommerce-placeholder-150x150.png"
                          className="woocommerce-placeholder wp-post-image"
                          alt="ממלא מקום"
                          decoding="async"
                          loading="lazy"
                          srcSet="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/woocommerce-placeholder-150x150.png 150w, https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/woocommerce-placeholder-100x100.png 100w, https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/woocommerce-placeholder-300x300.png 300w, https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/woocommerce-placeholder-1024x1024.png 1024w, https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/woocommerce-placeholder-768x768.png 768w, https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/woocommerce-placeholder.png 1200w"
                          sizes="(max-width: 150px) 100vw, 150px"
                        />
                      </td>
                      <td className="product-name">
                        הזמנה לחתונה&nbsp;{" "}
                        <strong className="product-quantity">×&nbsp;1</strong>
                        <dl className="variation">
                          <dt className="variation-">שם הכלה:</dt>
                          <dd className="variation-">
                            <p>sdfaasdfsdf</p>
                          </dd>
                          <dt className="variation-">שם החתן:</dt>
                          <dd className="variation-">
                            <p>asdf</p>
                          </dd>
                          <dt className="variation-English">
                            שם הכלה באנגלית (English):
                          </dt>
                          <dd className="variation-English">
                            <p>sdfaa</p>
                          </dd>
                          <dt className="variation-English">
                            שם החתן באנגלית (English):
                          </dt>
                          <dd className="variation-English">
                            <p>asdfqas</p>
                          </dd>
                          <dt className="variation-">
                            שמות הורי הכלה + שם משפחה:
                          </dt>
                          <dd className="variation-">
                            <p>aeasdf</p>
                          </dd>
                          <dt className="variation-">
                            שמות הורי החתן + שם משפחה:
                          </dt>
                          <dd className="variation-">
                            <p>sdasd</p>
                          </dd>
                          <dt className="variation-">תאריך האירוע:</dt>
                          <dd className="variation-">
                            <p>30/05/2023</p>
                          </dd>
                          <dt className="variation-">מקום האירוע:</dt>
                          <dd className="variation-">
                            <p>asdfa</p>
                          </dd>
                          <dt className="variation-">כתובת הגעה:</dt>
                          <dd className="variation-">
                            <p>sdfeaa</p>
                          </dd>
                          <dt className="variation-">שעת קבלת פנים:</dt>
                          <dd className="variation-">
                            <p>19:30</p>
                          </dd>
                          <dt className="variation-">שעת החופה:</dt>
                          <dd className="variation-">
                            <p>18:00</p>
                          </dd>
                          <dt className="variation-">שעת המסיבה:</dt>
                          <dd className="variation-">
                            <p>21:00</p>
                          </dd>
                          <dt className="variation-">שיר נושא:</dt>
                          <dd className="variation-">
                            <p>Monolink (ARTBAT Remix), Return To Oz</p>
                          </dd>
                          <dt className="variation-">
                            תרצו להוסיף מלל / משפט להזמנה?:
                          </dt>
                          <dd className="variation-">
                            <p>kkkkkkasdfasdf as dfasdf asdf as fas sdf</p>
                          </dd>
                          <dt className="variation-">בסד:</dt>
                          <dd className="variation-">
                            <p>הוספת בס"ד בראש ההזמנה</p>
                          </dd>
                          <dt className="variation-">רקע להזמנה:</dt>
                          <dd className="variation-">
                            <p>הזמנה ללא הדמיה</p>
                          </dd>
                          <dt className="variation-">תאריך עברי:</dt>
                          <dd className="variation-">
                            <p>י' סיון התשפ"ג (לפני השקיעה)</p>
                          </dd>
                          <dt className="variation-">
                            שנשלח הודעות אוטומטיות למוזמנים שלך?:
                          </dt>
                          <dd className="variation-">
                            <p>חבילת הודעות WhatsApp</p>
                          </dd>
                          <dt className="variation-WhatsApp">
                            שליחת הודעות WhatsApp למוזמנים::
                          </dt>
                          <dd className="variation-WhatsApp">
                            <p>
                              חבילת אירוע עד 100 רשומות{" "}
                              <span className="ppom-option-label-price">
                                [+₪159]
                              </span>
                            </p>
                          </dd>
                        </dl>
                      </td>
                      {/* <td class="product-total">
											</td> */}
                    </tr>
                    <tr className="total_price">
                      <td className="title">סך הכל לתשלום</td>
                      <td className="price">
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">
                              ₪
                            </span>
                            308
                          </bdi>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <form
                  name="checkout"
                  method="post"
                  className="wc_coupons_enabled"
                  action="/checkout"
                  encType="multipart/form-data"
                >
                  <div className="coupon">
                    <p className="coupon-code-title">
                      כאן מזינים <span>קוד קופון</span>
                    </p>
                    <input
                      type="text"
                      name="coupon_code"
                      className="input-text"
                      id="coupon_code"
                      defaultValue
                      placeholder="קוד קופון"
                    />{" "}
                    <button
                      type="submit"
                      className="button"
                      name="apply_coupon"
                      value="החלת קופון"
                    >
                      החלת קופון
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* .entry-content */}
        </article>
        {/* #post-15 */}
      </main>
    </>
  );
};

export default Checkout;
