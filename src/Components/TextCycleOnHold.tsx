"use client"
import {useRef} from "react";

interface TextCycleOnHoldProps {
    text: string;
    title: string;
    action: () => void;
    holdDelay?: number; // Optional prop for hold delay
    className?: string; // Optional prop for custom class name
}

export default function TextCycleOnHold({
                                            text,
                                            title,
                                            action,
                                            holdDelay = 500, // Default hold delay
                                            className = "swap_on_hold animate-pulse", // Default class name
                                        }: TextCycleOnHoldProps) {
    const holdTimer = useRef<NodeJS.Timeout>(null);

    const startHoldTimer = () => {
        holdTimer.current = setTimeout(action, holdDelay);
    };

    const clearHoldTimer = () => {
        if (holdTimer.current) {
            clearTimeout(holdTimer.current);
            holdTimer.current = null;
        }
    };

    return (
        <span
            className={className} // Use the configurable class name
            onMouseDown={startHoldTimer}
            onMouseUp={clearHoldTimer}
            onMouseLeave={clearHoldTimer}
            onTouchStart={startHoldTimer}
            onTouchEnd={clearHoldTimer}
            onTouchCancel={clearHoldTimer}
            title={title}
        >
            {text}
        </span>
    );
}