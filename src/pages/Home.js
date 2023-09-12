import React from "react";
import Layout from "../component/Layout";
import { Box } from "@mui/material";
import {Link} from 'react-router-dom'

import Banner3 from '../stylesheet/pexels-lumn-1028599.jpg'

import '../stylesheet/home.css'

const Home = () => {
  return (
    <Layout>
      <Box>
        <div className="home" style={{backgroundImage:`url(${Banner3})`}}>
          <div className="headerContainer">
            <h1>Food website</h1>
            <p>Best Food In India</p>
            <Link to='/menu'>
            <button>
              ORDER NOW
            </button>
            </Link>
          </div>
        </div>
      </Box>
    </Layout>
  );
};

export default Home;
