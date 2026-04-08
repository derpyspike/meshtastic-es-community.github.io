import React, { useState } from 'react';

const MeshtasticConfigGenerator = () => {
    const [includeTest, setIncludeTest] = useState(false);
    const [includeBots, setIncludeBots] = useState(false);

    const base64ToPsk = (password) => {
        return Buffer.from(password, 'base64').toString('utf-8');
    };

    const generateConfigUrl = () => {
        let url = 'http://example.com/generate?';
        if (includeTest) {
            url += 'channel=test&psk=' + base64ToPsk('Ag==');
        }
        if (includeBots) {
            url += 'channel=bots&psk=' + base64ToPsk('Ag==');
        }
        // Other URL parameters...
        return url;
    };

    return (
        <div>
            <h1>Meshtastic Config Generator</h1>
            <div>
                <h2>Canales Adicionales</h2>
                <label>
                    <input 
                        type="checkbox" 
                        checked={includeTest} 
                        onChange={() => setIncludeTest(!includeTest)} 
                    /> 
                    Include Test Channel
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        checked={includeBots} 
                        onChange={() => setIncludeBots(!includeBots)} 
                    /> 
                    Include Bots Channel
                </label>
            </div>
            <button onClick={() => console.log(generateConfigUrl())}>Generate Config URL</button>
        </div>
    );
};

export default MeshtasticConfigGenerator;