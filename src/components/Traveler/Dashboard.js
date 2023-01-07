import React from "react";

export default function Dashboard() {

    return (
        <div>
            <div className="bg-gray-200 p-6">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="/profile.jpg"
          alt="Profile picture"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            John Doe
          </div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #nature
          </span>
        </div>
      </div>
    </div>
    
    </div>
    )
}
