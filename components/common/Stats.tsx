
/**
 * 
 * @param string wrapperClass  
 * @returns 
 */

export default function Stats( {wrapperClass}:{wrapperClass?:string}) {
    return (
        <ul className={wrapperClass}>
            {
                [1, 2, 3, 4].map(el => {
                    return <li className="">
                        <p className="header-md text-center">42 +</p>
                        <p className="uppercase title text-center">Courses</p>  {/* TODO: fixme for proper data. */}
                    </li>
                })
            }
        </ul>
    )
}