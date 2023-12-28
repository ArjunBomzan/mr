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
            number: 42,
        },
        {
            title: "students",
            number: 5100,
        },
        {
            title: "job placments",
            number: 1000,
        },
        {
            title: "years experience",
            number: 42,
        },
    ];
    return (
        <ul className={wrapperClass}>
            {data.map((el) => {
                return (
                    <li className="">
                        <p className="header-md text-center">{el.number} +</p>
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
