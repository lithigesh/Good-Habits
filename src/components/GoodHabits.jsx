import React, { useState } from 'react';

const habits = [
  { id: 1, text: 'Exercise at least 20 minutes daily', icon: '🏃', color: 'bg-red-100 border-red-300' },
  { id: 2, text: 'Eat fruits and vegetables', icon: '🥗', color: 'bg-green-100 border-green-300' },
  { id: 3, text: 'Drink enough water', icon: '💧', color: 'bg-blue-100 border-blue-300' },
  { id: 4, text: 'Get 8 hours of sleep', icon: '😴', color: 'bg-purple-100 border-purple-300' },
  { id: 5, text: 'Take short breaks from screens', icon: '🚶', color: 'bg-yellow-100 border-yellow-300' },
];

const GoodHabits = () => {
  const [checkedHabits, setCheckedHabits] = useState({});

  const handleCheckboxChange = (id) => {
    setCheckedHabits(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const checkedCount = Object.values(checkedHabits).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-green-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-8">
          ✨ Good Habits for Fitness
        </h1>
        
        <div className="max-w-3xl mx-auto">
          {/* Progress Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8 text-center">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">
              Your Progress 📊
            </h2>
            <div className="text-4xl mb-2">
              {checkedCount === 0 && '🌱'}
              {checkedCount === 1 && '🌿'}
              {checkedCount === 2 && '🌸'}
              {checkedCount === 3 && '🌺'}
              {checkedCount === 4 && '🌟'}
              {checkedCount === 5 && '🏆'}
            </div>
            <p className="text-xl font-semibold text-gray-700">
              {checkedCount} out of 5 habits completed!
            </p>
            {checkedCount === 5 && (
              <p className="text-lg text-orange-600 font-bold mt-2">
                🎉 Amazing! You're a fitness champion! 🎉
              </p>
            )}
          </div>

          {/* Habits Checklist */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
              Daily Fitness Checklist ✅
            </h2>
            <div className="space-y-4">
              {habits.map(habit => (
                <div 
                  key={habit.id} 
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    checkedHabits[habit.id] 
                      ? 'bg-green-100 border-green-400 transform scale-105' 
                      : `${habit.color} hover:shadow-md`
                  }`}
                >
                  <label 
                    htmlFor={`habit-${habit.id}`} 
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id={`habit-${habit.id}`}
                      checked={!!checkedHabits[habit.id]}
                      onChange={() => handleCheckboxChange(habit.id)}
                      className="mr-4 w-5 h-5 text-green-600 rounded focus:ring-2 focus:ring-green-500"
                    />
                    <div className="text-3xl mr-4">{habit.icon}</div>
                    <span className={`text-lg font-semibold ${
                      checkedHabits[habit.id] ? 'text-green-700 line-through' : 'text-gray-700'
                    }`}>
                      {habit.text}
                    </span>
                    {checkedHabits[habit.id] && (
                      <span className="ml-auto text-2xl">✅</span>
                    )}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Motivation Section */}
          <div className="bg-orange-100 border-4 border-orange-300 rounded-lg p-6 mt-8 text-center">
            <h3 className="text-xl font-bold text-orange-700 mb-2">
              💪 Remember: Small steps lead to big changes!
            </h3>
            <p className="text-orange-600">
              Every habit you build today makes you stronger tomorrow! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodHabits;
