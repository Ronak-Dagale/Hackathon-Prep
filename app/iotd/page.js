"use client"
import { useEffect, useState } from 'react';

const Iotd = () => {
    const [potdData, setPotdData] = useState([
        { title: "Idea 1", description: "Description for Idea 1", solved: false },
        { title: "Idea 2", description: "Description for Idea 2", solved: false },
        { title: "Idea 3", description: "Description for Idea 3", solved: false }
    ]);

    const [coinBalance, setCoinBalance] = useState(0);

    useEffect(() => {
        // Your JavaScript logic here
    }, []);

    const solveIdea = (index) => {
        setPotdData(prevPotdData => {
            const updatedPotdData = [...prevPotdData];
            if (!updatedPotdData[index].solved) {
                setCoinBalance(prevCoinBalance => prevCoinBalance + 5);
                updatedPotdData[index].solved = true;
            }
            return updatedPotdData;
        });
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-center text-3xl font-bold mb-8">Idea of the Day</h1>
            <div className="coin-balance text-center text-2xl mb-4">{coinBalance} Coins</div>
            <div className="potd-container">
                {potdData.map((item, index) => (
                    <div key={index} className="potd-item border-b border-gray-300 pb-4 mb-4">
                        <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                        <p className="text-base">{item.description}</p>
                        <button
                            className={`bg-green-500 text-white px-4 py-2 mt-2 float-right ${item.solved ? 'bg-gray-500 cursor-not-allowed' : ''}`}
                            onClick={() => solveIdea(index)}
                            disabled={item.solved}
                        >
                            {item.solved ? 'Solved' : 'Solve'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Iotd;
