import React  from "react" ;

function UserInput({userInput , handleChange}) {
 
  return (
    <div className="max-w-lg mx-auto mt-4 p-6 bg-white rounded-lg shadow-md">
      
      <div className="space-y-4">
        {/* Initial Investment */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Initial Investment
          </label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) => handleChange("initialInvestment", e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Annual Investment */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Annual Investment
          </label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) => handleChange("annualInvestment", e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Expected Return */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Expected Return (%)
          </label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) => handleChange("expectedReturn", e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Duration */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Duration (Years)
          </label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => handleChange("duration", e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
    </div>
  );
}

export default UserInput;
