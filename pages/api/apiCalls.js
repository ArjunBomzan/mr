import Swal from "sweetalert2";
import axios from 'axios'
export const publicRequest = axios.create({
    baseURL: "https://api.mindrisers.jobrisers.com/blog/api/v1/",
})
export async function coursesApi(props) {
    await publicRequest.get("course/")
        .then(res => { props?.setCourses(res.data) })
        .catch(err => console.log(err))
}
export async function singleBlogApi(props) {
    await publicRequest.get(`singleblog/?search=${props?.slug}`)
        .then(res => {
            props?.setDescription(res.data[0].description)
            props?.setBlog(res.data[0])
        }
        )
        .catch(err => console.log(err))
    await publicRequest.get(`singleblog/`)
        .then(res => {
            console.log(res.data[0])
            props?.setBlogs(res.data)
        }
        )
        .catch(err => console.log(err))
}
export async function techServicesApi(props) {
    await publicRequest.get(`tech/?search=${props?.slug}`)
        .then(res => {
            props?.setDescription(res.data[0].description)
            props?.setBlog(res.data[0])
        }
        )
        .catch(err => console.log(err))
    await publicRequest.get(`tech/`)
        .then(res => {
            console.log(res.data[0])
            props?.setBlogs(res.data)
        }
        )
        .catch(err => console.log(err))
}
export async function coursesCombinesApi(props) {
    await publicRequest.get(`coursecombine/${props?.slug}/`)
        .then(res => {
            props?.setCourse(res.data)
        })
        .catch(err => console.log(err))
}

export async function ContactListApi(props) {
    publicRequest.post("contact/list/", props.data)
        .then(res => {
            props.setSubmiting(false)
            if (res.status == 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Thank you',
                    footer: '<a href="/">Home Page</a>',
                    html: 'We will get back to you soon.',
                    confirmButtonColor: '#3085d6',
                    showCloseButton: true,
                    focusConfirm: false,
                    confirmButtonText:
                        '<i className="fa fa-thumbs-up"></i> View Courses!',
                    confirmButtonAriaLabel: 'Thumbs up, great!',
                }).then((result) => {
                    result.isConfirmed && props?.router.push("/courses");
                })
                props?.reset();
            }
        })
        .catch(err => {
            props.setSubmiting(false)
            console.log(err)
        }
        )

}

export async function DropDownOptions(props) {
    publicRequest.get("course/")
        .then(res => { props?.setCourse(res.data) })
        .catch(err => { console.log(err) })
    publicRequest.get("shedule/")
        .then(res => { props?.setSchedule(res.data) })
        .catch(err => { console.log(err) })
    publicRequest.get("qualification/")
        .then(res => { props?.setQualification(res.data) })
        .catch(err => { console.log(err) })
}
