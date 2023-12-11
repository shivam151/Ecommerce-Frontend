import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://media.istockphoto.com/id/1286378180/vector/website-information-concept.jpg?s=612x612&w=0&k=20&c=6v9Hcbp0zp5itIPIywobPQF13YsHIQ4j_srF5VbQusY="
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-5">
          <p className="text-justify mt-2">
            Welcome to <b>[Your E-commerce Site]!</b> 
            Our story began with a simple belief: that shopping for your favorite products should be convenient, affordable, and enjoyable. What started as a vision has now evolved into a comprehensive marketplace where you can discover a diverse range of products, from everyday essentials to unique finds.

            We prioritize quality, reliability, and customer satisfaction above all else. Our team works tirelessly to curate a collection of products from trusted suppliers and brands, ensuring that every item you find on our platform meets our stringent standards.

            But we're not just here to sell products. We're here to build connections and foster a community. We understand the importance of personal touches and human connections in the digital age. That's why we strive to create a platform where you feel valued, heard, and part of something bigger.

            Join us on this journey as we continue to grow and expand our offerings, always with your needs and preferences at the forefront. Thank you for choosing [Your E-commerce Site]—your support means the world to us.

            Happy shopping!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;