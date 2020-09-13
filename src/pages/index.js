import React from "react"
import Layout from "../components/Layout/Layout.js"
import { HexSVG } from '../components/SVG/HexSVG.js';

export default ({ location }) => {
  const path = location.pathname ? location.pathname : "";
  return (
    <Layout path={path}>
      <HexSVG />
      <HexSVG />
    </Layout>
  );
}
