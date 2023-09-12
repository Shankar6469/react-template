import React from "react";
import Layout from "../component/Layout";
import { Typography, Box } from "@mui/material";
import Background from "../stylesheet/about1.jpg";
import "../stylesheet/About.css"; 

const About = () => {
  return (
    <Layout>
      <Box className="about-container" style={{ backgroundImage: `url(${Background})` }}>
        <div className="about-content">
          <Typography variant="h4" className="about-heading">
            Welcome to [Your Food Delivery Brand]!
          </Typography>
          <div className="about-text">
            <div className="about-section">
              <Typography variant="h4" className="about-subheading">
                About Us
              </Typography>
              <p style={{wordSpacing:'7px'}}>
                At [Your Food Delivery Brand], we're passionate about delivering
                more than just food. We're dedicated to bringing you a culinary
                experience that's filled with flavor, quality, and convenience.
                Our journey began with a simple idea: to make delicious food
                accessible to everyone, right at their doorstep.
              </p>
            </div>
            <div className="about-section">
              <Typography variant="h4" className="about-subheading">
                Our Story
              </Typography>
              <p style={{wordSpacing:'7px'}}>
                [Your Food Delivery Brand] was founded [mention founding year or
                date] by a group of food enthusiasts who shared a common vision -
                to bridge the gap between your cravings and gourmet food. What
                started as a humble kitchen experiment soon evolved into a
                full-fledged food delivery service that's trusted by countless
                households across [your area/city/country].
              </p>
            </div>
            <div className="about-section">
              <Typography variant="h4" className="about-subheading">
                Our Mission
              </Typography>
              <p style={{wordSpacing:'7px'}}>
                Our mission is to create memorable dining experiences that go
                beyond taste. We believe that every meal is an opportunity to
                celebrate life's moments, big or small. Whether it's a busy
                weeknight, a family gathering, or a solo treat-yourself evening,
                we're here to make it special with our diverse menu and
                exceptional service.
              </p>
            </div>
            {/* Rest of your content */}
          </div>
        </div>
      </Box>
    </Layout>
  );
};

export default About;
