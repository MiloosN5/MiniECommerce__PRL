import { useAppSelector } from "../../hooks/reduxHooks";
import { RootState } from "../../store/store";
import { darkenHex, getComplementaryHex } from "../../services/colorService";

const Logo = () => {
    const { pickedColor } = useAppSelector((state: RootState) => state.color);
    const comColor = getComplementaryHex(pickedColor);

    return (
        <svg
            className="image--logoIcon"
            width="183"
            height="183"
            viewBox="0 0 183 183"
            fill="none"
        >
            <defs>
                <linearGradient x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop
                        className="start"
                        offset="0%"
                        stopColor={darkenHex(comColor, 20) || "#000000"}
                    />
                    <stop
                        className="end"
                        offset="100%"
                        stopColor={comColor || "#000000"}
                    />
                </linearGradient>
            </defs>
            <circle
                cx="91.5"
                cy="91.5"
                r="88.5"
                fill="transparent"
                stroke="url(#gradient-stroke)"
                strokeWidth="6"
            />
        </svg>
    );
};

export default Logo;
