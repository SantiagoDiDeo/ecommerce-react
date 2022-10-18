import { useState } from "react"


const Loader = () => {
    const [loading, setLoading] = useState(false);
        return (
            <h2>
                {loading ? 'Cargando...' : ''}
            </h2>
        );
};

export default Loader;