



export const Header = ({fontSize, children}: any) => {
    return (
        <div className='unbounded text-center' style={{fontSize}}>
            {children}
        </div>
    )
}


export default Header