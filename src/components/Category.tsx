

function Category() {
  return (
    <div  className="flex flex-wrap  flex-row bg-slate-600 p-4 w-60 h-full rounded-lg">
        <div className="flex flex-col w-full margin-auto">
            <div className="flex justify-center items-center">
            <h1 className="text-2xl text-white font-semibold underline">Categories</h1>
            </div>

            <div className="flex flex-col justfy-center items-center mt-5 font-mono">
                <a href="#" className="text-white p-4">Technology</a>
                <a href="#" className="text-white p-4">Science</a>
                <a href="#" className="text-white p-4">Sports</a>
                <a href="#" className="text-white p-4">Health</a>
                <a href="#" className="text-white p-4">Entertainment</a>
                <a href="#" className="text-white p-4">Business</a>
                <a href="#" className="text-white p-4">General</a>
        </div>
    </div>
    </div>
  )
}

export default Category
