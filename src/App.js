import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'
import Description from './support/description'

import ImageCard from './components/ImageCard'
import Section from './components/Section'
import Header from './components/Header'
import { EmailLink, Link } from './components/Links'

import './scss/ck-pattern-styles.scss';
import './app.scss';


const peopleList = [
	{
		img: "https://placeimg.com/400/400/people",
		name: "A. Person", website: "https://www.aperson.com",
		email: "aperson@example.com"
	},

	{
		img: "https://placeimg.com/450/450/people",
		name: "B. Someone", website: "https://www.bsomeone.com",
		email: "bsomeone@example.com"
	},

	{
		img: "https://placeimg.com/300/300/people",
		name: "C. Persona", website: "https://www.cpersona.com",
		email: "cpersona@example.com"
	}
]


class PatternLibrary extends React.Component {

	constructor(...args) {
		super(...args)

		this.state = { activeCode: `react` }
	}

	getChildContext() {
		return {
			activeCode: this.state.activeCode,
			setActiveCode: activeCode => this.setState({ activeCode }),
		}
	}

	render() {
		return (
			<div className="style-guide">
				<h1>Create Kit Patterns</h1>
				<div class="example">
					<Description title="Simple Image Card">
						<p>A simple &lt;ImageCard /&gt; takes the url to an image and alternate text.</p>
					</Description>
					<Example>
						<ImageCard imgSrc="https://picsum.photos/300" imgAlt="placeholder image" />
					</Example>
				</div>

				<div class="example">
					<Description title="Horizontal Image Card With Additional Content">
						<p>Any type of content you inser an &lt;ImageCard /&gt;, will be placed  to the right of the image.</p>
					</Description>
					<Example>
						<ImageCard imgSrc="https://picsum.photos/300" imgAlt="placeholder image">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
								labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
								laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</ImageCard>
					</Example>
				</div>

				<div class="example">
					<Description title="Vertical Image Card With Additional Content">
						<p>If you add the prop of "vertical" to an &lt;ImageCard /&gt; content will stack below the image.</p>
					</Description>

					<Example>
						<ImageCard imgSrc="https://picsum.photos/550" imgAlt="placeholder image" vertical>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
								labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
								laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</ImageCard>
					</Example>
				</div>


				<div class="example">
					<Description title="Section">
						<p>The &lt;Section /&gt; component takes a "title" prop, which it sets to an &lt;h2&gt;,
								and it wraps this title and any additional content within &lt;Section /&gt; in an HTML &lt;section&gt; tag.
						</p>
						<p>This component also takes a "styleName" prop, which accepts one or more CSS class name.
							In this case the classes add padding to the section and set a dark color scheme.
						</p>
					</Description>
					<Example>
						<Section title="Section Title" styleName="ck-box-padding ck-dark-mode">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
								labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
								laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</Section>
					</Example>
				</div>

				<div class="example">
					<Description title="Header With &lt;p&gt; and &lt;h1&gt; Title">
						<p>The &lt;Header /&gt; component takes a "title". If you add a "home" prop the title will be set
								as an &lt;h1&gt;, without "home" it will be a &lt;p&gt;.
								The appearence of the title will be the same either way, only the markup will change.
						</p>
						<p>This component also takes a "styleName" attribute, which accepts one or more CSS class name.
							In this case the classes add padding.</p>
						<p>You can also include a tagline below the title.</p>
					</Description>

					<Example>
						<Header title="Header &lt;p&gt; Title" 
							styleName="ck-box-padding"
							tagline="A fancy tagline example"
						/>

						<Header home title="Header &lt;h1&gt; Title" 
							styleName="ck-box-padding"
							tagline="A fancy tagline example"
						/>
					</Example>
				</div>

				<div class="example">
					<Description title="Links">
						<p>Both &lt;Link /&gt; and &lt;EmailLink /&gt; take the props "linkText" which sets the text link,
							"title" which gives an optional title to the link, and "blockDisplay" which makes the link into a block element instead of an inline element.
							The difference between these is that &lt;Link /&gt; takes "linkAddress" which sets the url of the link, while &lt;EmailLink /&gt; 
							takes "emailAddress" which sets the email to which the user can send a message. Furthemore, &lt;EmailLink /&gt; adds an envelope  icon at 
							the end of the link.

						</p>
					</Description>

					<Example>
						<Link linkText="Example Text Link" title="An existing placeholder page" linkAddress="https://example.com/" blockDisplay />
						<EmailLink linkText="emaillink@example.com" title="An example email placeholder" emailAddress="example@example.com" blockDisplay />
					</Example>
				</div>

				<div class="example">
					<Description title="Putting It All Together">
						<p>This example puts all the patterns above together. In addition it introduces the .ck-three-card-list 
							class which sets list into a grid of 3 columns on devices larger than 48em.
						</p>
					</Description>

					<Example>
						<Section title="Meet Our Team" styleName="ck-box-padding">
							<ul className="ck-three-card-list">
								{peopleList.map((person, id) => {
									const { img, name, email, website } = person;
									const websiteName = website.replace(/^https?:\/\//, '');

									return (
										<li key={id}>
											<ImageCard imgSrc={img} imgAlt={name} vertical>
												<h3>{name}</h3>
												<Link linkText={websiteName} linkAddress={website} blockDisplay />
												<EmailLink linkText={email} emailAddress={email} blockDisplay />
											</ImageCard>
										</li>)
								})}
							</ul>
						</Section>
					</Example>
				</div>
			</div>
		)
	}
}

PatternLibrary.childContextTypes = {
	activeCode: PropTypes.string,
	setActiveCode: PropTypes.func,
}

export default PatternLibrary;
