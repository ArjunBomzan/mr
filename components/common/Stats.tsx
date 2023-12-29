/**
 *
 * @param string wrapperClass
 * @returns
 */

export default function Stats({ wrapperClass }: { wrapperClass?: string }) {
    type statsType ={
        title:string,
        number:number
    }

    let data:statsType[] = [
        {
            title: "courses",
            number: 10,
        },
        {
            title: "students",
            number: 10000,
        },
        {
            title: "job placments",
            number: 4500,
        },
        {
            title: "years experience",
            number: 7,
        },
    ];
    return (
        <ul className={wrapperClass}>
            {data.map((el) => {
                return (
                    <li className="">
                        <p className="header-md text-center">{el.number.toLocaleString()} +</p>
                        <p className="title text-center uppercase ">
                            {el.title}
                        </p>{" "}
                        {/* TODO: fixme for proper data. */}
                    </li>
                );
            })}
        </ul>
    );
}
