// import Swal from "sweetalert2";
import axios from 'axios'
export const publicRequest = axios.create({
    baseURL: 'https://mindrisers.com.np/blog/api/v1/'
})
export async function coursesApi(props) {
    await publicRequest
        .get(`course/?category=${props.ApiType ? props.ApiType : ''}`)
        .then((res) => {
            props?.setCourses(res.data)
        })
        .catch((err) => console.log(err))
}
export async function galleriesApi(props) {
    await publicRequest
        .get('gallery/')
        .then((res) => {
            props?.setGalleries(res.data)
        })
        .catch((err) => console.log(err))
}
export async function homeSuccessStoriesApi(props) {
    await publicRequest
        .get('successstoryhome/')
        .then((res) => {
            props?.setSuccessStories(res.data)
        })
        .catch((err) => console.log(err))
}
export async function singleBlogApi(props) {
    await publicRequest
        .get(`singleblog/?search=${props?.slug}`)
        .then((res) => {
            props?.setDescription(res.data[0].description)
            props?.setBlog(res.data[0])
        })
        .catch((err) => console.log(err))
    await publicRequest
        .get(`singleblog/`)
        .then((res) => {
            props?.setBlogs(res.data)
        })
        .catch((err) => console.log(err))
}
export async function techServicesApi(props) {
    await publicRequest
        .get(`tech/?search=${props?.slug}`)
        .then((res) => {
            props?.setDescription(res.data[0].description)
            props?.setBlog(res.data[0])
        })
        .catch((err) => console.log(err))
    await publicRequest
        .get(`tech/`)
        .then((res) => {
            props?.setBlogs(res.data)
        })
        .catch((err) => console.log(err))
}
export async function coursesCombinesApi(props) {
    await publicRequest
        .get(`coursecombine/${props?.slug}/`)
        .then((res) => {
            props?.setCourse(res.data)
        })
        .catch((err) => console.log(err))
}

export async function ContactListApi(props) {
    publicRequest
        .post('contact/list/', props.data)
        .then((res) => {
            props.setSubmiting(false)
            if (res.status == 200) {
                // Swal.fire({
                //     icon: 'success',
                //     title: 'Thank you',
                //     footer: '<a href="/">Home Page</a>',
                //     html: 'We will get back to you soon.',
                //     confirmButtonColor: '#3085d6',
                //     showCloseButton: true,
                //     focusConfirm: false,
                //     confirmButtonText:
                //         '<i className="fa fa-thumbs-up"></i> View Courses!',
                //     confirmButtonAriaLabel: 'Thumbs up, great!',
                // }).then((result) => {
                //     result.isConfirmed && props?.router.push("/courses");
                // })
                let modal = document.getElementById('admission-modal')
                if (modal) {
                    modal.classList.add('active')
                }
                props?.reset()

                localStorage.setItem('enquirySubmitted', 'true')
            }
        })
        .catch((err) => {
            props.setSubmiting(false)
            console.log(err)
        })
}
export async function AdmissionFormApi(props) {
    publicRequest
        .post('applicationform/', props.data)
        .then((res) => {
            props.setSubmiting(false)
            if (res.status == 201) {
                // Swal.fire({
                //     icon: 'success',
                //     title: 'Thank you',
                //     footer: '<a href="/">Home Page</a>',
                //     html: 'We will get back to you soon.',
                //     confirmButtonColor: '#3085d6',
                //     showCloseButton: true,
                //     focusConfirm: false,
                //     confirmButtonText:
                //         '<i className="fa fa-thumbs-up"></i> View Courses!',
                //     confirmButtonAriaLabel: 'Thumbs up, great!',
                // }).then((result) => {
                //     result.isConfirmed && props?.router.push("/courses");
                // })
                let modal = document.getElementById('admission-modal')
                if (modal) {
                    modal.classList.add('active')
                }
                props?.reset()
                localStorage.setItem('enquirySubmitted', 'true')
            }
        })
        .catch((err) => {
            props.setSubmiting(false)
            console.log(err)
        })
}

export async function DropDownOptions(props) {
    props?.setCourse &&
        publicRequest
            .get('course/')
            .then((res) => {
                props?.setCourse(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

    props?.setShedule &&
        publicRequest
            .get('shedule/')
            .then((res) => {
                props?.setShedule(res.data)
            })
            .catch((err) => {
                console.log('shedule', err)
            })

    props?.setQualification &&
        publicRequest
            .get('qualification/')
            .then((res) => {
                props?.setQualification(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
}
