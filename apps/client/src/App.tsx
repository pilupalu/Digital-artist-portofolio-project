import { useState, useEffect } from 'react';
import { fetchWorks, createWork, deleteWork, Work } from './apiService';
import './App.css'; // Importarea fisierului .css

function App() {
    const [works, setWorks] = useState<Work[]>([]);
    const [newWork, setNewWork] = useState<Work>({
        title: '',
        description: '',
        imageUrl: '',
        clientUrl: '',
        status: 'visible',
    });

    useEffect(() => {
        fetchWorks().then(setWorks);
    }, []);

    const handleCreate = () => {
        createWork(newWork).then((work: any) => {
            setWorks([...works, work]);
            setNewWork({ title: '', description: '', imageUrl: '', clientUrl: '', status: 'visible' });
        });
    };

    const handleDelete = (id: number) => {
        deleteWork(id).then(() => setWorks(works.filter(work => work.id !== id)));
    };

    return (
        <div className="App">
            <h1>Artist Portfolio</h1>
            <div>
                <input
                    type="text"
                    placeholder="Title"
                    value={newWork.title}
                    onChange={(e) => setNewWork({ ...newWork, title: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newWork.description}
                    onChange={(e) => setNewWork({ ...newWork, description: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={newWork.imageUrl}
                    onChange={(e) => setNewWork({ ...newWork, imageUrl: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Client URL"
                    value={newWork.clientUrl}
                    onChange={(e) => setNewWork({ ...newWork, clientUrl: e.target.value })}
                />
                <button onClick={handleCreate}>Add Work</button>
            </div>
            <ul>
                {works.map(work => (
                    <li key={work.id}>
                        <h2>{work.title}</h2>
                        <p>{work.description}</p>
                        <p>Status: {work.status}</p>
                        <button onClick={() => handleDelete(work.id!)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;