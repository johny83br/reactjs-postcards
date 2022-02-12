import './styles.css';

export const TextInput = ({ handleChange }) => {
    return  (
        <input 
            className="text-input" 
            onChange={handleChange} 
            type="search" 
            placeholder="Type your search"
        />
    );
}