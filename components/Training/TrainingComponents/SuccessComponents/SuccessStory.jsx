const SuccessStory = (props) => {
  return (
    <div className="block p-6 rounded-lg bg-white card-shadow cursor-pointer m-4 my-10 mb-16 flex-[33%]" >
      <div className="flex gap-4 items-center justify-start">
        <img
          src={`${process.env.REACT_APP_domain}${props?.success_story?.image}`}
          className="rounded-full w-10 h-10 shadow-lg "
          alt="Avatar"
        />
        <div>
          <p className="font-bold"> {props?.success_story?.name}</p>
          <p className="text-red-500">{props?.title}</p>
        </div>
      </div>
      <p className="my-3">Training in Nepal</p>
      <table className="whitespace-nowrap">
        <tbody>
          <tr>
            <td style={{ color: "#353535" }}>College:</td>
            <td className="whitespace-nowrap overflow-hidden max-w-[170px]">{props?.success_story?.college}</td>
          </tr>
          <tr>
            <td style={{ color: "#353535" }}>Faculty:</td>
            <td className="whitespace-nowrap overflow-hidden max-w-[170px]">{props?.success_story?.faculty}</td>
          </tr>
          <tr>
            <td style={{ color: "#353535" }}>Working in:</td>
            <td className="whitespace-nowrap overflow-hidden max-w-[170px]">{props?.success_story?.working_at}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SuccessStory