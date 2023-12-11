import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://cdn.pixabay.com/photo/2020/05/31/16/48/privacy-policy-5243225_640.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
         <p><b>Types of Information Collected: </b> Explanation of the types of personal information collected, such as name, address, email, payment information, etc.</p>
         <p><b>Purpose of Data Collection:  </b> Clarification on why the site collects this information. This could be for order fulfillment, customer support, marketing, or other legitimate business purposes.</p>
         <p><b>Collection Methods: </b> How the website gathers this information (cookies, forms, account creation, etc.) and whether third parties collect any data through the site.</p>
         <p><b> Data Usage: </b> How the collected data is used, stored, and processed. It could involve details about data security measures, encryption, and storage duration.</p>
         <p><b> Third-Party Sharing:</b> Disclosure about sharing data with third parties (like payment processors, shipping companies, or marketing partners) and reasons behind it.</p>
         <p><b> Policy Updates: </b> A statement explaining that the privacy policy may change and how users will be notified of any updates.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;