import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-yellow-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">
          🤔 Why Daily Exercise is Important?
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 text-center leading-relaxed mb-8">
            Meet <span className="font-bold text-blue-600">Arjun</span>, a student who sits long hours playing video games. 
            He often feels tired and lazy. But after starting 20 minutes of daily exercise, 
            he feels more energetic and happy! 🎮➡️🏃‍♂️
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <div className="text-center bg-red-100 p-6 rounded-lg border-2 border-red-200">
              <div className="text-6xl mb-4">😴</div>
              <h3 className="text-xl font-bold text-red-600 mb-2">Before Exercise</h3>
              <ul className="text-red-700 space-y-1">
                <li>• Tired all the time</li>
                <li>• Low energy</li>
                <li>• Feels lazy</li>
                <li>• Poor mood</li>
              </ul>
            </div>
            
            <div className="text-4xl text-green-500">
              ➡️
            </div>
            
            <div className="text-center bg-green-100 p-6 rounded-lg border-2 border-green-200">
              <div className="text-6xl mb-4">😄</div>
              <h3 className="text-xl font-bold text-green-600 mb-2">After Exercise</h3>
              <ul className="text-green-700 space-y-1">
                <li>• Full of energy</li>
                <li>• Happy mood</li>
                <li>• Strong body</li>
                <li>• Better focus</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-8xl mb-4 animate-bounce">🏃‍♂️💨</div>
            <p className="text-2xl font-bold text-orange-600">
              Just 20 minutes of exercise can change everything!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
