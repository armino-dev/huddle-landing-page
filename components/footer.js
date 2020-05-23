export default class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <footer>

                <div className="row">
                    <div className="col">
                        <h2>NEWSLETTER</h2>
                        <p>To receive tips on how to grow your community, sign up to our weekly newsletter.
                    <br />We’ll never send you spam or pass on your email address.
                    </p>
                        <form>
                            <input type="email" name="email" id="email" />
                            <button className="btn btn-normal btn-big">Subscribe</button>
                        </form>
                    </div>
                    <div className="col">
                        <div className="container">
                            <img className="logo" src="/images/logo.svg" alt="Logo" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
                            </p>
                            <ul>
                                <li><img src="/images/icon-phone.svg" alt="Phone icon" /> <span>Phone: +1-543-123-4567</span></li>
                                <li><img src="/images/icon-email.svg" alt="Email icon" /> <span>example@huddle.com</span></li>
                            </ul>
                        </div>
                        <div className="social-media">
                            <i className="fa fa-facebook"></i> <i className="fa fa-instagram"></i> <i className="fa fa-twitter"></i>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="attribution">
                        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                    Coded by <a href="https://github.com/armino-dev" title="See Armino's profile on GitHub" target="_blank">Armino</a>.
                </div>
                </div>

            </footer>
        )
    }
}