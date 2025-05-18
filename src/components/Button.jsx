const button = (
    {label,
    iconURL}
) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat leading-none rounded-full bg-coral-red text-white border-coral-red">
        {label} 
        <img 
        src={iconURL}
        alt="Icon"
         />

    </button>
  )
}

export default button