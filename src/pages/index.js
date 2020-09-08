import React from "react"
import Layout from "../components/Layout/Layout.js"
export default ({ location }) => {
  const path = location.pathname ? location.pathname : "";
  return <Layout path={path}></Layout>;
}
