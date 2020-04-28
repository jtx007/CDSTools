import React from "react"
import Layout from "../components/Layout"
import megamanGIF from '../images/megaman_gif.gif'
const Home = () => {
  return (
    <>
      <Layout />
      <div className="blog-post-container animated fadeInLeft">
        <div className="blog-post-content">
          <h1>CDS Tools</h1>
          <p>
            CDSTools is a freely available package of tools for biological
            computation written in Python by a team of boolers.
          </p>
          <p>
            The collaborative effort of the boolers to develop the Python
            package and applications addresses the needs of current and future
            work in structural biology using informatics.
          </p>
          <p>
            The source code of the project is available on {" "}
            <a className="externalLink" href="https://github.com/oshahzada98/CDSTools">Github</a>. The
            package is easily downloadable and compatible with all types of
            machines.
          </p>
          <img className="megamanGIF" src={megamanGIF} alt="megamanGIF" />
        </div>
      </div>
    </>
  )
}

export default Home
