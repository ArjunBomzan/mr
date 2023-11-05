import React from 'react'


export async function getStaticProps() {

    let date = new Date();
    return {
        props: { data: JSON.stringify(date) },
        // revalidate: 60 * 60 * 24 * 1 // this may cause server unndecessary loads, since the data merely gets changed. but it is definately better than SSR ?  SSR doesnot trigger the html and store it  while ISR does -> ISR > SSR cause SSR will also create load on server since, every time, the server needs to create html and send as response while ISR will simply cache it and set it. 
        revalidate: 60 * 1  // this may cause server unndecessary loads, since the data merely gets changed. but it is definately better than SSR ?  SSR doesnot trigger the html and store it  while ISR does -> ISR > SSR cause SSR will also create load on server since, every time, the server needs to create html and send as response while ISR will simply cache it and set it. 


    }
}



export default function index({ data }) {
    return (
        <>

            <div>time: {data}</div>
            <div>index</div>
        </>
    )
}
