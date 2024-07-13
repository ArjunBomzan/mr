let offers = [
    {
        page: 'home'
    },
    {
        page: 'courseDetail',
        course: {
            slug: 'mern-stack'
        }
    }
]

offers = offers.map(el => `/${el.page}${el.course?.slug?(`/${el.course?.slug}`):""}`)
console.log(offers);

/* <Offer match=["/home"]/> */

// const url = 'https://mindrisers.com.np/courses/mern-stack-development-training-in-nepal/?hello=puja';
// const url = 'https://mindrisers.com.np';
// const url = 'https://mindrisers.com.np/courses';
const url = 'http://mindrisers.com.np/courses'
// Create a URL object
const parsedUrl = new URL(url)

// Extract the path
const path = parsedUrl.pathname
console.log({ path })

// Find the start index of the desired substring
// const startIndex = url.indexOf('/courses/mern-stack-development-training-in-nepal');
const startIndex = path.indexOf('/trainings')

// // Find the end index of the desired substring
// const endIndex = url.indexOf('?');

// // Extract the substring
// const extractedString = url.substring(startIndex, endIndex);
// ​

console.log(startIndex)
