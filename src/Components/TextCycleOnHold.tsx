"use client"
import {useRef, useState} from "react";

interface TextCycleOnHoldProps {
    index: number;
    datas: string[];
    onTextChange?: (index: number) => void;
}

export default function TextCycleOnHold({index, datas, onTextChange}: TextCycleOnHoldProps) {
    const [currentIndex, setCurrentIndex] = useState(index);
    const holdTimer = useRef<NodeJS.Timeout>(null);

    const HOLD_DELAY = 500;

    const handleHold = () => {
        setCurrentIndex((currentIndex + 1) % datas.length);
        onTextChange?.(currentIndex);
    };

    const startHoldTimer = () => {
        holdTimer.current = setTimeout(handleHold, HOLD_DELAY);
    };

    const clearHoldTimer = () => {
        if (holdTimer.current) {
            clearTimeout(holdTimer.current);
            holdTimer.current = null; // Clear the timer ID
        }
    };


    return (
        <span className={"swap_on_hold"}
              onMouseDown={startHoldTimer}
              onMouseUp={clearHoldTimer}
              onMouseLeave={clearHoldTimer}

              onTouchStart={startHoldTimer}
              onTouchEnd={clearHoldTimer}
              onTouchCancel={clearHoldTimer}
              title={`${currentIndex + 1} of ${datas.length}`}
        >
            {datas[currentIndex]}
        </span>
    )
}