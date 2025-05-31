
import { useState } from 'react';
import { toast } from 'react-toastify';
import { cloneTemplate } from '../api/Templates';
import { X } from 'lucide-react';

// CloneModal component receives a template, onClose, and onClone as props
const CloneModal = ({ template, onClose, onClone }) => {
    // Local state for the subject and body fields, initialized from the template
    const [subject, setSubject] = useState(template.subject);
    const [body, setBody] = useState(template.body);

    // Handles the cloning process when the user clicks 'Save as My Template'
    const handleClone = async () => {
        try {
            // Call the API to clone the template with the current subject and body
            const newTemplate = await cloneTemplate({
                baseTemplateId: template.id,
                userId: '123', // In production, replace with actual user ID
                subject,
                body,
            });
            // Show success notification
            toast.success('Template cloned successfully!');
            // Pass the new template to the parent component
            onClone(newTemplate);
            // Close the modal
            onClose();
        } catch (err) {
            // Log error and show error notification
            console.error(err);
            toast.error('Failed to clone template');
        }
    };

    return (

        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
            {/* Modal content container */}
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative animate-fade-in">
                {/* Close button */}
                <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Modal title */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">📄 Clone Template</h2>

                {/* Subject input */}
                <label className="block text-sm text-gray-600 mb-1">Subject</label>
                <input
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Enter a new subject"
                />

                {/* Body textarea */}
                <label className="block text-sm text-gray-600 mb-1">Body</label>
                <textarea
                    className="w-full h-32 border border-gray-300 rounded-lg px-3 py-2 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Customize the template body"
                />

                {/* Action buttons */}
                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleClone}
                        className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Save as My Template
                    </button>
                </div>
            </div>
        </div>
    );
};

// Export the CloneModal component as default
export default CloneModal;
