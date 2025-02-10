import React from 'react';
import { BrainCircuit } from 'lucide-react'; // Import BrainCircuit from lucide-react

const AIProjects = () => {
    return (
        <div className="p-4">
            <BrainCircuit className="h-15 w-15 text-pink-8000" /> {/* Added text color for the icon */}
            <h1 className="mt-4 text-xl font-bold text-black">AI</h1>
            <article className="rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
                <p className="mt-1 text-sm text-gray-600">
                    I'm very enthusiastic about being part of the AI revolution that's shaping our century, and I am actively working towards gaining involvement in this field.
                </p>
            </article>
        </div>
    );
};

export default AIProjects;

