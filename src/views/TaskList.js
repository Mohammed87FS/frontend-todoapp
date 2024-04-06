import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import api from '../api'; // Ensure this path is correct

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.get('/tasks')
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the tasks:', error);
            });
    }, []);

    const deleteTask = async (taskId) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            try {
                await axios.delete(`http://localhost:8000/api/tasks/${taskId}`);
                setTasks(tasks.filter(task => task.id !== taskId));
                // navigate('/Tasks'); // Might not be necessary if you're already on the tasks page
            } catch (error) {
                console.error('There was an error deleting the task:', error);
            }
        }
    };

    return (
        <div className="max-w-2xl mx-auto my-10 p-6 bg-white shadow-md rounded">
                <h2 className=" text-2xl font-bold text-gray-800 mb-8">My Tasks</h2>
            <ul className="space-y-4">
                {tasks.map(task => (
                    <li key={task.id} className="border-b border-gray-200 pb-4">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-medium">{task.title}</span>
                            <div>
                                <Link to={`/editTasks/${task.id}`}
                                    className="text-sm text-white bg-blue-500 hover:bg-blue-600 py-1 px-3 rounded transition duration-300 ease-in-out mr-2">
                                    Edit
                                </Link>
                                <button
                                    onClick={() => deleteTask(task.id)}
                                    className="text-sm text-white bg-red-500 hover:bg-red-600 py-1 px-3 rounded transition duration-300 ease-in-out">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
