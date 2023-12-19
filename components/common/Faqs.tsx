import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";


type faqType = { title: string | any, content: string, }


function FaqContent({ el, openedIndexes, index, faqContentStyle }: { el: faqType, openedIndexes: number[], index: number, faqContentStyle?: string }) {

    const myref = useRef(null)
    const myrefChild = useRef(null)

    useEffect(() => {

        const elementHeightChild = myrefChild.current.clientHeight;

        if (openedIndexes.includes(index)) {
            // myref.current.style.maxHeight = `${(elementHeightChild + 132)} px` // 20 for padding
            let totalHeight = elementHeightChild + 20
            myref.current.style.maxHeight = `${totalHeight}px` // 20 for padding
        } else {
            myref.current.style.maxHeight = `${0}px`
        }

    }, [openedIndexes.length])

    return <>
        <div
            ref={myref}
            className={classNames(
                "max-h-0 overflow-hidden duration-[.3s] transition-all ",
            )}>
            <p
                ref={myrefChild}
                className={faqContentStyle || "border border-t-0 border-border p-5"}>
                {/* conditions for innerHTML  */}
                {el.content}
            </p>
        </div></>
}


/**
 * 
 * @param {faqType[]} faqs 
 * @returns 
 */

export default function Faqs({
    faqs,
    faqTitleStyle,
    faqTitleOpenedStyle,
    faqContentStyle,
    closedIcon,
    opendedIcon,
}: {
    faqs: faqType[],
    faqTitleStyle?: string,
    faqTitleOpenedStyle?: string,
    faqContentStyle?: string,
    faqContent?: string,
    closedIcon?: any,
    opendedIcon?: any,
}) {

    const [openedIndexes, setOpenedIndexes] = useState([0])


    faqTitleStyle = faqTitleStyle || "capitalize border border-border p-5   flex justify-between items-center transition-all duration-[.3s] rounded-xl"
    faqTitleOpenedStyle = faqTitleOpenedStyle || "rounded-bl-0 rounded-br-0"

    closedIcon = closedIcon || <FaChevronDown />
    opendedIcon = opendedIcon || <FaChevronDown />

    return (
        <ul>
            {
                faqs.map((el, index) => {
                    return <li className="mb-3 md:mb-5">
                        <div
                            onClick={() => {
                                let temp = [...openedIndexes]
                                if (!temp.includes(index)) {
                                    temp.push(index)
                                }
                                else {
                                    temp = temp.filter(el => el !== index)
                                }
                                setOpenedIndexes(temp)
                            }}
                            className={classNames(
                                "select-none",
                                faqTitleStyle,
                                { [faqTitleOpenedStyle]: openedIndexes.includes(index) }
                            )}>

                            {el.title}
                            
                            <span className={classNames(
                                " transition-all duration-100  ",
                                { "rotate-180": openedIndexes.includes(index) }
                            )}>
                                {
                                    openedIndexes.includes(index)
                                        ?
                                        opendedIcon
                                        :
                                        closedIcon
                                }
                            </span>
                        </div>
                        <FaqContent faqContentStyle={faqContentStyle} el={el} openedIndexes={openedIndexes} index={index} />
                    </li>
                })
            }
        </ul>
    )
}