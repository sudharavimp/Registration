import React from 'react'
import { Button } from 'reactstrap';
const HomeBody= () => {

	const styleObj = {
		fontSize: 20
	
	}
	 
  return (
      <div>
    <section id="banner">
				
	<div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">About Us</h1>
        <p class="col-md-8 fs-4" style={styleObj}>This website seeks to make it convenient for people in Singapore to plan healthier lifestyles and promote usage of fitness facilities</p>
     
      </div>
    </div>
				</section>
				
                <section className="wrapper style1 ">
					<div className="container">
						<div className="row gtr-200 ">
							<section className="col-4 col-12-narrower">
								<div className="box highlight">
									
									<h3>Did you Know?</h3>
									<p>Exercise is a powerful medicine. Exercise is an important part of a healthy lifestyle. Exercise prevents health problems, builds strength, boosts energy, and can help you reduce stress. It can also help you maintain a healthy body weight and curb your appetite.Keep a record of your workouts to track your progress. </p>
								</div>
							</section>
							<section className="col-4 col-12-narrower">
								<div className="box highlight">
									<h3>Did you Know?</h3>
									<p>Everyone can benefit from physical activity. For most people, it is possible to begin exercising on your own at a slow pace. If you have never exercised before, start with a 10-minute period of light exercise. A brisk walk every day is a good first exercise. Slowly increase how hard you exercise and for how long.</p>
								</div>
							</section>
							<section className="col-4 col-12-narrower">
								<div className="box highlight">
									<h3>Did you Know?</h3>
									<p>Working out with a friend is more fun than working out alone. An exercise buddy can keep you motivated when you don’t feel like exercising. You will be much less likely to cancel exercise if you know someone is counting on you to be there. And when you reach your exercise goals, you'll have someone to celebrate with.</p>
								</div>
							</section>
						</div>
					</div>
				</section>

                </div>
                
  )
  }

export default HomeBody