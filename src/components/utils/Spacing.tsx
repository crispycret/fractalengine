

export const Spacing = ({count}: any) => {

    const elements = []
    for (let i=0; i < count; i++) {
        elements.push(
            <div className='py-5 bg-transparent'></div>
        )
    }

    return <>
        { elements }
    </>
}



export default Spacing