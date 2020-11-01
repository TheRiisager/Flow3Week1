const LiftingStateInput = props => {

    const handleSubmit = event => {
        props.onSubmit(event.target.value);
        event.preventDefault();
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <input type="submit" value={"Submit"} />
            </form>
        </div>
    )
}

export default LiftingStateInput;