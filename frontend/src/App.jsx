import { useState , useEffect } from 'react'
import { CiStar } from "react-icons/ci";
import { FaTasks } from "react-icons/fa";
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
   
      const res1= fetch()
      console.log(res1.data)
     
   
  }, [data])
  const fetch=async()=>{
     try {
            const res= await axios.get('http://Metricoid- Technology-b.vercel.app/api')
            console.log(res.data);
            setData(res.data.data)
            
            return res

     }catch(err){
      console.log(err);
      

     }

  }
  
    //   {
    //     name: "Alex Stanton",
    //     jobTitle: "UI/UX Designer",
    //     follow: true,
    //     description: "Hi, I'm Alex Stanton. I am a doctoral student at Oxford University majoring in UI/UX...",
    //     tasks: 60,
    //     reviews: "4.9 (970 Reviews)",
    //     image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fprofile%2520picture%2F&psig=AOvVaw1Q-5KHj-A4jD7RQz8FYs9b&ust=1752828536590000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPju2KPBw44DFQAAAAAdAAAAABAE" // Replace with actual image URL
    //   },
    //   // ...other data items
    // ])
  
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((user, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 space-y-6">
            {/* Header with profile info */}
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img 
                    src={user.image} 
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900">{user.name}</h3>
                  <p className="text-gray-600">{user.jobTitle}</p>
                </div>
              </div>
              <button 
                className={`px-4 py-1 rounded-full text-sm font-medium ${
                  user.follow 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {user.follow ? 'Followed' : 'Follow'}
              </button>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {user.description}
            </p>

            {/* Stats */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <FaTasks className="text-gray-400" />
                <div>
                  <p className="font-semibold text-gray-900">{user.tasks} Task</p>
                  <p className="text-sm text-gray-500">Completed</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CiStar className="text-yellow-400 text-xl" />
                <div>
                  <p className="font-semibold text-gray-900">{user.reviews}</p>
                  <p className="text-sm text-gray-500">Reviews</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
