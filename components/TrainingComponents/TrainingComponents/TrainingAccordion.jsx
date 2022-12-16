import React from 'react'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

const TrainingAccordion = (props) => {
    console.log(props?.syllabus)
    return (
        <div class="accordion-tabs">
            {
                props?.syllabus?.map((syllable) => {
                    return (
                        <div class="accordion-tab" key={syllable.id}>
                            <input type="checkbox" id={syllable.id} />
                            <label class="accordion-tab-label" htmlFor={syllable.id}>{syllable.heading}</label>
                            <div class="accordion-tab-content">
                                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} >
                                    {syllable?.description}
                                </ReactMarkdown>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TrainingAccordion