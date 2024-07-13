// import sanitizeHtml from 'sanitize-html';


const TrainingSyllabusComponent = (props) => {
    return (
        <div className="accordion-item bg-white border border-gray-200"
            key={props?.syllable?.id}
        >
            <p className="accordion-header mb-0"
                id={`heading${props?.syllable?.id}`}
            >
                <button
                    className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
                    type="button" data-bs-toggle="collapse" aria-expanded="false"
                    data-bs-target={`#collapse${props?.syllable?.id}`}
                    aria-controls={`collapse${props?.syllable?.id}`}
                >
                    {props?.syllable?.heading}
                </button>
            </p>
            <div
                className="accordion-collapse collapse p-4 px-6"
                id={`collapse${props?.syllable?.id}`}
                aria-labelledby={`heading${props?.syllable?.id}`} dangerouslySetInnerHTML={{ __html: (props?.syllable?.description) }} >
            </div>
        </div>
    )
}

export default TrainingSyllabusComponent