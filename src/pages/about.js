import * as React from "react"
import { Link } from "gatsby"

import Layout from "./layout"

const AboutPage = () => {
  const hobbies = ["swimming", "dancing", "bike riding"]
  return (
    <Layout pageTitle="About">
      <p>Am Alex :-) </p>

      <h4>Here's a list of what I like to do</h4>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </Layout>
  )
}

export default AboutPage
