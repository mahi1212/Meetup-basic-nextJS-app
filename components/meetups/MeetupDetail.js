
const MeetupDetail = (props) => {
    return (
        <div style={{textAlign: 'center'}}>
            <img src={props.image} alt={props.title}></img>
            <h2>{props.title}</h2>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
    );
};

export default MeetupDetail;