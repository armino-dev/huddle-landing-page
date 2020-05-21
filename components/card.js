export default class Card extends React.Component {
    constructor(props) {
        super(props)        
    }

    render() {
        const {logo, stats, text} = this.props
        return (
            <div className="card">
                <img src={logo} alt={stats + text} />
                <div className="stats">{stats}</div>
                <div className="text">{text}</div>
            </div>
        )
    }

}