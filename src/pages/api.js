import React from "react"
import Layout from "../components/Layout"
import comparison1 from '../images/comparison1.png'
import comparison1output from '../images/comparison1output.png'
import comparison2 from '../images/comparison2.png'
import comparison2output from "../images/comparison2output.png"
import comparison3 from '../images/comparison3.png'
import comparison3output from '../images/comparison3output.png'
import distance1 from "../images/distance1.png"
import distance1output from "../images/distance1output.png"


const Api = () => {
  return (
    <>
      <Layout />
      <div className="blog-post-container">
        <h1>API Reference</h1>
        <div className="blog-post-content">
          <p>
            This page gives an overview of all PDBTools objects, functions and
            methods. All classes and functions exposed in *PDBTools*.
          </p>
          <p>
            PDBTools has its own functions to start computations, compare, and
            analyze data. These general PDBTool functions are described below:
          </p>
          <div className="functionTable">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Function</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>first_comparison(*args, **kwargs)</td>
                  <td>compare two amino acid chains</td>
                </tr>
                <tr>
                  <td>second_comparison(*args, **kwargs)</td>
                  <td>
                    compare two amino acid chains based on the types of amino
                    acids
                  </td>
                </tr>
                <tr>
                  <td>third_comparison(*args, **kwargs)</td>
                  <td>locates the selected amino acid</td>
                </tr>
                <tr>
                  <td>distance_1 (*args, **kwargs)</td>
                  <td>
                    Calculates the distance from one specific amino acid to the
                    substitution site
                  </td>
                </tr>
                <tr>
                  <td>distance_2(*args, **kwargs)</td>
                  <td>
                    Calculates the disance from an amino acid site to a range of
                    substitution sites
                  </td>
                </tr>
                <tr>
                  <td>filter_results(*args)</td>
                  <td>
                    Filters the results returned after the amino acids have been
                    compared.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="functionDefAndExamples">
          <div className="function">
            <span class="functionCall">
              <strong>first_comparison</strong>(*args, **kwargs)
            </span>
            <br />
            <br />
            <p>Compare two amino acid Chains</p>
            <strong>Parameters:</strong>{" "}
            <span class="objectParams">args:object</span>
            <p class="objectParamDef">
              Data that contains an iterable or list-like objects
            </p>
            <span class="objectParamDef objectParams">kwargs</span>
            <p class="objectParamDef">
              Extra keywords to forward to the scheduler function
            </p>
            <h3>Examples</h3>
            <img
              className="functionExampleImg"
              src={comparison1}
              alt="comparison1"
            />
            
            <img
              className="functionExampleImg"
              src={comparison1output}
              alt="comparison1output"
            />
          </div>
          <br />
          <div className="function">
            <span class="functionCall">
              <strong>second_comparison</strong>(*args, **kwargs)
            </span>
            <p>
              Compare two amino acid chains based on the types of amino acids
            </p>
            <strong>Parameters:</strong>{" "}
            <span class="objectParams">args:object</span>
            <p class="objectParamDef">
              Data that contains an iterable or list-like objects
            </p>
            <span class="objectParamDef objectParams">kwargs</span>
            <p class="objectParamDef">
              Extra keywords to forward to the scheduler function
            </p>
            <h3>Examples</h3>
            <img
              className="functionExampleImg"
              src={comparison2}
              alt="comparison2"
            />
            <img
              className="functionExampleImg"
              src={comparison2output}
              alt="comparison2output"
            />
          </div>
          <br />
          <div className="function">
            <span class="functionCall">
              <strong>third_comparison</strong>(*args, **kwargs)
            </span>
            <p>Locates the selected amino acid</p>
            <strong>Parameters</strong>:{" "}
            <span class="objectParams">args:object</span>
            <p class="objectParamDef">
              Data that contains an iterable or list-like objects
            </p>
            <span class="objectParamDef objectParams">kwargs</span>
            <p class="objectParamDef">
              Extra keywords to forward to the scheduler function
            </p>
            <h3>Examples</h3>
            <img
              className="functionExampleImg"
              src={comparison3}
              alt="comparison3"
            />
            <img
              className="functionExampleImg"
              src={comparison3output}
              alt="comparison3output"
            />
          </div>
          <br />
          <div className="function">
            <span class="functionCall">
              <strong>distance_1</strong>(*args, **kwargs)
            </span>
            <p>
              Calculates the distance from one specific amino acid to the
              substitution site
            </p>
            <strong>Parameters:</strong>{" "}
            <span class="objectParams">args:object</span>
            <p class="objectParamDef">
              Data that contains an iterable or list-like objects
            </p>
            <span class="objectParamDef objectParams">kwargs</span>
            <p class="objectParamDef">
              Extra keywords to forward to the scheduler function
            </p>
            <h3>Examples</h3>
            <img
              className="functionExampleImg"
              src={distance1}
              alt="distance1"
            />
            <img
              className="functionExampleImg"
              src={distance1output}
              alt="distance1output"
            />
          </div>
          <br />
          <div className="function">
            <span class="functionCall">
              <strong>distance_2</strong>(*args, **kwargs)
            </span>
            <p>
              Calculates the disance from an amino acid site to a range of
              substitution site
            </p>
            <strong>Parameters:</strong>{" "}
            <span class="objectParams">args:object</span>
            <p class="objectParamDef">
              Data that contains an iterable or list-like objects
            </p>
            <span class="objectParamDef objectParams">kwargs</span>
            <p class="objectParamDef">
              Extra keywords to forward to the scheduler function
            </p>
            <h3>Examples</h3>
          </div>
          <br />
          <div className="function">
            <span class="functionCall">
              <strong>filter_results</strong>(*args)
            </span>
            <p>Filters the results returned after the amino acids have been
            compared</p>
            <strong>Parameters:</strong>{" "}
            <span class="objectParams">args:object</span>
            <p class="objectParamDef">
              Data that contains an iterable or list-like objects
            </p>
            <h3>Examples</h3>
          </div>
          <br/>
        </div>
      </div>
    </>
  )
}

export default Api;
