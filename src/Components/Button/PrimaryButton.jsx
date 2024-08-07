

const PrimaryButton = ({ text }) => {
    return (
        <>
            <button
                className="bg-tertiary text-black py-2 px-4 rounded-full shadow-md hover:bg-secondary hover:shadow-lg transition ease-in-out transform duration-300 hover:scale-105"
            >
                {text}
            </button>
        </>
    )
}

export default PrimaryButton