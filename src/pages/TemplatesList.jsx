import { useEffect, useState } from 'react';
import { getUserTemplates } from '../api/Templates';
import CloneModal from './CloneModal';
import { toast } from 'react-toastify';
import { Sparkles, Copy } from 'lucide-react';

const TemplatesList = () => {
    const [templates, setTemplates] = useState([]);
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    useEffect(() => {
        async function fetchTemplates() {
            try {
                const data = await getUserTemplates();
                setTemplates(data);
            } catch (err) {
                console.error(err);
                toast.error('Failed to load templates');
            }
        }
        fetchTemplates();
    }, []);

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">📝 My Cloned Templates</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {templates.map((t) => (
                    <li
                        key={t.id}
                        className="rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
                    >
                        <div className="p-6 flex flex-col justify-between h-full">
                            <div className="flex items-center gap-3 mb-3">
                                <Sparkles className="w-5 h-5 text-blue-600" />
                                <h3 className="text-xl font-semibold text-gray-800">{t.subject}</h3>
                            </div>
                            <p className="text-gray-600 mb-4 line-clamp-3">{t.body}</p>

                            <div className="flex justify-between items-center mt-auto">
                                <span className="text-sm text-gray-500">
                                    ID: <span className="font-mono text-gray-700">{t.id}</span>
                                </span>
                                <button
                                    className="inline-flex items-center gap-1 hover:scale-125 transform-all duration-300 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
                                    onClick={() => setSelectedTemplate(t)}
                                >
                                    <Copy className="w-4 h-4" />
                                    Clone
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            {selectedTemplate && (
                <CloneModal
                    template={selectedTemplate}
                    onClose={() => setSelectedTemplate(null)}
                    onClone={(newTemplate) => setTemplates((prev) => [newTemplate, ...prev])}
                />
            )}
        </div>
    );
};

export default TemplatesList;
