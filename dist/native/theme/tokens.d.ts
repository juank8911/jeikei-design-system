export declare const tokens: {
    radius: {
        neo: number;
        soft: number;
        md: number;
        lg: number;
    };
    spacing: {
        neo: number;
        wide: number;
        normal: number;
        tight: number;
    };
};
export declare const getShadowStyle: (color: string, intensity?: "soft" | "strong" | "accent") => {
    shadowColor: string;
    shadowOffset: {
        width: number;
        height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
    elevation?: undefined;
} | {
    elevation: number;
    shadowColor?: undefined;
    shadowOffset?: undefined;
    shadowOpacity?: undefined;
    shadowRadius?: undefined;
};
