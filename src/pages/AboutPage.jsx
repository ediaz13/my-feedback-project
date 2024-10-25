import React from 'react'
import Card from "../components/shared/Card"
import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About Us</h1>
        <p>
          We are a team of developers who love building web applications. This app was created to help you collect feedback from your users.
        </p>
        <p>Version 1.0.0</p>

        <p>
            <Link to="/">Back to home.</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage