export interface Work {
    id?: number;
    title: string;
    description: string;
    imageUrl: string;
    clientUrl: string;
    status: 'hidden' | 'visible';
}

const API_URL = 'http://localhost:3000/works';

export const fetchWorks = async (): Promise<Work[]> => {
    const response = await fetch(API_URL);
    return response.json();
};

export const createWork = async (work: Work): Promise<Work> => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(work),
    });
    return response.json();
};

export const updateWork = async (id: number, work: Work): Promise<Work> => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(work),
    });
    return response.json();
};

export const deleteWork = async (id: number): Promise<void> => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};