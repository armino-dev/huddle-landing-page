import React from 'react'
export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header>
                <h1><img id="logo" src="/images/logo.svg" alt="Huddle Logo" /></h1>
                <a href="#" className="btn btn-outline btn-rounded" id="btn-try-it-free">Try It Free</a>
            </header>
        )
    }
}