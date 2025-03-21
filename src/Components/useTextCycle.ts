import {useState} from "react";

interface UseTextCycleResult {
    currentIndex: number;
    currentText: string;
    title: string;
    cycleToNextText: () => void; // More descriptive name
}

function useTextCycle(texts: string[]): UseTextCycleResult {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cycleToNextText = () => { // More descriptive name
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    };

    const currentText = texts[currentIndex];
    const title = `${currentIndex + 1} of ${texts.length}`;

    return {
        currentIndex,
        currentText,
        title,
        cycleToNextText, // More descriptive name
    };
}

export default useTextCycle;