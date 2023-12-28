// import sanitizeHtml from 'sanitize-html';


const TrainingAccordion = (props) => {
    return (
        <div className="accordion-tabs">
            {
                props?.syllabus?.map((syllable) => {
                    return (
                        <div className="accordion-tab" key={syllable.id}>
                            <input type="checkbox" id={syllable.id} />
                            <label className="accordion-tab-label" htmlFor={syllable.id}><p>{syllable.heading}</p></label>
                            <div className="accordion-tab-content text-left" dangerouslySetInnerHTML={{ __html: (syllable?.description) }}>
                                {/* <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} >
                                    {syllable?.description}
                                </ReactMarkdown> */}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TrainingAccordion