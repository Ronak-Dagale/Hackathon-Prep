"use client"
import { useState } from 'react';

const uyi = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const markdownContent = `# ${formData.title}\n\n**Description:** ${formData.description}\n\n## Question\n\n${formData.question}\n\n### Options\n\n1. ${formData.option1}\n2. ${formData.option2}\n3. ${formData.option3}\n4. ${formData.option4}\n`;
        downloadMarkdown(markdownContent);
    };

    const downloadMarkdown = (markdownContent) => {
        const blob = new Blob([markdownContent], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'solution.md';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-center text-3xl font-bold mb-8">Idea Creator</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="6" className="w-full p-2 border border-gray-300 rounded"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="question">Question:</label>
                    <textarea id="question" name="question" value={formData.question} onChange={handleChange} rows="4" className="w-full p-2 border border-gray-300 rounded"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="option1">Option 1:</label>
                    <input type="text" id="option1" name="option1" value={formData.option1} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="form-group">
                    <label htmlFor="option2">Option 2:</label>
                    <input type="text" id="option2" name="option2" value={formData.option2} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="form-group">
                    <label htmlFor="option3">Option 3:</label>
                    <input type="text" id="option3" name="option3" value={formData.option3} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="form-group">
                    <label htmlFor="option4">Option 4:</label>
                    <input type="text" id="option4" name="option4" value={formData.option4} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700">Download Solution</button>
            </form>
        </div>
    );
};

export default uyi;
