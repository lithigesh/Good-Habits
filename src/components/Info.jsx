import React from 'react';

const Info = () => {
  const benefits = [
    { icon: '💪', text: 'Stronger muscles', color: 'text-red-600' },
    { icon: '😊', text: 'Better mood', color: 'text-yellow-600' },
    { icon: '🧠', text: 'Improved focus', color: 'text-blue-600' }
  ];

  const exercises = [
    { icon: '🤸‍♀️', name: 'Jumping jacks', color: 'bg-pink-100' },
    { icon: '🦘', name: 'Skipping', color: 'bg-purple-100' },
    { icon: '🏃‍♀️', name: 'Running', color: 'bg-blue-100' },
    { icon: '🚴‍♀️', name: 'Cycling', color: 'bg-green-100' },
    { icon: '🧘‍♀️', name: 'Yoga', color: 'bg-indigo-100' }
  ];

  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          📚 Facts About Daily Exercise
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Benefits Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-purple-600 mb-6 text-center">
              🌟 Benefits of Exercise
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-4xl mb-2">{benefit.icon}</div>
                  <p className={`text-xl font-semibold ${benefit.color}`}>
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Exercises Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">
              🏃‍♀️ Simple Exercises Kids Can Do
            </h2>
            <div className="grid md:grid-cols-5 gap-4">
              {exercises.map((exercise, index) => (
                <div key={index} className={`text-center p-4 ${exercise.color} rounded-lg border-2 border-gray-200`}>
                  <div className="text-3xl mb-2">{exercise.icon}</div>
                  <p className="font-semibold text-gray-700">{exercise.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Did You Know Section */}
          <div className="bg-yellow-100 border-4 border-yellow-300 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-yellow-700 mb-4 flex items-center justify-center">
              <span className="text-3xl mr-2">💡</span>
              Did You Know?
            </h3>
            <p className="text-xl text-yellow-800 font-semibold">
              Just 30 minutes of exercise makes your heart stronger! 
              <span className="text-2xl ml-2">❤️</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
