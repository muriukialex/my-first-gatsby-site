import * as React from "react"

import Layout from "./layout"

import { StaticImage } from "gatsby-plugin-image"

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

      <StaticImage
        alt="me in a picture"
        src="../images/alex.jpeg"
      ></StaticImage>
    </Layout>
  )
}

export default AboutPage
