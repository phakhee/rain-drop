import React, {useEffect, useState} from 'react';
import {Drop, RainContainer} from "./styles";

function RainDrop({amount}) {
    const [drops, setDrops] = useState([]);

    // Generating random number within the min and max parameters.
    const randomInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const addDrop = () => {
        const dropObject = {
            beginX: randomInteger(1, 99),
            endY: randomInteger(70, 95),
            duration: randomInteger(1, 3),
            delay: 0
        };

        setDrops([...drops, dropObject]);
    };

    useEffect(() => {
        addDrop();
    }, []);

    useEffect(() => {
        if (drops.length === amount) setDrops([]);

        addDrop();
    }, [drops])

    return (
        <RainContainer>
            {drops.map(drop => (
                <Drop
                    beginX={drop.beginX}
                    endY={drop.endY}
                    duration={drop.duration}
                    delay={drop.delay}
                />
            ))}

        </RainContainer>
    )
}

export default RainDrop;