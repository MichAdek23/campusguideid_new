import React, { useState, useEffect } from 'react';
import { getFiles } from '../utils/api'; // Assuming your API functions are in api.js

const FileRetrieval = ({ faculty, department, year_of_admission }) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch files on component mount or when parameters change
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        setLoading(true);
        const fetchedFiles = await getFiles(faculty, department, year_of_admission);
        setFiles(fetchedFiles);
      } catch (err) {
        setError('Error fetching files');
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, [faculty, department, year_of_admission]); // Fetch files when these params change

  if (loading) {
    return <p>Loading files...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      <h1>Files</h1>
      {files.length === 0 ? (
        <p>No files found for the selected criteria.</p>
      ) : (
        <ul>
          {files.map((file, index) => (
            <li key={index}>
              <a href={`${process.env.REACT_APP_API_URL}/uploads/${file}`} target="_blank" rel="noopener noreferrer">
                {file}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileRetrieval;
