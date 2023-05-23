import React from "react";
import ProcessBar from "./Components/ProcessBar";

const ProductDetails = () => {
  return (
    <>      
      <ProcessBar/>
      <main id="primary" className="site-main">
        <div className="products-container">
          <div className="woocommerce-notices-wrapper" />
          <div
            id="product-1391"
            className="product type-product post-1391 status-publish first instock product_cat-digital-invitation product_cat-henna virtual taxable purchasable product-type-simple"
          >
            <div className="summary entry-summary">
              <div className="product-main-data">
                <div className="product-data">
                  <h1>הזמנה דיגיטלית למסיבת חינה</h1>
                  <p className="price">
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          ₪
                        </span>
                        149
                      </bdi>
                    </span>
                  </p>
                </div>
                <div className="song-action">
                  <p className="title">בחירת שיר</p>
                  <div className="func">
                    <p className="song-name" />
                    <p className="btn pulsing-button">בחירה</p>
                  </div>
                </div>
                <form
                  className="cart"
                  action="https://attending.co.il/product/02010/"
                  method="post"
                  encType="multipart/form-data"
                >
                  <div id="ppom-box-3-10-16" className="ppom-wrapper">
                    {/* Display price table before fields */}
                    {/* Render hidden inputs */}
                    <input
                      type="hidden"
                      id="ppom_product_price"
                      defaultValue={149}
                    />
                    {/* it is setting price to be used for dymanic prices in script.js */}
                    <input
                      type="hidden"
                      name="ppom[fields][id]"
                      id="ppom_productmeta_id"
                      defaultValue="3,10,16"
                    />
                    <input
                      type="hidden"
                      name="ppom_product_id"
                      id="ppom_product_id"
                      defaultValue={1391}
                    />
                    {/* Manage conditional hidden fields to skip validation */}
                    <input
                      type="hidden"
                      name="ppom[conditionally_hidden]"
                      id="conditionally_hidden"
                    />
                    {/* Option price hidden input: ppom-price.js */}
                    <input
                      type="hidden"
                      name="ppom[ppom_option_price]"
                      id="ppom_option_price"
                    />
                    <input type="hidden" name="ppom_cart_key" defaultValue />
                    <input
                      type="hidden"
                      name="add-to-cart"
                      defaultValue={1391}
                    />
                    <div id="ppom-price-cloner-wrapper">
                      <span id="ppom-price-cloner">
                        ₪<span className="ppom-price" />{" "}
                      </span>
                    </div>
                    <div className="form-row ppom-rendering-fields align-items-center ppom-section-collapse">
                      <div
                        data-data_name="bridesname"
                        data-type="text"
                        className="ppom-field-wrapper ppom-col col-md-6 bridesname ppom-wrapper_outer-bridesname ppom-id-3 ppom-c-show"
                      >
                        <div className="form-group ppom-input-brides name">
                          {/* If title of field exist */}
                          <label
                            className="form-control-label"
                            htmlFor="bridesname"
                          >
                            שם הכלה<span className="show_required"> *</span>
                          </label>
                          <input
                            type="text"
                            name="ppom[fields][bridesname]"
                            id="bridesname"
                            className="half form-control text ppom-input ppom-required"
                            placeholder="לדוגמה: נטלי"
                            autoComplete="off"
                            data-type="text"
                            data-data_name="bridesname"
                            data-title="שם הכלה"
                            data-price
                            data-onetime
                            data-taxable
                            data-without_tax
                            defaultValue
                            data-errormsg
                            maxLength
                            minLength
                          />
                        </div>
                      </div>
                      <div
                        data-data_name="groomsname"
                        data-type="text"
                        className="ppom-field-wrapper ppom-col col-md-6 groomsname ppom-wrapper_outer-groomsname ppom-id-3 ppom-c-show"
                      >
                        <div className="form-group ppom-input-grooms name">
                          {/* If title of field exist */}
                          <label
                            className="form-control-label"
                            htmlFor="groomsname"
                          >
                            שם החתן<span className="show_required"> *</span>
                          </label>
                          <input
                            type="text"
                            name="ppom[fields][groomsname]"
                            id="groomsname"
                            className="half form-control text ppom-input ppom-required"
                            placeholder="לדוגמה: עמרי"
                            autoComplete="off"
                            data-type="text"
                            data-data_name="groomsname"
                            data-title="שם החתן"
                            data-price
                            data-onetime
                            data-taxable
                            data-without_tax
                            defaultValue
                            data-errormsg
                            maxLength
                            minLength
                          />
                        </div>
                      </div>
                      <div
                        data-data_name="bride_name_en"
                        data-type="text"
                        className="ppom-field-wrapper ppom-col col-md-6 bride_name_en ppom-wrapper_outer-bride_name_en ppom-id-3 ppom-c-show"
                      >
                        <div className="form-group ppom-input-bride_name_en">
                          {/* If title of field exist */}
                          <label
                            className="form-control-label"
                            htmlFor="bride_name_en"
                          >
                            שם הכלה באנגלית (English)
                          </label>
                          <input
                            type="text"
                            name="ppom[fields][bride_name_en]"
                            id="bride_name_en"
                            className="form-control text ppom-input"
                            placeholder
                            autoComplete="off"
                            data-type="text"
                            data-data_name="bride_name_en"
                            data-title="שם הכלה באנגלית (English)"
                            data-price
                            data-onetime
                            data-taxable
                            data-without_tax
                            defaultValue
                            data-errormsg
                            maxLength
                            minLength
                          />
                        </div>
                      </div>
                      <div
                        data-data_name="groom_name_en"
                        data-type="text"
                        className="ppom-field-wrapper ppom-col col-md-6 groom_name_en ppom-wrapper_outer-groom_name_en ppom-id-3 ppom-c-show"
                      >
                        <div className="form-group ppom-input-groom_name_en">
                          {/* If title of field exist */}
                          <label
                            className="form-control-label"
                            htmlFor="groom_name_en"
                          >
                            שם החתן באנגלית (English)
                          </label>
                          <input
                            type="text"
                            name="ppom[fields][groom_name_en]"
                            id="groom_name_en"
                            className="form-control text ppom-input"
                            placeholder
                            autoComplete="off"
                            data-type="text"
                            data-data_name="groom_name_en"
                            data-title="שם החתן באנגלית (English)"
                            data-price
                            data-onetime
                            data-taxable
                            data-without_tax
                            defaultValue
                            data-errormsg
                            maxLength
                            minLength
                          />
                        </div>
                      </div>
                      <div
                        data-data_name="parentsandfamilyname"
                        data-type="text"
                        className="ppom-field-wrapper ppom-col col-md-6 parentsandfamilyname ppom-wrapper_outer-parentsandfamilyname ppom-id-3 ppom-c-show"
                      >
                        <div className="form-group ppom-input-Parents and family name">
                          {/* If title of field exist */}
                          <label
                            className="form-control-label"
                            htmlFor="parentsandfamilyname"
                          >
                            שמות הורי הכלה + שם משפחה
                            <span className="show_required"> *</span>
                          </label>
                          <input
                            type="text"
                            name="ppom[fields][parentsandfamilyname]"
                            id="parentsandfamilyname"
                            className="half form-control text ppom-input ppom-required"
                            placeholder="לדוגמה: ניצה ושלמה כהן"
                            autoComplete="off"
                            data-type="text"
                            data-data_name="parentsandfamilyname"
                            data-title="שמות הורי הכלה + שם משפחה"
                            data-price
                            data-onetime
                            data-taxable
                            data-without_tax
                            defaultValue
                            data-errormsg
                            maxLength
                            minLength
                          />
                        </div>
                      </div>
                      <div
                        data-data_name="menparentsandfamilyname"
                        data-type="text"
                        className="ppom-field-wrapper ppom-col col-md-6 menparentsandfamilyname ppom-wrapper_outer-menparentsandfamilyname ppom-id-3 ppom-c-show"
                      >
                        <div className="form-group ppom-input-men Parents and family name">
                          {/* If title of field exist */}
                          <label
                            className="form-control-label"
                            htmlFor="menparentsandfamilyname"
                          >
                            שמות הורי החתן + שם משפחה
                            <span className="show_required"> *</span>
                          </label>
                          <input
                            type="text"
                            name="ppom[fields][menparentsandfamilyname]"
                            id="menparentsandfamilyname"
                            className="half form-control text ppom-input ppom-required"
                            placeholder="לדוגמה: צופית ורונן לוי"
                            autoComplete="off"
                            data-type="text"
                            data-data_name="menparentsandfamilyname"
                            data-title="שמות הורי החתן + שם משפחה"
                            data-price
                            data-onetime
                            data-taxable
                            data-without_tax
                            defaultValue
                            data-errormsg
                            maxLength
                            minLength
                          />
                        </div>
                      </div>
                      <div
                        data-data_name="place"
                        data-type="text"
                        className="ppom-field-wrapper ppom-col col-md-6 place ppom-wrapper_outer-place ppom-id-3 ppom-c-show"
                      >
                        <div className="form-group ppom-input-place">
                          {/* If title of field exist */}
                          <label className="form-control-label" htmlFor="place">
                            מקום האירוע<span className="show_required"> *</span>
                          </label>
                          <input
                            type="text"
                            name="ppom[fields][place]"
                            id="place"
                            className="half form-control text ppom-input ppom-required"
                            placeholder="אולם/גן אירועים"
                            autoComplete="off"
                            data-type="text"
                            data-data_name="place"
                            data-title="מקום האירוע"
                            data-price
                            data-onetime
                            data-taxable
                            data-without_tax
                            defaultValue
                            data-errormsg
                            maxLength
                            minLength
                          />
                        </div>
                      </div>
                      <div
                        data-data_name="address"
                        data-type="text"
                        className="ppom-field-wrapper ppom-col col-md-6 address ppom-wrapper_outer-address ppom-id-3 ppom-c-show"
                      >
                        <div className="form-group ppom-input-address">
                          {/* If title of field exist */}
                          <label
                            className="form-control-label"
                            htmlFor="address"
                          >
                            כתובת הגעה<span className="show_required"> *</span>
                          </label>
                          <input
                            type="text"
                            name="ppom[fields][address]"
                            id="address"
                            className="half form-control text ppom-input ppom-required"
                            placeholder="לדוגמה: מחלף נחשונים"
                            autoComplete="off"
                            data-type="text"
                            data-data_name="address"
                            data-title="כתובת הגעה"
                            data-price
                            data-onetime
                            data-taxable
                            data-without_tax
                            defaultValue
                            data-errormsg
                            maxLength
                            minLength
                          />
                        </div>
                      </div>
                      <div
                        data-data_name="date"
                        data-type="date"
                        className="ppom-field-wrapper ppom-col col-md-6 date ppom-wrapper_outer-date ppom-id-3 ppom-c-show"
                      >
                        <div className="form-group ppom-input-date">
                          {/* If title of field exist */}
                          <label className="form-control-label" htmlFor="date">
                            תאריך האירוע
                            <span className="show_required"> *</span>
                          </label>
                          <input
                            type="text"
                            name="ppom[fields][date]"
                            id="date"
                            className="half form-control date ppom-input ppom-required"
                            placeholder
                            autoComplete="off"
                            data-type="text"
                            data-data_name="date"
                            data-title="תאריך האירוע"
                            data-price
                            data-onetime
                            data-taxable
                            data-without_tax
                            data-errormsg
                            readOnly
                          />
                        </div>
                      </div>
                      <div
                        data-data_name="houre"
                        data-type="select"
                        className="ppom-field-wrapper ppom-col col-md-6 houre ppom-wrapper_outer-houre ppom-id-3 ppom-c-show"
                      >
                        <div className="form-group ppom-input-houre">
                          {/* if title of field exist */}
                          <label className="form-control-label" htmlFor="houre">
                            שעת קבלת פנים
                            <span className="show_required"> *</span>
                          </label>
                          <select
                            id="houre"
                            name="ppom[fields][houre]"
                            className="half select ppom-input ppom-required form-select"
                            data-data_name="houre"
                            data-errormsg
                          >
                            <option
                              value="01:00"
                              className="ppom-option-01_00 ppom-simple-option "
                              data-price
                              data-optionid="01_00"
                              data-percent
                              data-label="01:00"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              01:00
                            </option>
                            <option
                              value="01:30"
                              className="ppom-option-01_30 ppom-simple-option "
                              data-price
                              data-optionid="01_30"
                              data-percent
                              data-label="01:30"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              01:30
                            </option>
                            <option
                              value="02:00"
                              className="ppom-option-02_00 ppom-simple-option "
                              data-price
                              data-optionid="02_00"
                              data-percent
                              data-label="02:00"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              02:00
                            </option>
                            <option
                              value="02:30"
                              className="ppom-option-02_30 ppom-simple-option "
                              data-price
                              data-optionid="02_30"
                              data-percent
                              data-label="02:30"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              02:30
                            </option>
                            <option
                              value="03:00"
                              className="ppom-option-03_00 ppom-simple-option "
                              data-price
                              data-optionid="03_00"
                              data-percent
                              data-label="03:00"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              03:00
                            </option>
                            <option
                              value="03:30"
                              className="ppom-option-03_30 ppom-simple-option "
                              data-price
                              data-optionid="03_30"
                              data-percent
                              data-label="03:30"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              03:30
                            </option>
                            <option
                              value="04:00"
                              className="ppom-option-04_00 ppom-simple-option "
                              data-price
                              data-optionid="04_00"
                              data-percent
                              data-label="04:00"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              04:00
                            </option>
                            <option
                              value="04:30"
                              className="ppom-option-04_30 ppom-simple-option "
                              data-price
                              data-optionid="04_30"
                              data-percent
                              data-label="04:30"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              04:30
                            </option>
                            <option
                              value="05:00"
                              className="ppom-option-05_00 ppom-simple-option "
                              data-price
                              data-optionid="05_00"
                              data-percent
                              data-label="05:00"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              05:00
                            </option>
                            <option
                              value="05:30"
                              className="ppom-option-05_30 ppom-simple-option "
                              data-price
                              data-optionid="05_30"
                              data-percent
                              data-label="05:30"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              05:30
                            </option>
                            <option
                              value="06:00"
                              className="ppom-option-06_00 ppom-simple-option "
                              data-price
                              data-optionid="06_00"
                              data-percent
                              data-label="06:00"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              06:00
                            </option>
                            <option
                              value="06:30"
                              className="ppom-option-06_30 ppom-simple-option "
                              data-price
                              data-optionid="06_30"
                              data-percent
                              data-label="06:30"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              06:30
                            </option>
                            <option
                              value="07:00"
                              className="ppom-option-07_00 ppom-simple-option "
                              data-price
                              data-optionid="07_00"
                              data-percent
                              data-label="07:00"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              07:00
                            </option>
                            <option
                              value="07:30"
                              className="ppom-option-07_30 ppom-simple-option "
                              data-price
                              data-optionid="07_30"
                              data-percent
                              data-label="07:30"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              07:30
                            </option>
                            <option
                              value="08:00"
                              className="ppom-option-08_00 ppom-simple-option "
                              data-price
                              data-optionid="08_00"
                              data-percent
                              data-label="08:00"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              08:00
                            </option>
                            <option
                              value="08:30"
                              className="ppom-option-08_30 ppom-simple-option "
                              data-price
                              data-optionid="08_30"
                              data-percent
                              data-label="08:30"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              08:30
                            </option>
                            <option
                              value="09:00"
                              className="ppom-option-09_00 ppom-simple-option "
                              data-price
                              data-optionid="09_00"
                              data-percent
                              data-label="09:00"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              09:00
                            </option>
                            <option
                              value="09:30"
                              className="ppom-option-09_30 ppom-simple-option "
                              data-price
                              data-optionid="09_30"
                              data-percent
                              data-label="09:30"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              09:30
                            </option>
                            <option
                              value="10:00"
                              className="ppom-option-10_00 ppom-simple-option "
                              data-price
                              data-optionid="10_00"
                              data-percent
                              data-label="10:00"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              10:00
                            </option>
                            <option
                              value="10:30"
                              className="ppom-option-10_30 ppom-simple-option "
                              data-price
                              data-optionid="10_30"
                              data-percent
                              data-label="10:30"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              10:30
                            </option>
                            <option
                              value="11:00"
                              className="ppom-option-11_00 ppom-simple-option "
                              data-price
                              data-optionid="11_00"
                              data-percent
                              data-label="11:00"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              11:00
                            </option>
                            <option
                              value="11:30"
                              className="ppom-option-11_30 ppom-simple-option "
                              data-price
                              data-optionid="11_30"
                              data-percent
                              data-label="11:30"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              11:30
                            </option>
                            <option
                              value="12:00"
                              className="ppom-option-12_00 ppom-simple-option "
                              data-price
                              data-optionid="12_00"
                              data-percent
                              data-label="12:00"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              12:00
                            </option>
                            <option
                              value="12:30"
                              className="ppom-option-12_30 ppom-simple-option "
                              data-price
                              data-optionid="12_30"
                              data-percent
                              data-label="12:30"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              12:30
                            </option>
                            <option
                              value="13:00"
                              className="ppom-option-13_00 ppom-simple-option "
                              data-price
                              data-optionid="13_00"
                              data-percent
                              data-label="13:00"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              13:00
                            </option>
                            <option
                              value="13:30"
                              className="ppom-option-13_30 ppom-simple-option "
                              data-price
                              data-optionid="13_30"
                              data-percent
                              data-label="13:30"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              13:30
                            </option>
                            <option
                              value="14:00"
                              className="ppom-option-14_00 ppom-simple-option "
                              data-price
                              data-optionid="14_00"
                              data-percent
                              data-label="14:00"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              14:00
                            </option>
                            <option
                              value="14:30"
                              className="ppom-option-14_30 ppom-simple-option "
                              data-price
                              data-optionid="14_30"
                              data-percent
                              data-label="14:30"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              14:30
                            </option>
                            <option
                              value="15:00"
                              className="ppom-option-15_00 ppom-simple-option "
                              data-price
                              data-optionid="15_00"
                              data-percent
                              data-label="15:00"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              15:00
                            </option>
                            <option
                              value="15:30"
                              className="ppom-option-15_30 ppom-simple-option "
                              data-price
                              data-optionid="15_30"
                              data-percent
                              data-label="15:30"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              15:30
                            </option>
                            <option
                              value="16:00"
                              className="ppom-option-16_00 ppom-simple-option "
                              data-price
                              data-optionid="16_00"
                              data-percent
                              data-label="16:00"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              16:00
                            </option>
                            <option
                              value="16:30"
                              className="ppom-option-16_30 ppom-simple-option "
                              data-price
                              data-optionid="16_30"
                              data-percent
                              data-label="16:30"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              16:30
                            </option>
                            <option
                              value="17:00"
                              className="ppom-option-17_00 ppom-simple-option "
                              data-price
                              data-optionid="17_00"
                              data-percent
                              data-label="17:00"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              17:00
                            </option>
                            <option
                              value="17:30"
                              className="ppom-option-17_30 ppom-simple-option "
                              data-price
                              data-optionid="17_30"
                              data-percent
                              data-label="17:30"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              17:30
                            </option>
                            <option
                              value="18:00"
                              className="ppom-option-18_00 ppom-simple-option "
                              data-price
                              data-optionid="18_00"
                              data-percent
                              data-label="18:00"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              18:00
                            </option>
                            <option
                              value="18:30"
                              className="ppom-option-18_30 ppom-simple-option "
                              data-price
                              data-optionid="18_30"
                              data-percent
                              data-label="18:30"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              18:30
                            </option>
                            <option
                              value="19:00"
                              className="ppom-option-19_00 ppom-simple-option "
                              data-price
                              data-optionid="19_00"
                              data-percent
                              data-label="19:00"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              19:00
                            </option>
                            <option
                              value="19:30"
                              className="ppom-option-19_30 ppom-simple-option "
                              data-price
                              data-optionid="19_30"
                              data-percent
                              data-label="19:30"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                              selected="selected"
                            >
                              19:30
                            </option>
                            <option
                              value="20:00"
                              className="ppom-option-20_00 ppom-simple-option "
                              data-price
                              data-optionid="20_00"
                              data-percent
                              data-label="20:00"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              20:00
                            </option>
                            <option
                              value="20:30"
                              className="ppom-option-20_30 ppom-simple-option "
                              data-price
                              data-optionid="20_30"
                              data-percent
                              data-label="20:30"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              20:30
                            </option>
                            <option
                              value="21:00"
                              className="ppom-option-21_00 ppom-simple-option "
                              data-price
                              data-optionid="21_00"
                              data-percent
                              data-label="21:00"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              21:00
                            </option>
                            <option
                              value="21:30"
                              className="ppom-option-21_30 ppom-simple-option "
                              data-price
                              data-optionid="21_30"
                              data-percent
                              data-label="21:30"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              21:30
                            </option>
                            <option
                              value="22:00"
                              className="ppom-option-22_00 ppom-simple-option "
                              data-price
                              data-optionid="22_00"
                              data-percent
                              data-label="22:00"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              22:00
                            </option>
                            <option
                              value="22:30"
                              className="ppom-option-22_30 ppom-simple-option "
                              data-price
                              data-optionid="22_30"
                              data-percent
                              data-label="22:30"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              22:30
                            </option>
                            <option
                              value="23:00"
                              className="ppom-option-23_00 ppom-simple-option "
                              data-price
                              data-optionid="23_00"
                              data-percent
                              data-label="23:00"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              23:00
                            </option>
                            <option
                              value="23:30"
                              className="ppom-option-23_30 ppom-simple-option "
                              data-price
                              data-optionid="23_30"
                              data-percent
                              data-label="23:30"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              23:30
                            </option>
                            <option
                              value="00:00"
                              className="ppom-option-00_00 ppom-simple-option "
                              data-price
                              data-optionid="00_00"
                              data-percent
                              data-label="00:00"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              00:00
                            </option>
                            <option
                              value="00:30"
                              className="ppom-option-00_30 ppom-simple-option "
                              data-price
                              data-optionid="00_30"
                              data-percent
                              data-label="00:30"
                              data-title="שעת קבלת פנים"
                              data-onetime
                              data-taxable
                              data-without_tax
                              data-data_name="houre"
                              data-option_weight
                            >
                              00:30
                            </option>
                          </select>
                        </div>
                      </div>
                      <div
                        data-data_name="extra_text"
                        data-type="textarea"
                        className="ppom-field-wrapper ppom-col col-md-12 extra_text ppom-wrapper_outer-extra_text ppom-id-3 ppom-c-show"
                      >
                        <div className="form-group ppom-input-extra_text">
                          {/* if title of field exist */}
                          <label
                            className="form-control-label"
                            htmlFor="extra_text"
                          >
                            תרצו להוסיף מלל / משפט להזמנה?
                            <span className="show_description ppom-input-desc">
                              {" "}
                              שימו לב! יש לכתוב בצורה מדויקת את המשפט הרצוי
                            </span>
                          </label>
                          <textarea
                            name="ppom[fields][extra_text]"
                            id="extra_text"
                            className="form-control textarea ppom-input"
                            placeholder
                            data-errormsg
                            maxLength={90}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div
                        data-data_name="basad"
                        data-type="checkbox"
                        className="ppom-field-wrapper ppom-col col-md-12 basad ppom-wrapper_outer-basad ppom-id-3 ppom-c-show"
                      >
                        <div className="form-group ppom-input-basad">
                          {/* if title of field exist */}
                          <label className="form-control-label" htmlFor="basad">
                            בסד
                          </label>
                          <div className="form-check-inline">
                            <label
                              className="form-check-label"
                              htmlFor="1391-basad-_______b_______b_____________"
                            >
                              <input
                                type="checkbox"
                                name="ppom[fields][basad][]"
                                id="1391-basad-_______b_______b_____________"
                                className="checkbox ppom-input ppom-check-input ppom-option-_______b_______b_____________ ppom-simple-option "
                                data-optionid="_______b_______b_____________"
                                data-price
                                data-percent
                                data-label='הוספת בס"ד בראש ההזמנה'
                                data-title="בסד"
                                data-onetime
                                data-taxable
                                data-without_tax
                                data-data_name="basad"
                                defaultValue='הוספת בס"ד בראש ההזמנה'
                              />
                              <span className="ppom-input-option-label ppom-label-checkbox">
                                הוספת בס"ד בראש ההזמנה
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div
                        data-data_name="song"
                        data-type="text"
                        className="ppom-field-wrapper ppom-col col-md-12 song ppom-wrapper_outer-song ppom-id-3 ppom-c-show"
                      >
                        <div className="form-group ppom-input-song">
                          {/* If title of field exist */}
                          <label className="form-control-label" htmlFor="song">
                            שיר נושא<span className="show_required"> *</span>
                          </label>
                          <input
                            type="text"
                            name="ppom[fields][song]"
                            id="song"
                            className="song-picked form-control text ppom-input ppom-required"
                            placeholder
                            autoComplete="off"
                            data-type="text"
                            data-data_name="song"
                            data-title="שיר נושא"
                            data-price
                            data-onetime
                            data-taxable
                            data-without_tax
                            defaultValue
                            data-errormsg
                            maxLength
                            minLength
                          />
                        </div>
                      </div>
                      <div
                        data-data_name="ilus_img"
                        data-type="text"
                        className="ppom-field-wrapper ppom-col col-md-12 ilus_img ppom-wrapper_outer-ilus_img ppom-id-3 ppom-c-show"
                      >
                        <div className="form-group ppom-input-ilus_img">
                          {/* If title of field exist */}
                          <label
                            className="form-control-label"
                            htmlFor="ilus_img"
                          >
                            רקע להזמנה
                          </label>
                          <input
                            type="text"
                            name="ppom[fields][ilus_img]"
                            id="ilus_img"
                            className="form-control text ppom-input"
                            placeholder
                            autoComplete="off"
                            data-type="text"
                            data-data_name="ilus_img"
                            data-title="רקע להזמנה"
                            data-price
                            data-onetime
                            data-taxable
                            data-without_tax
                            defaultValue
                            data-errormsg
                            maxLength
                            minLength
                          />
                        </div>
                      </div>
                      <div
                        data-data_name="hebrew_date"
                        data-type="text"
                        className="ppom-field-wrapper ppom-col col-md-12 hebrew_date ppom-wrapper_outer-hebrew_date ppom-id-3 ppom-c-show"
                      >
                        <div className="form-group ppom-input-hebrew_date">
                          {/* If title of field exist */}
                          <label
                            className="form-control-label"
                            htmlFor="hebrew_date"
                          >
                            תאריך עברי
                          </label>
                          <input
                            type="text"
                            name="ppom[fields][hebrew_date]"
                            id="hebrew_date"
                            className="form-control text ppom-input"
                            placeholder
                            autoComplete="off"
                            data-type="text"
                            data-data_name="hebrew_date"
                            data-title="תאריך עברי"
                            data-price
                            data-onetime
                            data-taxable
                            data-without_tax
                            defaultValue
                            data-errormsg
                            maxLength
                            minLength
                          />
                        </div>
                      </div>
                      <div
                        data-data_name="image-select"
                        data-type="file"
                        className="ppom-field-wrapper ppom-col col-md-12 image-select ppom-wrapper_outer-image-select ppom-id-10 ppom-c-show"
                      >
                        <div
                          id="ppom-file-container-image-select"
                          className="form-group ppom-input-image-select"
                        >
                          {/* if title of field exist */}
                          <label
                            className="form-control-label"
                            htmlFor="image-select"
                          >
                            צירוף תמונה<span className="show_required"> *</span>
                            <span className="show_description ppom-input-desc">
                              <br /> במקרים בהם התמונה נחתכה או התהפכה, אל דאגה
                              :) <br /> צוות המעצבים הגרפיים שלנו יטפל בזה
                            </span>
                          </label>
                          <div
                            className="ppom-file-container text-center"
                            style={{ height: "auto" }}
                          >
                            <a
                              href="javascript:;"
                              id="selectfiles-image-select"
                              className="btn btn-primary  form-control file ppom-input ppom-required"
                            >
                              לחץ לבחירה או גרור קובץ{" "}
                            </a>
                            <span className="ppom-dragdrop-text">
                              Drag File Here
                            </span>
                          </div>{" "}
                          {/* ppom-file-container */}
                          <div
                            id="filelist-image-select"
                            className="filelist image-select"
                          ></div>{" "}
                          {/* filelist */}
                        </div>
                      </div>
                      <div
                        data-data_name="whatsapp_sms_toggle"
                        data-type="radio"
                        className="ppom-field-wrapper ppom-col col-md-12 whatsapp_sms_toggle ppom-wrapper_outer-whatsapp_sms_toggle ppom-id-16 ppom-c-show"
                      >
                        <div className="form-group ppom-input-whatsapp_sms_toggle">
                          {/* if title of field exist */}
                          <label
                            className="form-control-label"
                            htmlFor="whatsapp_sms_toggle"
                          >
                            שנשלח הודעות אוטומטיות למוזמנים שלך?
                            <span className="show_description ppom-input-desc">
                              <p className="automatic_messages">
                                סבב 1: הודעה לכלל המוזמנים. <br />
                                סבב 2: לאחר 48 שעות למי שסימן “אולי / לא הגיב”.{" "}
                                <br />
                                סבב 3: הודעה ביום האירוע לכל מי שסימן “מגיע”.
                              </p>
                            </span>
                          </label>
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="1391-whatsapp_sms_toggle-whatsapp_package"
                            >
                              <input
                                type="radio"
                                id="1391-whatsapp_sms_toggle-whatsapp_package"
                                name="ppom[fields][whatsapp_sms_toggle]"
                                className="radio ppom-input ppom-check-input ppom-option-whatsapp_package ppom-simple-option "
                                defaultValue="חבילת הודעות WhatsApp"
                                data-price
                                data-percent
                                data-optionid="whatsapp_package"
                                data-label="חבילת הודעות WhatsApp"
                                data-title="שנשלח הודעות אוטומטיות למוזמנים שלך?"
                                data-onetime
                                data-taxable
                                data-without_tax
                                data-data_name="whatsapp_sms_toggle"
                                defaultChecked="checked"
                              />
                              <span className="ppom-input-option-label ppom-label-radio">
                                חבילת הודעות WhatsApp
                              </span>
                            </label>
                          </div>
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="1391-whatsapp_sms_toggle-sms_package"
                            >
                              <input
                                type="radio"
                                id="1391-whatsapp_sms_toggle-sms_package"
                                name="ppom[fields][whatsapp_sms_toggle]"
                                className="radio ppom-input ppom-check-input ppom-option-sms_package ppom-simple-option "
                                defaultValue="חבילת הודעות SMS"
                                data-price
                                data-percent
                                data-optionid="sms_package"
                                data-label="חבילת הודעות SMS"
                                data-title="שנשלח הודעות אוטומטיות למוזמנים שלך?"
                                data-onetime
                                data-taxable
                                data-without_tax
                                data-data_name="whatsapp_sms_toggle"
                              />
                              <span className="ppom-input-option-label ppom-label-radio">
                                חבילת הודעות SMS
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div
                        data-data_name="sms_messages1"
                        data-type="radio"
                        data-cond={1}
                        data-cond-total={1}
                        data-cond-bind="All"
                        data-cond-visibility="show"
                        data-cond-input1="whatsapp_sms_toggle"
                        data-cond-val1="חבילת הודעות SMS"
                        data-cond-operator1="is"
                        className="ppom-field-wrapper ppom-col col-md-12 sms_messages1 ppom-wrapper_outer-sms_messages1 ppom-id-16 ppom-c-hide ppom-cond-whatsapp_sms_toggle ppom-locked-whatsapp_sms_toggle"
                      >
                        <div className="form-group ppom-input-sms_messages1">
                          {/* if title of field exist */}
                          <label
                            className="form-control-label"
                            htmlFor="sms_messages1"
                          >
                            שליחת הודעות SMS למוזמנים:
                            <span className="show_required"> *</span>
                          </label>
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="1391-sms_messages1-0_sms"
                            >
                              <input
                                type="radio"
                                id="1391-sms_messages1-0_sms"
                                name="ppom[fields][sms_messages1]"
                                className="radio ppom-input ppom-required ppom-check-input ppom-option-0_sms ppom-simple-option "
                                defaultValue="אשלח את הקישור בעצמי"
                                data-price="0.0001"
                                data-percent
                                data-optionid="0_sms"
                                data-label="אשלח את הקישור בעצמי"
                                data-title="שליחת הודעות SMS למוזמנים:"
                                data-onetime
                                data-taxable
                                data-without_tax
                                data-data_name="sms_messages1"
                              />
                              <span className="ppom-input-option-label ppom-label-radio">
                                אשלח את הקישור בעצמי{" "}
                                <span className="ppom-option-label-price">
                                  [+₪0]
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="1391-sms_messages1-100_sms"
                            >
                              <input
                                type="radio"
                                id="1391-sms_messages1-100_sms"
                                name="ppom[fields][sms_messages1]"
                                className="radio ppom-input ppom-required ppom-check-input ppom-option-100_sms ppom-simple-option "
                                defaultValue="חבילת אירוע עד 100 רשומות"
                                data-price={59}
                                data-percent
                                data-optionid="100_sms"
                                data-label="חבילת אירוע עד 100 רשומות"
                                data-title="שליחת הודעות SMS למוזמנים:"
                                data-onetime
                                data-taxable
                                data-without_tax
                                data-data_name="sms_messages1"
                              />
                              <span className="ppom-input-option-label ppom-label-radio">
                                חבילת אירוע עד 100 רשומות{" "}
                                <span className="ppom-option-label-price">
                                  [+₪59]
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="1391-sms_messages1-200_sms"
                            >
                              <input
                                type="radio"
                                id="1391-sms_messages1-200_sms"
                                name="ppom[fields][sms_messages1]"
                                className="radio ppom-input ppom-required ppom-check-input ppom-option-200_sms ppom-simple-option "
                                defaultValue="חבילת אירוע עד 200 רשומות"
                                data-price={99}
                                data-percent
                                data-optionid="200_sms"
                                data-label="חבילת אירוע עד 200 רשומות"
                                data-title="שליחת הודעות SMS למוזמנים:"
                                data-onetime
                                data-taxable
                                data-without_tax
                                data-data_name="sms_messages1"
                              />
                              <span className="ppom-input-option-label ppom-label-radio">
                                חבילת אירוע עד 200 רשומות{" "}
                                <span className="ppom-option-label-price">
                                  [+₪99]
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="1391-sms_messages1-300_sms"
                            >
                              <input
                                type="radio"
                                id="1391-sms_messages1-300_sms"
                                name="ppom[fields][sms_messages1]"
                                className="radio ppom-input ppom-required ppom-check-input ppom-option-300_sms ppom-simple-option "
                                defaultValue="חבילת אירוע עד 300 רשומות"
                                data-price={119}
                                data-percent
                                data-optionid="300_sms"
                                data-label="חבילת אירוע עד 300 רשומות"
                                data-title="שליחת הודעות SMS למוזמנים:"
                                data-onetime
                                data-taxable
                                data-without_tax
                                data-data_name="sms_messages1"
                              />
                              <span className="ppom-input-option-label ppom-label-radio">
                                חבילת אירוע עד 300 רשומות{" "}
                                <span className="ppom-option-label-price">
                                  [+₪119]
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="1391-sms_messages1-400_sms"
                            >
                              <input
                                type="radio"
                                id="1391-sms_messages1-400_sms"
                                name="ppom[fields][sms_messages1]"
                                className="radio ppom-input ppom-required ppom-check-input ppom-option-400_sms ppom-simple-option "
                                defaultValue="חבילת אירוע עד 400 רשומות"
                                data-price={149}
                                data-percent
                                data-optionid="400_sms"
                                data-label="חבילת אירוע עד 400 רשומות"
                                data-title="שליחת הודעות SMS למוזמנים:"
                                data-onetime
                                data-taxable
                                data-without_tax
                                data-data_name="sms_messages1"
                              />
                              <span className="ppom-input-option-label ppom-label-radio">
                                חבילת אירוע עד 400 רשומות{" "}
                                <span className="ppom-option-label-price">
                                  [+₪149]
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="1391-sms_messages1-500_sms"
                            >
                              <input
                                type="radio"
                                id="1391-sms_messages1-500_sms"
                                name="ppom[fields][sms_messages1]"
                                className="radio ppom-input ppom-required ppom-check-input ppom-option-500_sms ppom-simple-option "
                                defaultValue="חבילת אירוע עד 500 רשומות"
                                data-price={179}
                                data-percent
                                data-optionid="500_sms"
                                data-label="חבילת אירוע עד 500 רשומות"
                                data-title="שליחת הודעות SMS למוזמנים:"
                                data-onetime
                                data-taxable
                                data-without_tax
                                data-data_name="sms_messages1"
                              />
                              <span className="ppom-input-option-label ppom-label-radio">
                                חבילת אירוע עד 500 רשומות{" "}
                                <span className="ppom-option-label-price">
                                  [+₪179]
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="1391-sms_messages1-600_sms"
                            >
                              <input
                                type="radio"
                                id="1391-sms_messages1-600_sms"
                                name="ppom[fields][sms_messages1]"
                                className="radio ppom-input ppom-required ppom-check-input ppom-option-600_sms ppom-simple-option "
                                defaultValue="חבילת אירוע עד 600 רשומות"
                                data-price={199}
                                data-percent
                                data-optionid="600_sms"
                                data-label="חבילת אירוע עד 600 רשומות"
                                data-title="שליחת הודעות SMS למוזמנים:"
                                data-onetime
                                data-taxable
                                data-without_tax
                                data-data_name="sms_messages1"
                              />
                              <span className="ppom-input-option-label ppom-label-radio">
                                חבילת אירוע עד 600 רשומות{" "}
                                <span className="ppom-option-label-price">
                                  [+₪199]
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="1391-sms_messages1-700_sms"
                            >
                              <input
                                type="radio"
                                id="1391-sms_messages1-700_sms"
                                name="ppom[fields][sms_messages1]"
                                className="radio ppom-input ppom-required ppom-check-input ppom-option-700_sms ppom-simple-option "
                                defaultValue="חבילת אירוע עד 700 רשומות"
                                data-price={239}
                                data-percent
                                data-optionid="700_sms"
                                data-label="חבילת אירוע עד 700 רשומות"
                                data-title="שליחת הודעות SMS למוזמנים:"
                                data-onetime
                                data-taxable
                                data-without_tax
                                data-data_name="sms_messages1"
                              />
                              <span className="ppom-input-option-label ppom-label-radio">
                                חבילת אירוע עד 700 רשומות{" "}
                                <span className="ppom-option-label-price">
                                  [+₪239]
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="1391-sms_messages1-800_sms"
                            >
                              <input
                                type="radio"
                                id="1391-sms_messages1-800_sms"
                                name="ppom[fields][sms_messages1]"
                                className="radio ppom-input ppom-required ppom-check-input ppom-option-800_sms ppom-simple-option "
                                defaultValue="חבילת אירוע עד 800 רשומות"
                                data-price={299}
                                data-percent
                                data-optionid="800_sms"
                                data-label="חבילת אירוע עד 800 רשומות"
                                data-title="שליחת הודעות SMS למוזמנים:"
                                data-onetime
                                data-taxable
                                data-without_tax
                                data-data_name="sms_messages1"
                              />
                              <span className="ppom-input-option-label ppom-label-radio">
                                חבילת אירוע עד 800 רשומות{" "}
                                <span className="ppom-option-label-price">
                                  [+₪299]
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="1391-sms_messages1-900_sms"
                            >
                              <input
                                type="radio"
                                id="1391-sms_messages1-900_sms"
                                name="ppom[fields][sms_messages1]"
                                className="radio ppom-input ppom-required ppom-check-input ppom-option-900_sms ppom-simple-option "
                                defaultValue="חבילת אירוע עד 900 רשומות"
                                data-price={319}
                                data-percent
                                data-optionid="900_sms"
                                data-label="חבילת אירוע עד 900 רשומות"
                                data-title="שליחת הודעות SMS למוזמנים:"
                                data-onetime
                                data-taxable
                                data-without_tax
                                data-data_name="sms_messages1"
                              />
                              <span className="ppom-input-option-label ppom-label-radio">
                                חבילת אירוע עד 900 רשומות{" "}
                                <span className="ppom-option-label-price">
                                  [+₪319]
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="1391-sms_messages1-1000_sms"
                            >
                              <input
                                type="radio"
                                id="1391-sms_messages1-1000_sms"
                                name="ppom[fields][sms_messages1]"
                                className="radio ppom-input ppom-required ppom-check-input ppom-option-1000_sms ppom-simple-option "
                                defaultValue="חבילת אירוע עד 1,000 רשומות"
                                data-price={349}
                                data-percent
                                data-optionid="1000_sms"
                                data-label="חבילת אירוע עד 1,000 רשומות"
                                data-title="שליחת הודעות SMS למוזמנים:"
                                data-onetime
                                data-taxable
                                data-without_tax
                                data-data_name="sms_messages1"
                              />
                              <span className="ppom-input-option-label ppom-label-radio">
                                חבילת אירוע עד 1,000 רשומות{" "}
                                <span className="ppom-option-label-price">
                                  [+₪349]
                                </span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div
                        data-data_name="whatsapp_messages1"
                        data-type="radio"
                        data-cond={1}
                        data-cond-total={1}
                        data-cond-bind="All"
                        data-cond-visibility="show"
                        data-cond-input1="whatsapp_sms_toggle"
                        data-cond-val1="חבילת הודעות WhatsApp"
                        data-cond-operator1="is"
                        className="ppom-field-wrapper ppom-col col-md-12 whatsapp_messages1 ppom-wrapper_outer-whatsapp_messages1 ppom-id-16 ppom-c-hide ppom-cond-whatsapp_sms_toggle ppom-locked-whatsapp_sms_toggle"
                      >
                        <div className="form-group ppom-input-whatsapp_messages1">
                          {/* if title of field exist */}
                          <label
                            className="form-control-label"
                            htmlFor="whatsapp_messages1"
                          >
                            שליחת הודעות WhatsApp למוזמנים:
                            <span className="show_required"> *</span>
                          </label>
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="1391-whatsapp_messages1-0_whatsapp"
                            >
                              <input
                                type="radio"
                                id="1391-whatsapp_messages1-0_whatsapp"
                                name="ppom[fields][whatsapp_messages1]"
                                className="radio ppom-input ppom-required ppom-check-input ppom-option-0_whatsapp ppom-simple-option "
                                defaultValue="אשלח את הקישור בעצמי"
                                data-price="0.0001"
                                data-percent
                                data-optionid="0_whatsapp"
                                data-label="אשלח את הקישור בעצמי"
                                data-title="שליחת הודעות WhatsApp למוזמנים:"
                                data-onetime
                                data-taxable
                                data-without_tax
                                data-data_name="whatsapp_messages1"
                              />
                              <span className="ppom-input-option-label ppom-label-radio">
                                אשלח את הקישור בעצמי{" "}
                                <span className="ppom-option-label-price">
                                  [+₪0]
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="1391-whatsapp_messages1-100_whatsapp"
                            >
                              <input
                                type="radio"
                                id="1391-whatsapp_messages1-100_whatsapp"
                                name="ppom[fields][whatsapp_messages1]"
                                className="radio ppom-input ppom-required ppom-check-input ppom-option-100_whatsapp ppom-simple-option "
                                defaultValue="חבילת אירוע עד 100 רשומות"
                                data-price={159}
                                data-percent
                                data-optionid="100_whatsapp"
                                data-label="חבילת אירוע עד 100 רשומות"
                                data-title="שליחת הודעות WhatsApp למוזמנים:"
                                data-onetime
                                data-taxable
                                data-without_tax
                                data-data_name="whatsapp_messages1"
                              />
                              <span className="ppom-input-option-label ppom-label-radio">
                                חבילת אירוע עד 100 רשומות{" "}
                                <span className="ppom-option-label-price">
                                  [+₪159]
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="1391-whatsapp_messages1-200_whatsapp"
                            >
                              <input
                                type="radio"
                                id="1391-whatsapp_messages1-200_whatsapp"
                                name="ppom[fields][whatsapp_messages1]"
                                className="radio ppom-input ppom-required ppom-check-input ppom-option-200_whatsapp ppom-simple-option "
                                defaultValue="חבילת אירוע עד 200 רשומות"
                                data-price={249}
                                data-percent
                                data-optionid="200_whatsapp"
                                data-label="חבילת אירוע עד 200 רשומות"
                                data-title="שליחת הודעות WhatsApp למוזמנים:"
                                data-onetime
                                data-taxable
                                data-without_tax
                                data-data_name="whatsapp_messages1"
                              />
                              <span className="ppom-input-option-label ppom-label-radio">
                                חבילת אירוע עד 200 רשומות{" "}
                                <span className="ppom-option-label-price">
                                  [+₪249]
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="1391-whatsapp_messages1-300_whatsapp"
                            >
                              <input
                                type="radio"
                                id="1391-whatsapp_messages1-300_whatsapp"
                                name="ppom[fields][whatsapp_messages1]"
                                className="radio ppom-input ppom-required ppom-check-input ppom-option-300_whatsapp ppom-simple-option "
                                defaultValue="חבילת אירוע עד 300 רשומות"
                                data-price={319}
                                data-percent
                                data-optionid="300_whatsapp"
                                data-label="חבילת אירוע עד 300 רשומות"
                                data-title="שליחת הודעות WhatsApp למוזמנים:"
                                data-onetime
                                data-taxable
                                data-without_tax
                                data-data_name="whatsapp_messages1"
                              />
                              <span className="ppom-input-option-label ppom-label-radio">
                                חבילת אירוע עד 300 רשומות{" "}
                                <span className="ppom-option-label-price">
                                  [+₪319]
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="1391-whatsapp_messages1-400_whatsapp"
                            >
                              <input
                                type="radio"
                                id="1391-whatsapp_messages1-400_whatsapp"
                                name="ppom[fields][whatsapp_messages1]"
                                className="radio ppom-input ppom-required ppom-check-input ppom-option-400_whatsapp ppom-simple-option "
                                defaultValue="חבילת אירוע עד 400 רשומות"
                                data-price={419}
                                data-percent
                                data-optionid="400_whatsapp"
                                data-label="חבילת אירוע עד 400 רשומות"
                                data-title="שליחת הודעות WhatsApp למוזמנים:"
                                data-onetime
                                data-taxable
                                data-without_tax
                                data-data_name="whatsapp_messages1"
                              />
                              <span className="ppom-input-option-label ppom-label-radio">
                                חבילת אירוע עד 400 רשומות{" "}
                                <span className="ppom-option-label-price">
                                  [+₪419]
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="1391-whatsapp_messages1-500_whatsapp"
                            >
                              <input
                                type="radio"
                                id="1391-whatsapp_messages1-500_whatsapp"
                                name="ppom[fields][whatsapp_messages1]"
                                className="radio ppom-input ppom-required ppom-check-input ppom-option-500_whatsapp ppom-simple-option "
                                defaultValue="חבילת אירוע עד 500 רשומות"
                                data-price={529}
                                data-percent
                                data-optionid="500_whatsapp"
                                data-label="חבילת אירוע עד 500 רשומות"
                                data-title="שליחת הודעות WhatsApp למוזמנים:"
                                data-onetime
                                data-taxable
                                data-without_tax
                                data-data_name="whatsapp_messages1"
                              />
                              <span className="ppom-input-option-label ppom-label-radio">
                                חבילת אירוע עד 500 רשומות{" "}
                                <span className="ppom-option-label-price">
                                  [+₪529]
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="1391-whatsapp_messages1-600_whatsapp"
                            >
                              <input
                                type="radio"
                                id="1391-whatsapp_messages1-600_whatsapp"
                                name="ppom[fields][whatsapp_messages1]"
                                className="radio ppom-input ppom-required ppom-check-input ppom-option-600_whatsapp ppom-simple-option "
                                defaultValue="חבילת אירוע עד 600 רשומות"
                                data-price={639}
                                data-percent
                                data-optionid="600_whatsapp"
                                data-label="חבילת אירוע עד 600 רשומות"
                                data-title="שליחת הודעות WhatsApp למוזמנים:"
                                data-onetime
                                data-taxable
                                data-without_tax
                                data-data_name="whatsapp_messages1"
                              />
                              <span className="ppom-input-option-label ppom-label-radio">
                                חבילת אירוע עד 600 רשומות{" "}
                                <span className="ppom-option-label-price">
                                  [+₪639]
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="1391-whatsapp_messages1-700_whatsapp"
                            >
                              <input
                                type="radio"
                                id="1391-whatsapp_messages1-700_whatsapp"
                                name="ppom[fields][whatsapp_messages1]"
                                className="radio ppom-input ppom-required ppom-check-input ppom-option-700_whatsapp ppom-simple-option "
                                defaultValue="חבילת אירוע עד 700 רשומות"
                                data-price={749}
                                data-percent
                                data-optionid="700_whatsapp"
                                data-label="חבילת אירוע עד 700 רשומות"
                                data-title="שליחת הודעות WhatsApp למוזמנים:"
                                data-onetime
                                data-taxable
                                data-without_tax
                                data-data_name="whatsapp_messages1"
                              />
                              <span className="ppom-input-option-label ppom-label-radio">
                                חבילת אירוע עד 700 רשומות{" "}
                                <span className="ppom-option-label-price">
                                  [+₪749]
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="1391-whatsapp_messages1-800_whatsapp"
                            >
                              <input
                                type="radio"
                                id="1391-whatsapp_messages1-800_whatsapp"
                                name="ppom[fields][whatsapp_messages1]"
                                className="radio ppom-input ppom-required ppom-check-input ppom-option-800_whatsapp ppom-simple-option "
                                defaultValue="חבילת אירוע עד 800 רשומות"
                                data-price={859}
                                data-percent
                                data-optionid="800_whatsapp"
                                data-label="חבילת אירוע עד 800 רשומות"
                                data-title="שליחת הודעות WhatsApp למוזמנים:"
                                data-onetime
                                data-taxable
                                data-without_tax
                                data-data_name="whatsapp_messages1"
                              />
                              <span className="ppom-input-option-label ppom-label-radio">
                                חבילת אירוע עד 800 רשומות{" "}
                                <span className="ppom-option-label-price">
                                  [+₪859]
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="1391-whatsapp_messages1-900_whatsapp"
                            >
                              <input
                                type="radio"
                                id="1391-whatsapp_messages1-900_whatsapp"
                                name="ppom[fields][whatsapp_messages1]"
                                className="radio ppom-input ppom-required ppom-check-input ppom-option-900_whatsapp ppom-simple-option "
                                defaultValue="חבילת אירוע עד 900 רשומות"
                                data-price={969}
                                data-percent
                                data-optionid="900_whatsapp"
                                data-label="חבילת אירוע עד 900 רשומות"
                                data-title="שליחת הודעות WhatsApp למוזמנים:"
                                data-onetime
                                data-taxable
                                data-without_tax
                                data-data_name="whatsapp_messages1"
                              />
                              <span className="ppom-input-option-label ppom-label-radio">
                                חבילת אירוע עד 900 רשומות{" "}
                                <span className="ppom-option-label-price">
                                  [+₪969]
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="1391-whatsapp_messages1-1000_whatsapp"
                            >
                              <input
                                type="radio"
                                id="1391-whatsapp_messages1-1000_whatsapp"
                                name="ppom[fields][whatsapp_messages1]"
                                className="radio ppom-input ppom-required ppom-check-input ppom-option-1000_whatsapp ppom-simple-option "
                                defaultValue="חבילת אירוע עד 1,000 רשומות"
                                data-price={999}
                                data-percent
                                data-optionid="1000_whatsapp"
                                data-label="חבילת אירוע עד 1,000 רשומות"
                                data-title="שליחת הודעות WhatsApp למוזמנים:"
                                data-onetime
                                data-taxable
                                data-without_tax
                                data-data_name="whatsapp_messages1"
                              />
                              <span className="ppom-input-option-label ppom-label-radio">
                                חבילת אירוע עד 1,000 רשומות{" "}
                                <span className="ppom-option-label-price">
                                  [+₪999]
                                </span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div
                        data-data_name="creditcard-gifts"
                        data-type="checkbox"
                        data-cond={1}
                        data-cond-total={2}
                        data-cond-bind="Any"
                        data-cond-visibility="hide"
                        data-cond-input1="sms_messages1"
                        data-cond-val1="שליחת הלינק באופן ידני ללא הגבלה"
                        data-cond-operator1="is"
                        data-cond-input2="whatsapp_messages1"
                        data-cond-val2="שליחת הלינק באופן ידני ללא הגבלה"
                        data-cond-operator2="is"
                        className="ppom-field-wrapper ppom-col col-md-12 creditcard-gifts ppom-wrapper_outer-creditcard-gifts ppom-id-16 ppom-c-show ppom-cond-sms_messages1 ppom-locked-sms_messages1 ppom-cond-whatsapp_messages1 ppom-locked-whatsapp_messages1"
                      >
                        <div className="form-group ppom-input-creditcard-gifts">
                          {/* if title of field exist */}
                          <label
                            className="form-control-label"
                            htmlFor="creditcard-gifts"
                          >
                            תרצה לאפשר לאורחים שלך להשאיר מתנות באשראי?
                            <span className="show_description ppom-input-desc">
                              לכל המוזמנים שלא יאשרו את הגעתם נפתח את האפשרות
                              להשאיר לכם מתנה!
                            </span>
                          </label>
                          <div className="form-check-inline">
                            <label
                              className="form-check-label"
                              htmlFor="1391-creditcard-gifts-add-creditcard-gift"
                            >
                              <input
                                type="checkbox"
                                name="ppom[fields][creditcard-gifts][]"
                                id="1391-creditcard-gifts-add-creditcard-gift"
                                className="checkbox ppom-input ppom-check-input ppom-option-add-creditcard-gift ppom-simple-option "
                                data-optionid="add-creditcard-gift"
                                data-price={59}
                                data-percent
                                data-label="הוספת מתנות באשראי"
                                data-title="תרצה לאפשר לאורחים שלך להשאיר מתנות באשראי?"
                                data-onetime
                                data-taxable
                                data-without_tax
                                data-data_name="creditcard-gifts"
                                defaultValue="הוספת מתנות באשראי"
                              />
                              <span className="ppom-input-option-label ppom-label-checkbox">
                                הוספת מתנות באשראי{" "}
                                <span className="ppom-option-label-price">
                                  [+₪59]
                                </span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div
                        data-data_name="show_more_items"
                        data-type="section"
                        className="ppom-field-wrapper ppom-col col-md-12 show_more_items ppom-wrapper_outer-show_more_items ppom-id-16 ppom-c-show"
                      >
                        <div className="form-group ppom-input-show_more_items">
                          <p>
                            <span className="show-more-items">
                              הצג יותר מ300 מוזמנים
                            </span>
                          </p>
                          <div style={{ clear: "both" }} />
                          <input
                            type="hidden"
                            name="ppom[fields][show_more_items]"
                            id="show_more_items"
                            defaultValue='<span class="show-more-items">הצג יותר מ300 מוזמנים</span>'
                          />
                        </div>
                      </div>
                    </div>{" "}
                    {/* end form-row */}
                    {/* Display price table after fields */}
                    <div
                      id="ppom-price-container"
                      className="ppom-price-container-1391"
                    />
                    <div
                      id="ppom-error-container"
                      className="woocommerce-notices-wrapper"
                    />
                    <div style={{ clear: "both" }} />
                  </div>{" "}
                  {/* end ppom-wrapper */}
                  <div className="quantity">
                    <label
                      className="screen-reader-text"
                      htmlFor="quantity_646c3d803593e"
                    >
                      כמות
                    </label>
                    <input
                      type="button"
                      defaultValue="-"
                      className="qty_button minus"
                    />
                    <input
                      type="number"
                      id="quantity_646c3d803593e"
                      className="input-text qty text"
                      step={1}
                      min={1}
                      max
                      name="quantity"
                      defaultValue={1}
                      title="כמות"
                      size={4}
                      pattern="[0-9]*"
                      inputMode="numeric"
                      aria-labelledby
                    />
                    <input
                      type="button"
                      defaultValue="+"
                      className="qty_button plus"
                    />
                  </div>
                  <button
                    type="submit"
                    name="add-to-cart"
                    value={1391}
                    className="single_add_to_cart_button button alt wp-element-button"
                  >
                    הוספה לסל
                  </button>
                </form>
                <a
                  className="whatsapp-conversation"
                  href="https://wa.me/972549112001?text=היי, יש לי כמה שאלות לגבי ההזמנה הזו  https://attending.co.il/product/02010/"
                >
                  <i className="fab fa-whatsapp" />
                  התייעצות עם נציג
                </a>
              </div>
              <div className="product-video">
                <p className="product-video-text">
                  <b>שימו לב!</b>
                  לא ניתן לצפות בתצוגה מקדימה
                  <br />
                  ההזמנה תתקבל באותו העיצוב עם הפרטים שהוזנו
                </p>
                <span className="hide_br">
                  <br />
                </span>
                <iframe
                  className="vimeo-player-product"
                  src="https://player.vimeo.com/video/672668077?loop=1"
                  frameBorder={0}
                  height={700}
                  width="100%"
                />
                <p className="invitation-id">מס' #1391</p>
                <br />
                <a
                  href="https://api.whatsapp.com/send?text=https://attending.co.il/product/02010/ ?היי, מה דעתך על ההזמנה הזאת"
                  target="_blank"
                >
                  <img src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/11/whatsapp.png" />
                </a>
              </div>
            </div>
          </div>
          <div className="song-popup">
            <div className="overlay close-popup" />
            <div className="container">
              <header>
                <div className="flex-box">
                  <p className="title">בחירת שיר</p>
                  <span className="close close-popup">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14.829"
                      height="14.828"
                      viewBox="0 0 14.829 14.828"
                    >
                      <g
                        id="Group_6854"
                        data-name="Group 6854"
                        transform="translate(-518.868 -162.368)"
                      >
                        <line
                          id="Line_284"
                          data-name="Line 284"
                          x2="16.97"
                          transform="translate(520.282 163.783) rotate(45)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeWidth={2}
                        />
                        <line
                          id="Line_285"
                          data-name="Line 285"
                          x2="16.97"
                          transform="translate(532.282 163.783) rotate(135)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeWidth={2}
                        />
                      </g>
                    </svg>
                  </span>
                </div>
                <div className="filter">
                  <img src="/wp-content/themes/attending/assets/images/search-icon.svg" />
                  <input
                    id="ajaxSearch"
                    className="ajax-search"
                    type="text"
                    placeholder="חיפוש לפי שם השיר או שם האומן"
                  />
                </div>
              </header>
              <ul className="songs">
                <li className="song custom-song">
                  <div className="data custom">
                    {/*span>שיר מותאם אישית</span>*/}
                    <p>
                      לא מצאתם את השיר המבוקש?
                      <br />
                      אנא הזינו את פרטי השיר הרצוי ולחצו על משלוח
                    </p>
                    <div className="meta">
                      <p className="name">
                        <input
                          placeholder="שם השיר"
                          type="text"
                          name="name"
                          defaultValue
                        />
                      </p>
                      <p className="artist">
                        <input
                          placeholder="שם האומן"
                          type="text"
                          name="artist"
                          defaultValue
                        />
                      </p>
                      <p className="time">
                        <input
                          placeholder="זמן התחלה"
                          type="text"
                          name="time"
                          defaultValue
                        />
                      </p>
                    </div>
                  </div>
                  <div className="actions">
                    <span className="select ">משלוח</span>
                  </div>
                </li>
                <div className="cat-filter">
                  {/* <p class="title">סנן לפי קטגוריה:</p> */}
                  <span className="item all active">הכל</span>
                  <span className="item cat_wedding" song-cat="cat_wedding">
                    חתונה
                  </span>
                  <span className="item cat_henna" song-cat="cat_henna">
                    מסיבת חינה
                  </span>
                  <span
                    className="item cat_bar-mitzvah"
                    song-cat="cat_bar-mitzvah"
                  >
                    בר מצווה
                  </span>
                  <span
                    className="item cat_bat-mitzvah"
                    song-cat="cat_bat-mitzvah"
                  >
                    בת מצווה
                  </span>
                  <span
                    className="item cat_circumcision"
                    song-cat="cat_circumcision"
                  >
                    ברית
                  </span>
                  <span className="item cat_brita" song-cat="cat_brita">
                    בריתה
                  </span>
                  <span className="item cat_birthday" song-cat="cat_birthday">
                    יום הולדת
                  </span>
                  <span className="item cat_drawing" song-cat="cat_drawing">
                    מאוירות
                  </span>
                  <span className="item cat_business" song-cat="cat_business">
                    אירוע עסקי
                  </span>
                  <span
                    className="item cat_bachelorette-party"
                    song-cat="cat_bachelorette-party"
                  >
                    מסיבת רווקות
                  </span>
                </div>
                <li className="song cat_bar-mitzvah cat_circumcision cat_brita cat_bat-mitzvah cat_wedding cat_birthday cat_drawing cat_henna cat_bachelorette-party">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/08/ללא-שיר1-150x150.png)",
                      }}
                    ></div>
                    <p className="name">הזמנה ללא שיר</p>
                    <p className="artist" />
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source src type="audio/mpeg" />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/09/רחוק-מכולם-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">רחוק מכולם</p>
                    <p className="artist">עומר אדם</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/09/עומר-אדם-רחוק-מכולם-Omer-Adam-Away-From-Everyone-Rachok-Mikulam.mp3"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/09/אין-יותר-מועדונים-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">אין יותר מועדונים</p>
                    <p className="artist">עדן חסון</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/09/עדן-חסון-אין-יותר-מועדונים-Prod.-By-Stav-Beger-Eden-Hason.mp3"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding cat_bachelorette-party">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/09/מועבט-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">מועבט</p>
                    <p className="artist">עדן בן זקן ואיתי גלו</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/09/עדן-בן-זקן-ואיתי-גלו-מועבט-Eden-Ben-Zaken-Itay-Galo-Moabet.mp3"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding cat_bachelorette-party">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/09/תרקדו-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">תרקדו</p>
                    <p className="artist">עדן בן זקן</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/09/עדן-בן-זקן-תרקדו.mp3"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/09/גידי-גוב-כלים-שלובים-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">כלים שלובים</p>
                    <p className="artist">גידי גוב</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/09/גידי-גוב-כלים-שלובים.mp3"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/09/אהוד_בנאי_וגידי_גוב_הכל_בגלל_האהבה_-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">הכל בגלל האהבה</p>
                    <p className="artist">אהוד בנאי וגידי גוב</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/09/אהוד-בנאי-וגידי-גוב-הכל-בגלל-האהבה.mp3"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_bar-mitzvah cat_bat-mitzvah">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/09/download-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">Limbo</p>
                    <p className="artist">Daddy Yankee</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/09/Daddy-Yankee-Limbo-Video-Oficial.mp3"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/09/Shallow-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">Shallow</p>
                    <p className="artist">Lady Gaga, Bradley Cooper</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/09/Lady-Gaga-Bradley-Cooper-Shallow-from-A-Star-Is-Born-Official-Music-Video.mp3"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/09/The-Chainsmokers-Clser-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">Closer</p>
                    <p className="artist">The Chainsmokers</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/09/The-Chainsmokers-Closer-Official-Video-ft.-Halsey.mp3"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/11/995a3753-40af-4c6d-ada1-37a53833dbf1-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">Closer</p>
                    <p className="artist">Artbat &amp; Whomadewho</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/11/ARTBAT-Closer-feat.-whomadewho.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/11/ממעמקים-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">ממעמקים</p>
                    <p className="artist">עידן רייכל</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/11/Audio-2_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_bar-mitzvah">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/11/Avicii_Wake_Me_Up_Official_Single_Cover-150x150.png)",
                      }}
                    ></div>
                    <p className="name">Wake Me Up </p>
                    <p className="artist">Avicii </p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/11/Avicii-Wake-Me-Up-Official-Video_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/11/71AELyKgG0L._SS500_-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">Marry You </p>
                    <p className="artist">Bruno Mars </p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/11/Bruno-Mars-Marry-You-Official-Lyric-Video_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_bar-mitzvah cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/11/Coldplay_-_A_Sky_Full_of_Stars_Single-150x150.png)",
                      }}
                    ></div>
                    <p className="name">A Sky Full Of Stars </p>
                    <p className="artist">Coldplay </p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/11/Coldplay-A-Sky-Full-Of-Stars-Official-Video_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/11/artworks-000438360624-un7qt8-t500x500-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">Takadoom</p>
                    <p className="artist">Jenia Tarsol &amp; Jinga</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/11/Jenia-Tarsol-Jinga-Takadoom-Original-Mix-MIDH-Premiere_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/11/bf77f7fc-6e55-4985-8485-5ce11e8b4240-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">Ven Pa Ca</p>
                    <p className="artist">Joezi</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/11/Joezi-Ven-Pa-Ca-Original-Mix_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/11/sddefault-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">Under Your Skin</p>
                    <p className="artist">Laroz &amp; Sheera</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/11/Laroz-Under-Your-Skin-Feat-Sheera-Original-Extended-mix-Diynamic_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/11/artworks-000124012514-6ctpn1-t500x500-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">Uptown Funk </p>
                    <p className="artist"> Bruno Mars &amp; Mark Ronson</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/11/Mark-Ronson-Uptown-Funk-Official-Video-ft.-Bruno-Mars_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_bat-mitzvah">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/11/Girls_like_You_cover-150x150.png)",
                      }}
                    ></div>
                    <p className="name">Girls Like You </p>
                    <p className="artist">Maroon 5 &amp; Cardi B </p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/11/Maroon-5-Girls-Like-You-ft.-Cardi-B-Official-Music-Video_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_bar-mitzvah cat_bat-mitzvah cat_wedding cat_birthday">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/11/Meduza_Becky_Hill_and_Goodboys_-_Lose_Control-150x150.png)",
                      }}
                    ></div>
                    <p className="name">Lose Control</p>
                    <p className="artist">
                      MEDUZA &amp; Becky Hill &amp; Goodboys
                    </p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2021/11/MEDUZA-Becky-Hill-Goodboys-Lose-Control-Lyric-Video_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/הזוג_הזה-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">הזוג הזה</p>
                    <p className="artist">מרגי</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/Mergui-הזוג-הזה_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_bar-mitzvah cat_bat-mitzvah cat_wedding cat_birthday">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/artworks-RkmGIr4wNep0-0-t500x500-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">Return To Oz </p>
                    <p className="artist">Monolink (ARTBAT Remix)</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/Monolink-Return-To-Oz-ARTBAT-Remix_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_birthday">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/One_Direction_Story_of_My_Life_Music_Video-821538223-large-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name"> Story of My Life</p>
                    <p className="artist">One Direction</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/One-Direction-Story-of-My-Life_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/ab67616d0000b27328eec1bed4fe754299ea1e96-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name"> Love Tonight </p>
                    <p className="artist">Shouse (David Guetta Remix)</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/Shouse-Love-Tonight-David-Guetta-Remix_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_bar-mitzvah cat_bat-mitzvah cat_wedding cat_birthday">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/ab67616d0000b273fb5e9d1a76acee210c43f609-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">Keep Control</p>
                    <p className="artist">Sono (ARTBAT Remix)</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/Sono-Keep-Control-ARTBAT-Remix_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/Front-הפרויקט-של-עידן-רייכל-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">ממעמקים</p>
                    <p className="artist">הפרויקט של עידן רייכל</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/The-Idan-Raichel-Project-הפרויקט-של-עידן-רייכל-ממעמקים_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_bar-mitzvah cat_circumcision cat_bat-mitzvah cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/ab67616d0000b273b5a56f9d9b25f63110d8a7ec-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">מי לא יבוא</p>
                    <p className="artist">אברהם טל ובניה ברבי </p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/אברהם-טל-ובניה-ברבי-מי-לא-יבוא_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/uri_banai-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">הזמנה לחתונה</p>
                    <p className="artist">אורי בנאי</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/אורי-בנאי-הזמנה-לחתונה_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/61ARjj4a0L._SS500_-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">מכאן ועד הנצח</p>
                    <p className="artist">אייל גולן</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/אייל-גולן-מכאן-ועד-הנצח_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/file-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">חתונת השנה</p>
                    <p className="artist">איתי לוי ואייל גול</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/איתי-לוי-ואייל-גולן-חתונת-השנה_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_circumcision cat_brita">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/414411-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name"> אלוהים נתן לך במתנה</p>
                    <p className="artist">איתן מוסרי</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/איתן-מוסרי-אלוהים-נתן-לך-במתנה_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/info_59966_534673_plbclip_pic-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">מסע (אקוסטי)</p>
                    <p className="artist">אליעד</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/אליעד-מסע-אקוסטי-Eliad-Journey-Acoustic_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/500px-מסע_שיר-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">מסע</p>
                    <p className="artist">אליעד</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/אליעד-מסע_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_bar-mitzvah cat_bat-mitzvah cat_birthday">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/40022932_800_800-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">תמיד חלמתי</p>
                    <p className="artist">אליעד</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/אליעד-תמיד-חלמתי-Eliad-Ive-Always-Dreamed-Official-Video_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/R-14185923-1569514379-1882.jpeg-150x150.webp)",
                      }}
                    ></div>
                    <p className="name"> אהבה ממבט ראשון</p>
                    <p className="artist">אריק איינשטיין ושם טוב לוי</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/אריק-איינשטיין-ושם-טוב-לוי-אהבה-ממבט-ראשון_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/ab67616d0000b27316360cc798a2d42d89aec63b-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">מישהו איתי כאן</p>
                    <p className="artist">בניה ברבי </p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/בניה-ברבי-מישהו-איתי-כאן-קליפ_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/artworks-000502743711-reu55f-t500x500-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">עכשיו הלב פתוח</p>
                    <p className="artist">בניה ברבי </p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/בניה-ברבי-עכשיו-הלב-פתוח_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_bar-mitzvah">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/sagiv_cohenn_c-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">ברכת הדרך</p>
                    <p className="artist"> סגיב כהן ואגם בוחבוט</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/ברכת-הדרך-סגיב-כהן-ואגם-בוחבוט_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/ab67616d0000b273f4d71aa10b867b9e604935c1-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">שם טבעת עליה</p>
                    <p className="artist">דודו אהרון</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/דודו-אהרון-שם-טבעת-עליה_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/MIRS-Image-Handler-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name"> השמחה שלנו</p>
                    <p className="artist">דודו אהרון ואיתי לוי</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/דודו-אהרון-ואיתי-לוי-השמחה-שלנו-Itay-Levi-Dudu-Aharon_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/400x400cc-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">חתונה של השמחות</p>
                    <p className="artist">דודו אהרון ועומרי 69 סגל </p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/דודו-אהרון-מארח-את-עומרי-69-סגל-חתונה-של-השמחות_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/artworks-000602432155-dmp61a-t500x500-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name"> אח שלי מתחתן</p>
                    <p className="artist">דולי ופן עם מוש בן ארי</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/דולי-ופן-עם-מוש-בן-ארי-אח-שלי-מתחתן_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_henna">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/49718310_800_800-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">מחרוזת רונה </p>
                    <p className="artist">הפרויקט של רביבו</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/הפרויקט-של-רביבו-מחרוזת-רונה-The-Revivo-Project-Rona-Medley_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/400x400cc-1-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">אהיה לך אושר </p>
                    <p className="artist">הראל מויאל</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/הראל-מויאל-אהיה-לך-אושר-Harel-Moyal_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_bar-mitzvah">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/R-11616931-1519491893-9522.jpeg-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">הכל עוד לפניי</p>
                    <p className="artist">התקווה 6</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/התקווה-6-הכל-עוד-לפניי_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/yermi-levi2-b-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">היא האחת</p>
                    <p className="artist">ירמי קפלן </p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/ירמי-קפלן-היא-האחת-מתוך-פנסים_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/81xGnT8O0VL._SS500_-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">הלב שלי</p>
                    <p className="artist">ישי ריבו</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/ישי-ריבו-הלב-שלי-Ishay-Ribo-Halev-Sheli_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding cat_birthday">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/91SAYkvcugS._SS500_-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name"> גן חיות </p>
                    <p className="artist">ליאור נרקיס </p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/ליאור-נרקיס-גן-חיות-Prod.-by-Dor-Gal_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_bar-mitzvah cat_circumcision">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/622452_I-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">ברכת הכוהנים</p>
                    <p className="artist">ליאור נרקיס </p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/ליאור-נרקיס-ברכת-הכוהנים-קליפ-רשמי-Lior-Narkis_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/maxresdefault-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name"> בנים וגם בנות</p>
                    <p className="artist">ליאור נרקיס ומושיקו מור</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/ליאור-נרקיס-ומושיקו-מור-–-בנים-וגם-בנות-prod-by-Offir-Cohen-Mash_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/maxresdefault-1-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">מהפכה של שמחה</p>
                    <p className="artist">ליאור נרקיס ועומר אדם</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/ליאור-נרקיס-ועומר-אדם-מהפכה-של-שמחה_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/maxresdefault-2-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">כולנה</p>
                    <p className="artist">מאור אדרי</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/מאור-אדרי-כולנה-maor-edri_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding cat_bachelorette-party">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/artworks-000007440936-xy5f3o-t500x500-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">לכי תספרי לכולם</p>
                    <p className="artist">מאור דניאל</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/מאור-דניאל-לכי-תספרי-לכולם-קליפ-רשמי_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/artworks-TLY1dzdE3zzWU8VW-X0WuEw-t500x500-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">ביחד</p>
                    <p className="artist">מארינה מקסימיליאן וגיא מנטש</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/מארינה-מקסימיליאן-וגיא-מנטש-ביחד-Marina-Maximilian-Guy-Mentesh-Beyachad_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_bar-mitzvah cat_circumcision">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/artworks-000081517320-wgctv5-t500x500-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">ילד של אבא</p>
                    <p className="artist">מוקי</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/מוקי-ילד-של-אבא_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_bar-mitzvah">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/412hJAJbURL._SR600315_PIWhiteStripBottomLeft035_SCLZZZZZZZ_FMpng_BG255255255-150x150.png)",
                      }}
                    ></div>
                    <p className="name">גיבור של אמא</p>
                    <p className="artist">משה פרץ</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/משה-פרץ-גיבור-של-אמא-Moshe-Perez_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/51SwHvgckjL._SR600315_PIWhiteStripBottomLeft035_SCLZZZZZZZ_FMpng_BG255255255-150x150.png)",
                      }}
                    ></div>
                    <p className="name">יפה בלבן</p>
                    <p className="artist">משה פרץ </p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/משה-פרץ-יפה-בלבן_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/maxresdefault-3-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">כוסות ריקות </p>
                    <p className="artist">
                      סטטיק ובן אל תבורי &amp; ליאור נרקיס
                    </p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/סטטיק-ובן-אל-תבורי-ליאור-נרקיס-כוסות-ריקות-Prod-by.-Jordi_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/artworks-000490936233-r2hdz7-t500x500-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name"> יאסו</p>
                    <p className="artist">
                      סטטיק ובן אל תבורי עם עדן בן זקן וסטפן לגר{" "}
                    </p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/סטטיק-ובן-אל-תבורי-עם-עדן-בן-זקן-וסטפן-לגר-יאסו-Prod-By-Jordi_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/600x600bf-60-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">חיים שלי</p>
                    <p className="artist">עדן בן זקן</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/עדן-בן-זקן-חיים-שלי_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/עדן-בן-זקן-תרקדו-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">תרקדו</p>
                    <p className="artist">עדן בן זקן</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/עדן-בן-זקן-תרקדו_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding cat_bachelorette-party">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/artworks-6Hsz4uKgoyfqX66u-RUl0Lg-t500x500-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name"> מאורסת</p>
                    <p className="artist">עדן בן זקן &amp; VIVO</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/עדן-בן-זקן-Vivo-מאורסת_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/artworks-000233960541-kykacv-t500x500-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">פעם בחיים</p>
                    <p className="artist">עומר אדם</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/עומר-אדם-פעם-בחיים_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding cat_birthday">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/maxresdefault-4-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name"> טכנו וג'ין </p>
                    <p className="artist">עידו שוהם</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/עידו-שוהם-טכנו-וגין-Ido-Shoam-Techno-Gin_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/ואם_תבואי_אליי-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">ואם תבואי אליי</p>
                    <p className="artist">עידן רייכל</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/עידן-רייכל-ואם-תבואי-אליי-Idan-Raichel-VeEem-Tavoee-Elay-And-If-You-Will-Come-To-Me_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/86c23ebea05db82b7c3e25344c971691.800x800x1-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">שלמים </p>
                    <p className="artist">עידן רפאל חביב</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/עידן-רפאל-חביב-שלמים-Idan-Rafael-Haviv_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/images-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">מה שהלב בחר</p>
                    <p className="artist">קובי אפללו </p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/קובי-אפללו-מה-שהלב-בחר-קליפ_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_henna">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/artworks-000038017720-zz6iip-t500x500-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">מברוק עליק </p>
                    <p className="artist">רינת בר</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/רינת-בר-מברוק-עליק-Rinar-Bar_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_circumcision cat_brita">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/ab67616d0000b2733dcb38a80ce06d4f188d9868-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name"> מתנות קטנות</p>
                    <p className="artist">רמי קלינשטיין</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/רמי-קלינשטיין-מתנות-קטנות_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/81MScGhXfHL._SS500_-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">שמלה לבנה</p>
                    <p className="artist">רן שפיר </p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/רן-שפיר-שמלה-לבנה_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/maxresdefault-5-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">בראשית עולם</p>
                    <p className="artist">שלומי שבת</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/שלומי-שבת-בראשית-עולם_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_bar-mitzvah">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/R-13814109-1608293663-8444-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">מלך העולם</p>
                    <p className="artist">שלמה ארצי</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/שלמה-ארצי-מלך-העולם_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/ab67616d0000b2737d79b2582a3266abf1ac6ae1-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">שני ילדים בעולם</p>
                    <p className="artist">נתן גושן </p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/שני-ילדים-בעולם-נתן-גושן-Prod-by.-Stav-Beger_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_henna">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/400x400cc-2-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">מחרוזת שירי חינה</p>
                    <p className="artist">שפתיים </p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/שפתיים-מחרוזת-שירי-חינה-Sfataim_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_henna">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/375x375bb-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">מחרוזת </p>
                    <p className="artist">שריף</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/שריף-מחרוזת-חביבי-יעני-יא-בינת-אל-סולטן_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_henna cat_bachelorette-party">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/250px-ישמח_חתני_שרית_חדד_שיר-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">ישמח חתני</p>
                    <p className="artist">שרית חדד</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/שרית-חדד-ישמח-חתני-מתוך-הסרט-ישמח-חתני-Sarit-Hadad_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_henna">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/ללה-פטימה-150x150.png)",
                      }}
                    ></div>
                    <p className="name">ללה פטימה </p>
                    <p className="artist">להקת שפתיים</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/שפתיים-ללה-פטימה-מתוך-הופעה-חיה-Sfataim.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_henna">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/דודו-טסה-פאודה-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name"> La Trib Ani Utruch</p>
                    <p className="artist">ברי סחרוף &amp; דודו טסה</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/ברי-סחרוף-דודו-טסה-La-Trib-Ani-Utruch-لا-تغيب-عني-وتروح.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_birthday">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/יומולדת-ברי-150x150.png)",
                      }}
                    ></div>
                    <p className="name">יומולדת</p>
                    <p className="artist">ברי סחרוף &amp; Infected Mushroom</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/Berry-Sakharof-Birthday-Infected-Mushroom-Remix.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding cat_birthday cat_bachelorette-party">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/monolink-harlem-river-150x150.webp)",
                      }}
                    ></div>
                    <p className="name">Harlem River</p>
                    <p className="artist">Monolink</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/Monolink-Harlem-River-Official-Video.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/עומר-אדם-יעשו-לנו-כבוד-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">יעשו לנו כבוד</p>
                    <p className="artist">עומר אדם</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/עומר-אדם-יעשו-לנו-כבוד.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding cat_henna cat_bachelorette-party">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/מאור-אדרי-אללה-150x150.webp)",
                      }}
                    ></div>
                    <p className="name">אללה מעק</p>
                    <p className="artist">מאור אדרי</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/מאור-אדרי-אללה-מעק-קליפ-רשמי-Maor-Edri-Prod.-By-Stav-Beger.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding cat_birthday">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/נועה-קירל-פעמון-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">פעמון</p>
                    <p className="artist">נועה קירל &amp; איתי גלו</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/נועה-קירל-איתי-גלו-פעמון-Noa-Kirel-X-Itay-Galo-Paamon.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_henna">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/ללה-פטימה-150x150.png)",
                      }}
                    ></div>
                    <p className="name">הטלפון</p>
                    <p className="artist">להקת שפתיים</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/שפתיים-הטלפון-Sfataim.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding cat_birthday cat_bachelorette-party">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/לך-לישון-150x150.png)",
                      }}
                    ></div>
                    <p className="name">לך לישון</p>
                    <p className="artist">אנה זק</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/אנה-זק-לך-לישון-Prod.-By-Jordi.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding cat_henna">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/אביעד-סהר-מחרוזת-מתחתנים-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">מחרוזת מתחתנים</p>
                    <p className="artist">אביעד סהר</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/אביעד-סהר-מחרוזת-״המתחתנים.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/אייל-גולן-נשבע-לך-כאן-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">נשבע לך כאן</p>
                    <p className="artist">אייל גולן</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/אייל-גולן-נשבע-לך-כאן-Eyal-Golan.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/חיים-משה-נשבע-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">נשבע</p>
                    <p className="artist">חיים משה</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/חיים-משה-נשבע.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_bar-mitzvah cat_bat-mitzvah cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/ab67616d0000b273a2335b3d91724f58fbe62198-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">הולכים להשתגע</p>
                    <p className="artist">אייל גולן &amp; משה פרץ</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/אייל-גולן-ומשה-פרץ-הולכים-להשתגע.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/בניה-ברבי-עכשיו-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">עכשיו</p>
                    <p className="artist">בניה ברבי</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/בניה-ברבי-עכשיו.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/בן-סנוף-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">הרגע שלנו</p>
                    <p className="artist">בן סנוף</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/בן-סנוף-הרגע-שלנו.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/דניאלה-ספקטור-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">כל הדברים היפים באמת</p>
                    <p className="artist">דניאלה ספקטור</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/כל-הדברים-היפים-באמת-דניאלה-ספקטור.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/שמש-חנן-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">שמש</p>
                    <p className="artist">חנן בן ארי</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/חנן-בן-ארי-שמש-Hanan-Ben-Ari.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/יובל-דיין-שרק-תחייך-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">שרק תחייך</p>
                    <p className="artist">יובל דיין</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/יובל-דיין-שרק-תחייך.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/יניב-בן-משיח-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">להינשא הלילה</p>
                    <p className="artist">יניב בן משיח</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/יניב-בן-משיח-להינשא-הלילה.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/עידן-חביב-נשמה-שלי-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">נשמה שלי</p>
                    <p className="artist">עידן חביב</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/עידן-חביב-נשמה-שלי.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/עקיבא-פשוטים-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">פשוטים</p>
                    <p className="artist">עקיבא</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/עקיבא-פשוטים.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/יובל-דיין-עד-שתחזור-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">עד שתחזור</p>
                    <p className="artist">יובל דיין</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/יובל-דדיין-עד-שתחזור.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/שוטי-הנבואה-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">אח של סאלים</p>
                    <p className="artist">שוטי הנבואה</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/שוטי-הנבואה-אח-של-סאלים.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_circumcision cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/andre-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">Fada</p>
                    <p className="artist">Andre X Jad</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/Fada-Andre-X-Jad-LIVE-at-Jabal-Al-Arbaeen.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/05/אתניקס-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name">BMW שחורה</p>
                    <p className="artist">אתניקס</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/01/אתניקס-BMW-שחורה-קליפ_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_bar-mitzvah cat_bat-mitzvah cat_birthday">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/08/artworks-bTeyPXLO3rkxfXSN-NhMDXQ-t500x500-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">דובשנייה</p>
                    <p className="artist">שחר סאול מארח את אגם בוחבוט ונורוז</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/08/שחר-סאול-דובשנייה-מארח-את-אגם-בוחבוט-ונורוז-Prod.-by-Ishta-Triangle_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_circumcision">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/08/ded7b0cc-14e4-41d5-a238-42eca5c4a95b-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name"> כשתבוא</p>
                    <p className="artist">עדן בן זקן </p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/08/עדן-בן-זקן-כשתבוא-Eden-Ben-Zaken-Kshetavo_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_bar-mitzvah cat_circumcision">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/08/640x640-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">הילד שביקשתי</p>
                    <p className="artist">סטלוס ואורן חן</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/08/סטלוס-ואורן-חן-הילד-שביקשתי_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_bat-mitzvah cat_birthday cat_bachelorette-party">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/08/299b0706c025a013d37638294b01d367.671x609x1-150x150.jpg)",
                      }}
                    ></div>
                    <p className="name"> מי זאת</p>
                    <p className="artist">אנה זק</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/08/אנה-זק-מי-זאת-Anna-Zak-Mi-Zot_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_birthday">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/08/artworks-000127704929-zblvj5-t500x500-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">It's My Birthday</p>
                    <p className="artist">will.i.am, Cody Wise</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/08/will.i.am-Cody-Wise-Its-My-Birthday-Official-Music-Video_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/08/OneRepublic_Counting_Stars_cover-150x150.png)",
                      }}
                    ></div>
                    <p className="name">Counting Stars</p>
                    <p className="artist">OneRepublic</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/08/OneRepublic-Counting-Stars-Official-Music-Video_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_bar-mitzvah cat_bat-mitzvah cat_wedding cat_birthday">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/08/artworks-fN3QqORmwAecMPcn-my4aDw-t500x500-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">קיוט בוי</p>
                    <p className="artist">נונו </p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/08/Nunu-X-Sagi-Kariv-Cute-Boy-נונו-X-שגיא-קריב-קיוט-בוי_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/08/artworks-D2gbuexFDdqd7Uij-8gzZXQ-t500x500-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">All of Me</p>
                    <p className="artist">John Legend </p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/08/John-Legend-All-of-Me-Official-Video_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_birthday">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/08/info_60468A_208851_plbclip_pic-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">יום הולדת </p>
                    <p className="artist">אליעד</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/08/Eliad-Birthday-אליעד-יום-הולדת_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_brita cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/08/Ed_Sheeran_Perfect_Single_cover-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">Perfect </p>
                    <p className="artist">Ed Sheeran</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/08/Ed-Sheeran-Perfect-Official-Music-Video_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/08/Bryan_Adams-Heaven-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name"> Heaven (פזמון)</p>
                    <p className="artist">Bryan Adams </p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/08/Bryan-Adams-Heaven-Classic-Version_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/08/Bryan_Adams-Heaven-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">Heaven (בית)</p>
                    <p className="artist">Bryan Adams</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/08/Audio-12_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_bar-mitzvah cat_bat-mitzvah cat_wedding cat_birthday cat_henna cat_bachelorette-party">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/09/התקווה-6-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">לחיים</p>
                    <p className="artist">התקווה 6</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/09/התקווה-6-לחיים_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_circumcision cat_brita cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/09/maxresdefault-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name">אהבה ממבט ראשון</p>
                    <p className="artist">עידן עמדי</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/09/עידן-עמדי-אהבה-ממבט-ראשון_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/09/maxresdefault-1-150x150.jpeg)",
                      }}
                    ></div>
                    <p className="name"> אהבת חיי</p>
                    <p className="artist">עידן עמדי</p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/09/עידן-עמדי-אהבת-חיי_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
                <li className="song cat_wedding">
                  <div className="data">
                    <div
                      className="img"
                      style={{
                        background:
                          "url(https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/09/רותם-כהן-קובי-אפללו-150x150.png)",
                      }}
                    ></div>
                    <p className="name">להוריד ממך את העיניים</p>
                    <p className="artist">רותם כהן וקובי אפללו </p>
                  </div>
                  <div className="actions">
                    <span className="play" />
                    <span className="select ">בחירת שיר</span>
                  </div>
                  <audio loop>
                    <source
                      src="https://d3r3au5ai04saj.cloudfront.net/wp-content/uploads/2022/09/רותם-כהן-קובי-אפללו-לא-יכול-להוריד-ממך-את-העיניים_1.wav"
                      type="audio/mpeg"
                    />
                  </audio>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDetails;
