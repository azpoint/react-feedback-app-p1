import { Link } from "react-router-dom";
import Card from "../components/shared/Card";


function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>React App to leave feeedback for a product or service.</p>
            <p>Version: 1.0.0</p>

            <a href="https://github.com/bradtraversy/feedback-app" target="_blank">
                From Traversy Media Course
            </a>

            <p>
                <Link to="/">Back to Home</Link>
            </p>
        </div>
        
    </Card>
  )
}

export default AboutPage