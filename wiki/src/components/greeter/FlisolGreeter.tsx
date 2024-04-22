import "@/styles/flisol-greeter.css"

const FlisolGreeter = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <section className="flisol-logo  flex items-end">
            <h1>
                FLISoL {year}
            </h1>
        </section>
    )
}

export default FlisolGreeter