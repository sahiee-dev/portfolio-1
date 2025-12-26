/* eslint-disable react/prop-types */
import { useRef, useMemo } from "react";
import { useDimensions } from "../../hooks/useDimensions";

/**
 * AnimatedGradient - SVG-based animated gradient background
 * Official component from 21st.dev/danielpetho
 */
const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function AnimatedGradient({
    colors = ["#06b6d4", "#0891b2", "#f97316"],
    speed = 5,
    blur = "medium"
}) {
    const containerRef = useRef(null);
    const dimensions = useDimensions(containerRef);

    const circleSize = useMemo(
        () => Math.max(dimensions.width, dimensions.height),
        [dimensions.width, dimensions.height]
    );

    const blurAmount = blur === "light" ? 40 : blur === "medium" ? 70 : 100;

    return (
        <div
            ref={containerRef}
            style={{
                position: 'absolute',
                inset: 0,
                overflow: 'hidden',
                pointerEvents: 'none',
                borderRadius: 'inherit'
            }}
        >
            <div style={{
                position: 'absolute',
                inset: 0,
                filter: `blur(${blurAmount}px)`
            }}>
                {colors.map((color, index) => (
                    <svg
                        key={index}
                        className="animated-gradient-circle"
                        style={{
                            position: 'absolute',
                            top: `${Math.random() * 50}%`,
                            left: `${Math.random() * 50}%`,
                            '--background-gradient-speed': `${Math.max(10, 1 / speed)}s`,
                            '--tx-1': Math.random() - 0.5,
                            '--ty-1': Math.random() - 0.5,
                            '--tx-2': Math.random() - 0.5,
                            '--ty-2': Math.random() - 0.5,
                            '--tx-3': Math.random() - 0.5,
                            '--ty-3': Math.random() - 0.5,
                            '--tx-4': Math.random() - 0.5,
                            '--ty-4': Math.random() - 0.5,
                        }}
                        width={circleSize * randomInt(0.5, 1.5)}
                        height={circleSize * randomInt(0.5, 1.5)}
                        viewBox="0 0 100 100"
                    >
                        <circle
                            cx="50"
                            cy="50"
                            r="50"
                            fill={color}
                            style={{ opacity: 0.4 }}
                        />
                    </svg>
                ))}
            </div>
        </div>
    );
}

export default AnimatedGradient;
