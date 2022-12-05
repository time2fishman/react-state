const ClickCounter = (props) => {

    return (
        // Add the onClick and give it a callback function
        <button
            onClick={() => {
                props.onClick((prev) => prev + 1)
            }}
        >
            Click me
        </button>
    );
};

export default ClickCounter;