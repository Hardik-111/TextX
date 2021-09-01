


function Alert(props) {
    return (
        <div style={{height : '40px'}}> 
        {props.alert && <div className="alert alert- warning alert-dismissable fade show" role="alert">
        <strong>{props.alert.type}</strong>: <strong> {props.alert.msg}</strong>
        </div>}
        </div>
    )
}
export default Alert