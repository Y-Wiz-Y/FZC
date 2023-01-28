import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader 
    speed={2}
    width={370}
    height={460}
    viewBox="0 0 370 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    // {...props}
  >
    <rect x="18" y="14" rx="2" ry="2" width="314" height="357" /> 
    <rect x="40" y="387" rx="0" ry="0" width="1" height="1" /> 
    <rect x="17" y="382" rx="0" ry="0" width="120" height="20" /> 
    <rect x="17" y="409" rx="0" ry="0" width="55" height="20" /> 
    <rect x="17" y="435" rx="0" ry="0" width="41" height="20" /> 
    <rect x="41" y="413" rx="0" ry="0" width="2" height="1" />
  </ContentLoader>
)

export default Skeleton