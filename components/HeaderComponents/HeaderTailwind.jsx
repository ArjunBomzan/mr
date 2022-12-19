import React from 'react'
import dynamic from 'next/dynamic'
import HeaderButtonRight from './HeaderButtonRight'
import HeaderLeft from './HeaderLeft'
// import HeaderTabs from './HeaderTabs'

const HeaderTailwind = () => {
    const HeaderTabs = dynamic(
        () => import('./HeaderTabs'),
        { ssr: false }
    )
    return (
        <nav class="sticky-top bg-white w-full flex flex-wrap items-center justify-between py-4 shadow-lg navbar navbar-expand-lg navbar-light pt-4 pb-4 px-8 sm:px-12 md:px-14 lg:px-18  duration-500 z-50">
            <div class="container-fluid w-full flex flex-wrap items-center justify-between">
                <HeaderLeft />
                <button class="navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 pr-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                        class="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor"
                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                        </path>
                    </svg>
                </button>
                <div class="collapse navbar-collapse flex flex-grow items-center justify-end mt-5 lg:mt-0" id="navbarSupportedContent">
                    <HeaderTabs />
                </div>

            </div>
        </nav>
    )
}

export default HeaderTailwind