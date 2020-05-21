import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import Card from '../components/card'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Frontend Mentor | Huddle Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>   
        <h1>Build The Community Your Fans Will Love</h1>
        <p>Huddle re-imagines the way we build communities. You have a voice, but so does 
your audience. Create connections with your users as you engage in genuine discussion.</p>
        <a href="#" className="btn btn-normal btn-rounded">Get Started For Free</a>
        <div className="container screen-mockups">
          <img src="/images/screen-mockups.svg" alt="Screen mockups" />
        </div>
        <div className="container">
          <Card logo="/images/icon-communities.svg" stats="1.4k+" text="Communities Formed" />
          <Card logo="/images/icon-messages.svg" stats="2.7m+" text="Messages Sent" />
        </div>
        <div className="container top-section-1">
          <img src="/images/illustration-grow-together.svg" alt="Grow Together Illustration" />
          <h2>Grow Together</h2>
          <p>Generate meaningful discussions with your audience and build a strong, loyal community. 
            Think of the insightful conversations you miss out on with a feedback form. 
          </p>
        </div>
        <div className="container flowing-conversation">
          <img src="/images/illustration-flowing-conversation.svg" alt="Flowing Conversation Illustration" />
          <h2>Flowing Conversations</h2>
          <p>You wouldn't paginate a conversation in real life, so why do it online? 
            Our threads have just-in-time loading for a more natural flow.
          </p>
        </div>
        <div className="container top-section-2">
          <img src="/images/illustration-your-users.svg" alt="Your Users Illustration" />
          <h2>Your Users</h2>
          <p>It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
once signed in to your app, your users can start chatting immediately.</p>
        </div>
        <div className="container community">
          <h2>Ready To Build Your Community?</h2>
          <a href="#" className="btn btn-normal btn-rounded">Get Started For Free</a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
